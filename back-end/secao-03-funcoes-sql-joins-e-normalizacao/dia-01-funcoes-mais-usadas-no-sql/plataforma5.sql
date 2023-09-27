SELECT AVG(length) AS 'Media de Duracao' FROM sakila.film;
SELECT MIN(length) AS 'Duracao Minima' FROM sakila.film;
SELECT MAX(length) AS 'Duracao Maxima' FROM sakila.film;
SELECT SUM(length) AS 'Tempo de Exibicao Total' FROM sakila.film;
SELECT COUNT(film_id) AS 'Filmes Registrados' FROM sakila.film;
