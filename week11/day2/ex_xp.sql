--CREATE TABLE items (
--    itemid serial unique primary key,
--    name varchar(255) not null,
--    price float not null
--    )
    
--CREATE TABLE customers (
--  customerid serial unique primary key,
--  firstname varchar(255) not null,
--  lastname varchar(255) not null
--)

--INSERT INTO items (name, price)
--VALUES ('Small Desk', 100),
--        ('Large desk', 300),
--       ('Fan', 80)



--INSERT INTO customers (firstname, lastname)
--VALUES ('Greg','Jones'),
--        ('Sandra', 'Jones'),
--        ('Scott', 'Scott'),
--        ('Trevor', 'Green'),
--        ('Melanie', 'Johnson')
        
--SELECT * FROM customers;

--1 All the items.
--2 All the items with a price above 80 (80 not included).
--3 All the items with a price below 300. (300 included)
--4 All customers whose last name is ‘Smith’ (What will be your outcome?).
--5 All customers whose last name is ‘Jones’.
--6 All customers whose firstname is not ‘Scott’.

--1 All items
--SELECT * FROM items;

--2 All the items with a price above 80 (80 not included)
--SELECT * FROM items WHERE price > 80;

--3 All the items with a price below 300. (300 included)
--SELECT * FROM items WHERE price <= 300;

--4 All customers whose last name is ‘Smith’ (What will be your outcome?).
--SELECT firstname, lastname FROM customers WHERE lastname='Smith';

--5 All customers whose last name is ‘Jones’.
--SELECT * FROM customers WHERE lastname='Jones';

--6 All customers whose firstname is not ‘Scott’.
--SELECT * FROM customers WHERE firstname NOT LIKE 'Scott';