SELECT AVG(completed_at - started_at) AS average_assistance_time, cohorts.name as name
FROM assistance_requests
JOIN students on students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time;