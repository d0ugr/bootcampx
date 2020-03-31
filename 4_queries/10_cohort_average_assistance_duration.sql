

SELECT AVG(total_duration) AS average_total_duration
FROM (
  SELECT   SUM(completed_at - started_at) AS total_duration
  FROM     assistance_requests
  JOIN     students ON students.id = assistance_requests.student_id
  JOIN     cohorts ON cohorts.id = students.cohort_id
  GROUP BY cohorts.name
) AS attack_of_the_big_bird_and_snuffy_clones;



