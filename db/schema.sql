### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger_table (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured boolean NOT NULL,
  date TIMESTAMP,
  PRIMARY KEY (id)
);  
  