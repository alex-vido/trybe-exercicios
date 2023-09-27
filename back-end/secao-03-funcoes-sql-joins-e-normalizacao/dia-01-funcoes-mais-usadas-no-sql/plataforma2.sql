SELECT
title, rating,
CASE
	WHEN rating = 'G' tHEN 'Livre para todas as idades'
    WHEN rating = 'PG' tHEN 'Maiores de 10 anos'
    WHEN rating = 'PG-13' tHEN 'Maiores de 13 anos'
    WHEN rating = 'R' tHEN 'Maiores de 17 anos'
    ELSE 'Proibido para menores de idade'
END AS 'grupo alvo'
FROM sakila.film;