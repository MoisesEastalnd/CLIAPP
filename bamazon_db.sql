CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INTEGER (8) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(15),
department_name VARCHAR(15),
price INTEGER(6),
stock_quantity INTEGER(5) AUTO_INCREMENT 
)