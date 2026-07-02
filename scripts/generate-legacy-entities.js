const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const SCHEMA = 'sepidejam_sepidejam_sg3';
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'legacy', 'entities');
const LEGACY_MODULE_PATH = path.join(__dirname, '..', 'src', 'legacy', 'legacy.module.ts');

const PG_TYPE_MAP = {
  'integer': 'number',
  'int': 'number',
  'int4': 'number',
  'int8': 'number',
  'smallint': 'number',
  'bigint': 'number',
  'decimal': 'number',
  'numeric': 'number',
  'real': 'number',
  'float': 'number',
  'float4': 'number',
  'float8': 'number',
  'double precision': 'number',
  'money': 'number',
  'boolean': 'boolean',
  'bool': 'boolean',
  'character varying': 'string',
  'varchar': 'string',
  'character': 'string',
  'char': 'string',
  'text': 'string',
  'json': 'Record<string, unknown>',
  'jsonb': 'Record<string, unknown>',
  'timestamp': 'Date',
  'timestamptz': 'Date',
  'timestamp with time zone': 'Date',
  'timestamp without time zone': 'Date',
  'date': 'Date',
  'time': 'Date',
  'timetz': 'Date',
  'uuid': 'string',
  'bytea': 'Buffer',
  'bit': 'boolean',
  'inet': 'string',
  'cidr': 'string',
  'macaddr': 'string',
  'interval': 'string',
};

function toPascalCase(str) {
  return str.replace(/([A-Z])/g, ' $1').replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(' ').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function getClassName(tableName) {
  const clean = tableName.replace(/[^a-zA-Z0-9]/g, '');
  return 'Legacy' + (clean.charAt(0).toUpperCase() + clean.slice(1));
}

function getTsType(pgType, nullable) {
  const baseType = pgType.toLowerCase().split('(')[0].split(' ')[0];
  let tsType = PG_TYPE_MAP[baseType] || 'string';
  if (pgType.includes('[]') || pgType.startsWith('_')) {
    tsType = `${tsType}[]`;
  }
  return tsType + (nullable ? ' | null' : '');
}

function cleanDefaultValue(rawDefault) {
  if (rawDefault === null || rawDefault === undefined) return undefined;
  const dv = String(rawDefault);
  if (dv.startsWith('nextval') || dv.includes('::')) return undefined;
  if (dv === 'true') return true;
  if (dv === 'false') return false;
  const num = Number(dv);
  if (!isNaN(num) && dv.trim() !== '') return num;
  return undefined;
}

function getDecoratorType(pgType) {
  const baseType = pgType.toLowerCase().split('(')[0].split(' ')[0];
  const typeMap = {
    'integer': 'int',
    'int': 'int',
    'int4': 'int',
    'int8': 'int',
    'smallint': 'int',
    'bigint': 'int',
    'decimal': 'decimal',
    'numeric': 'decimal',
    'real': 'float8',
    'float': 'float8',
    'float8': 'float8',
    'double precision': 'float8',
    'money': 'decimal',
    'boolean': undefined,
    'bool': undefined,
    'timestamp': 'timestamptz',
    'timestamptz': 'timestamptz',
    'timestamp with time zone': 'timestamptz',
    'timestamp without time zone': 'timestamptz',
    'date': 'date',
    'time': 'time',
    'timetz': 'timetz',
    'uuid': 'uuid',
    'json': 'json',
    'jsonb': 'jsonb',
    'bytea': 'bytea',
    'character varying': undefined,
    'varchar': undefined,
    'character': undefined,
    'char': undefined,
    'text': undefined,
    'inet': undefined,
    'bit': undefined,
    'interval': undefined,
  };
  return typeMap[baseType];
}

function generateEntityFile(tableName, columns, className) {
  if (!className) className = getClassName(tableName);
  const lines = [];
  lines.push(`import { Entity, Column`);

  const pkCols = columns.filter(c => c.isPk);
  const hasPk = pkCols.length > 0;
  lines[0] = lines[0] + `, PrimaryColumn } from 'typeorm';`;
  lines.push('');

  lines.push(`@Entity({ schema: '${SCHEMA}', name: '${tableName}' })`);
  lines.push(`export class ${className} {`);

  for (const col of columns) {
    const tsType = getTsType(col.dataType, col.nullable);
    const decoType = getDecoratorType(col.dataType);
    const isPkCol = col.isPk || !hasPk; // If no PK in DB, treat all as composite PK

    const isPk = isPkCol;
    const decoName = isPk ? 'PrimaryColumn' : 'Column';
    let deco = `  @${decoName}({ type: '${col.dataType.split('(')[0]}'`;
    if (col.name !== col.camelName) deco += `, name: '${escapeStr(col.name)}'`;
    if (!isPk && col.nullable) deco += `, nullable: true`;
    if (!isPk) {
      const cleanDv = cleanDefaultValue(col.defaultValue);
      if (cleanDv !== undefined) {
        const dv = typeof cleanDv === 'string' ? `'${cleanDv}'` : String(cleanDv);
        deco += `, default: ${dv}`;
      }
    }
    deco += ` })`;
    lines.push(deco);
    lines.push(`  ${col.camelName}: ${tsType};`);
    lines.push('');
  }

  lines.push(`}`);
  return lines.join('\n');
}

function toCamelCase(str) {
  if (!str) return '_empty';
  let clean = str.replace(/[\r\n\t]+/g, ' ').replace(/[^a-zA-Z0-9 ]/g, ' ').trim();
  if (!clean) return '_unnamed';
  let result = clean.split(/\s+/)
    .map((s, i) => i === 0 ? s[0].toLowerCase() + s.slice(1) : s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join('');
  if (/^[0-9]/.test(result)) result = '_' + result;
  return result;
}

function escapeStr(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
}

const TABLE_LIMIT = parseInt(process.argv[2], 10) || 0; // 0 = all tables

async function main() {
  console.log('Connecting to database...');
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '97531372',
    database: 'superapp',
  });
  await client.connect();

  // Get all tables
  const limitClause = TABLE_LIMIT > 0 ? ` LIMIT ${TABLE_LIMIT}` : '';
  const tablesResult = await client.query(
    `SELECT table_name FROM information_schema.tables 
     WHERE table_schema = $1 AND table_type = 'BASE TABLE' 
     ORDER BY table_name${limitClause}`,
    [SCHEMA]
  );

  // Get all primary keys
  const pkResult = await client.query(
    `SELECT kcu.table_name, kcu.column_name
     FROM information_schema.table_constraints tc
     JOIN information_schema.key_column_usage kcu 
       ON tc.constraint_name = kcu.constraint_name
       AND tc.table_schema = kcu.table_schema
     WHERE tc.constraint_type = 'PRIMARY KEY'
       AND tc.table_schema = $1`,
    [SCHEMA]
  );

  const pkMap = {};
  for (const row of pkResult.rows) {
    if (!pkMap[row.table_name]) pkMap[row.table_name] = new Set();
    pkMap[row.table_name].add(row.column_name);
  }

  // Get all columns
  const colsResult = await client.query(
    `SELECT table_name, column_name, data_type, 
            is_nullable, column_default, character_maximum_length
     FROM information_schema.columns
     WHERE table_schema = $1
     ORDER BY table_name, ordinal_position`,
    [SCHEMA]
  );

  // Group columns by table
  const tableColumns = {};
  for (const row of colsResult.rows) {
    if (!tableColumns[row.table_name]) tableColumns[row.table_name] = [];
    const isPk = pkMap[row.table_name]?.has(row.column_name) || false;
    const camelName = toCamelCase(row.column_name);
    // Ensure unique column names within a table
    const usedNames = new Set(tableColumns[row.table_name].map(c => c.camelName));
    let uniqueName = camelName;
    let suffix = 1;
    while (usedNames.has(uniqueName)) {
      uniqueName = camelName + '_' + suffix++;
    }
    tableColumns[row.table_name].push({
      name: row.column_name,
      camelName: uniqueName,
      dataType: row.data_type,
      nullable: row.is_nullable === 'YES',
      defaultValue: row.column_default,
      maxLength: row.character_maximum_length,
      isPk,
    });
  }

  // Skip tables with issues (e.g., no columns)
  const tables = tablesResult.rows.map(r => r.table_name).filter(t => tableColumns[t]?.length > 0);
  console.log(`Total tables in ${SCHEMA}: ${tables.length}`);

  // Group tables by prefix
  const groups = {};
  for (const tableName of tables) {
    const parts = tableName.split('_');
    const prefix = parts.length > 1 ? parts[0] : tableName.substring(0, Math.min(4, tableName.length));
    if (!groups[prefix]) groups[prefix] = [];
    groups[prefix].push(tableName);
  }

  // Create entity directory and generate files
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let generatedCount = 0;
  let groupDirNames = {};
  const usedClassNames = new Set();

  for (const [prefix, tbls] of Object.entries(groups)) {
    const dirName = prefix.toLowerCase();
    const groupDir = path.join(OUTPUT_DIR, dirName);
    fs.mkdirSync(groupDir, { recursive: true });
    groupDirNames[prefix] = dirName;

    for (const tableName of tbls) {
      const columns = tableColumns[tableName];
      let className = getClassName(tableName);
      let uniqueName = className;
      let suffix = 1;
      while (usedClassNames.has(uniqueName)) {
        uniqueName = className + suffix++;
      }
      usedClassNames.add(uniqueName);
      const content = generateEntityFile(tableName, columns, uniqueName);
      const fileName = `${uniqueName}.entity.ts`;
      fs.writeFileSync(path.join(groupDir, fileName), content, 'utf-8');
      generatedCount++;
    }
    console.log(`  [${prefix}] generated ${tbls.length} entities in ${dirName}/`);
  }

  // Generate barrel export index.ts for the main entities directory
  const exportLines = [];
  const exportedClasses = new Set();
  
  // Track directories already processed to avoid duplicates (e.g., Bank/bank -> same dir)
  const processedDirs = new Set();
  for (const [prefix, dirName] of Object.entries(groupDirNames)) {
    if (processedDirs.has(dirName)) continue;
    processedDirs.add(dirName);
    const groupDir = path.join(OUTPUT_DIR, dirName);
    const files = fs.readdirSync(groupDir).filter(f => f.endsWith('.entity.ts'));
    for (const file of files) {
      const className = file.replace('.entity.ts', '');
      if (exportedClasses.has(className)) continue;
      exportedClasses.add(className);
      exportLines.push(`export { ${className} } from './${dirName}/${className}.entity';`);
    }
  }
  // Also add the existing legacy entities that are directly in the entities folder
  const existingFiles = fs.readdirSync(OUTPUT_DIR)
    .filter(f => f.endsWith('.entity.ts') && !fs.statSync(path.join(OUTPUT_DIR, f)).isDirectory());
  
  for (const file of existingFiles) {
    const className = file.replace('.entity.ts', '');
    if (exportedClasses.has(className)) continue;
    exportedClasses.add(className);
    exportLines.push(`export { ${className} } from './${file.replace('.entity.ts', '')}.entity';`);
  }

  const indexContent = `// Auto-generated legacy entity barrel export
// Generated at: ${new Date().toISOString()}

${exportLines.join('\n')}
`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent, 'utf-8');

  // Generate all-entities array for module registration
  const allEntitiesLines = [
    '// Auto-generated legacy entity array for TypeOrmModule.forFeature',
    '// Generated at: ' + new Date().toISOString(),
    '',
    `import { ${[...exportedClasses].join(', ')} } from './index';`,
    '',
    'export const legacyEntities = [',
    ...([...exportedClasses].map(c => `  ${c},`)),
    '] as const;',
    '',
  ];
  fs.writeFileSync(path.join(OUTPUT_DIR, 'all-legacy-entities.ts'), allEntitiesLines.join('\n'), 'utf-8');

  console.log(`\n✅ Generated ${generatedCount} legacy entity files in ${Object.keys(groups).length} groups`);
  console.log(`   Output: ${OUTPUT_DIR}`);

  await client.end();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
