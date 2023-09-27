SELECT c.customer_id, c.first_name, c.email,
a.address_id, a.address
FROM sakila.address AS a
INNER JOIN sakila.customer AS c
ON a.address_id = c.address_id
ORDER BY c.first_name DESC
LIMIT 100;