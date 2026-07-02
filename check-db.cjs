const { Pool } = require('pg');
const p = new Pool({host:'localhost',port:5432,database:'superapp',user:'postgres',password:'97531372'});
(async()=>{
  const c = await p.connect();
  const r = await c.query("SELECT table_name FROM information_schema.tables WHERE table_schema='sepidejam_sepidejam_sg3' ORDER BY table_name");
  console.log(r.rows.map(x=>x.table_name).join('\n'));
  c.release();
  await p.end();
})();
