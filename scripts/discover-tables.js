const { Client } = require('pg');

async function main() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '97531372',
    database: 'superapp',
  });

  await client.connect();

  const result = await client.query(
    `SELECT table_name FROM information_schema.tables 
     WHERE table_schema = 'sepidejam_sepidejam_sg3' 
       AND table_type = 'BASE TABLE' 
     ORDER BY table_name`
  );

  const tables = result.rows.map(r => r.table_name);
  console.log(`Total tables in sg3: ${tables.length}`);

  // Group by prefix (first segment before underscore)
  const groups = {};
  for (const t of tables) {
    const parts = t.split('_');
    const prefix = parts.length > 1 ? parts[0] : t.substring(0, 4);
    if (!groups[prefix]) groups[prefix] = [];
    groups[prefix].push(t);
  }

  const sorted = Object.entries(groups).sort((a, b) => b[1].length - a[1].length);
  
  console.log('\n=== Table groups by prefix ===');
  for (const [prefix, tbls] of sorted) {
    console.log(`\n${prefix} (${tbls.length} tables):`);
    for (const t of tbls) {
      console.log(`  - ${t}`);
    }
  }

  await client.end();
}

main().catch(console.error);
