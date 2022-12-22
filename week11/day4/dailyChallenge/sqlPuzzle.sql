-- This script will create FirstTab table with 2 fields id and name and insert into this table 4 items. The last one does not have an id. Then it will display all the items.
-- The same will be done with the second table. In secondTab the second item will be null.
/* CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab */

-- Q1 
/*
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
*/
-- the query will count the number of items from firstTab with id != 5 : 2 items 6 and 7
--Q2
/*
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
*/
-- the query will count 2 items
--Q3
/*
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
*/


--Q4
/*
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
*/
-- The query will count 2 items