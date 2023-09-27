SELECT c.first_name, c.last_name,
COUNT(r.customer_id) AS 'filmes alugados'
FROM sakila.customer AS c
INNER JOIN sakila.rental AS r
ON c.customer_id = r.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name;