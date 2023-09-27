SELECT c.first_name, c.email,
a.address_id, a.address, a.district
FROM sakila.address AS a
INNER JOIN sakila.customer AS c
ON a.address_id = c.address_id
WHERE a.district = 'California' AND
first_name LIKE '%RENE%';