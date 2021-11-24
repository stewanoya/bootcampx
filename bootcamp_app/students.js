const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const args = process.argv;
pool
  .query(
    `SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${args[2]}%'
LIMIT ${args[3] || 5};`
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.log("query error", err));
