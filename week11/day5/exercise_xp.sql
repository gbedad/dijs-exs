--BASIC STATEMENTS

--Q1
--select first_name as first, last_name as last from employees;

--Q2
--select distinct(department_id) from employees;

--Q3
--select * from employees order by first_name desc;

--Q4
--select first_name, last_name, salary, salary*.15 as PF from employees;

--Q5
--select employee_id, concat(first_name, ' ', last_name) as name, salary from employees order by salary asc;

--Q6
--select sum(salary) from employees;

--Q7
--select min(salary) as min_salary, max(salary) as max_salary from employees;

--Q8
--select avg(salary) as avg_salary from employees;

--Q9
--select count(*) from employees;

--Q10
--select upper(first_name) from employees;

--Q11
--select left(first_name, 3) from employees;

--Q12
--select concat(first_name, ' ', last_name) as full_name from employees;

--Q13
--select first_name, last_name, length(concat(first_name, last_name)) as length_fn from employees;

--Q14
--select * from employees where first_name like '%[0-9]%';

--Q15
--select first_name, last_name from employees limit 10;


-- RESTRINGTING AND SORTING

--Q1
--select first_name, last_name, salary from employees where salary >= 10000 and salary <= 15000;

--Q2
--select first_name, last_name,hire_date from employees where hire_date >= '1987-01-01' and hire_date <= '1987-12-31';

--Q3
/*
select * from employees 
where first_name like '%e%' 
and first_name like '%c%';
*/

--Q4
/*
select e.first_name, e.last_name, e.salary, j.job_title from employees as e
left join jobs as j
on e.job_id = j.job_id
where j.job_title != 'Programmer'
and j.job_title != 'Shipping Clerk'
and e.salary != 4500 
and e.salary != 10000
and e.salary != 15000;
*/

--Q5
--select first_name, last_name from employees where length(last_name)=6;

--Q6
--select first_name, last_name from employees where last_name like '__e%';

--Q7
--select e.first_name, e.last_name, j.job_title from employees as e left join jobs as j on e.job_id = j.job_id;

--Q8
--select * from employees WHERE upper(last_name) = 'JONES' or upper(last_name) = 'BLAKE' or upper(last_name) = 'KING' or upper(last_name) = 'SCOTT';