CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured boolean NOT NULL,
  date TIMESTAMP,
  PRIMARY KEY (id)
);    