SELECT s.first_name, s.last_name,
AVG(p.amount) AS 'media_pagamento'
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(payment_date) = 2006
GROUP BY s.first_name, s.last_name;