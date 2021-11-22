SELECT AVG(assignment_submissions.duration) as average_assignment_duration, students.name as student
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name 
ORDER BY average_assignment_duration DESC;