


const args = process.argv.slice(2);

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT   teachers.name AS teacher, cohorts.name AS cohort
  FROM     cohorts
  JOIN     students ON students.cohort_id = cohorts.id
  JOIN     assistance_requests ON assistance_requests.student_id = students.id
  JOIN     teachers ON teachers.id = assistance_requests.teacher_id
  WHERE    cohorts.name = '${args[0]}'
  GROUP BY teachers.name, cohorts.name
  ORDER BY teachers.name;
`).then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  });
});



