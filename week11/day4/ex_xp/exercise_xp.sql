-- Q1
--select * from customer;

-- Q2
--select concat(first_name, last_name) as full_name from customer;

--Q3
--select distinct(create_date) from customer;

--Q4
--select * from customer order by first_name desc;

--Q5
--select film_id, title, description,release_year, rental_rate from film  order by rental_rate asc;

--Q6
--select c.first_name, c.last_name, a.phone, a.address, a.postal_code  from customer as c left join address as a on c.address_id = a.address_id where a.district='Texas';

--Q7
-- select * from film where film_id=15 or film_id=150;

--Q8
--select film_id, title, description, length, release_year rental_rate from film where title='Garden Island';

--Q9
--select film_id, title, description, length, release_year rental_rate from film where title like 'Ga%';

--Q10
--select film_id, title, rental_rate from film order by rental_rate asc limit 10;

--Q11
--select film_id, title, rental_rate from film order by rental_rate asc offset 10 limit 10;

--Q12
--select c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date from customer as c left join payment as p on  c.customer_id=p.customer_id order by c.customer_id asc

--Q13
--select i.inventory_id, i.film_id, f.title, r.rental_date, r.return_date from film as f left join inventory as i  on f.film_id=i.film_id  left join rental as r  on r.inventory_id=i.inventory_id  where r.return_date is not null;

--Q14
--select c.city, co.country from city as c left join country as co  on c.country_id = co.country_id;

--Q15 Bonus
--select s.staff_id, c.first_name, c.last_name, p.amount, p.payment_date from staff as s left join payment as p on p.staff_id = s.staff_id left join customer as c on c.customer_id = p.customer_id order by s.staff_id;