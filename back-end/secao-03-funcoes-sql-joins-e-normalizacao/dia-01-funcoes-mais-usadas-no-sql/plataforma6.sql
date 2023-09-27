SELECT rating, AVG(length) AS 'Media Duracao'
FROM sakila.film
GROUP BY rating
HAVING AVG(length) BETWEEN 115.0 AND 121.50
ORDER BY 'Media Duracao' DESC;

SELECT rating, SUM(replacement_cost) AS 'Soma Custos'
FROM sakila.film
GROUP by rating
HAVING SUM(replacement_cost) > 3950.50
ORDER BY 'Soma Custos' ASC;