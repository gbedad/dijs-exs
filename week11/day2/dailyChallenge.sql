--CREATE TABLE actors(
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50) NOT NULL,
-- last_name VARCHAR (100) NOT NULL,
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
--)

--INSERT INTO actors (first_name, last_name, age, number_oscars)
--VALUES('Matt','Damon','08/10/1970', 5);

--INSERT INTO actors (first_name, last_name, age, number_oscars)
--VALUES('George','Clooney','06/05/1961', 2);

--INSERT INTO actors (first_name, last_name, age, number_oscars)
--VALUES('Elisabeth','Taylor','01/01/1962', 2);

--SELECT COUNT(*)  FROM actors;

INSERT INTO actors (first_name, last_name)
VALUES('John','Wayne');
-- FAILED ERROR:  null value in column "age" of relation "actors" violates not-null constraint
--DETAIL:  Failing row contains (6, John, Wayne, null, null).
--SQL state: 23502