

CREATE DATABASE kafka_connect_test;

USE kafka_connect_test;

CREATE TABLE tableA (
    id int auto_increment primary key,
    name varchar(255),
    age int
);

DROP TABLE tableB;
CREATE TABLE tableB (
    id int auto_increment primary key,
    name varchar(255),
    age int
);

-- Schema changes?
CREATE TABLE tableC (
    id int auto_increment primary key,
    name varchar(255),
    age int
);

INSERT INTO tableA (name, age) VALUES ('name4', 6);

SELECT * FROM tableA;




SELECT * FROM tableB;




