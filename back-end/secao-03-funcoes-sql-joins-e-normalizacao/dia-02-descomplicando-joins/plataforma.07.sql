SELECT a.actor_id, a.first_name, 
fa.film_id, f.title
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id 
INNER JOIN film AS f
ON fa.film_id = f.film_id;