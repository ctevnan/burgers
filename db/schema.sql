### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger_table
  (
    id INT PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP
  );