CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(15),
department_name VARCHAR(15),
price DECIMAL (10.2),
stock_quantity INT NOT NULL
);


INSERT INTO products(product_name,department_name,price,)
VALUES("coffee table","funiture",200.00);

INSERT INTO products(product_name,department_name,price,)
VALUES("recliner","funiture",250.00);

INSERT INTO products(product_name,department_name,price)
VALUES("dress shirt","clothing",12.00);

INSERT INTO products(product_name,department_name,price)
VALUES("hat","clothing",8.00);

INSERT INTO products(product_name,department_name,price)
VALUES("joggers","clothing",25.00);

INSERT INTO product(product_name,department_name,price)
VALUES("backpack", "clothing",13.00);

INSERT INTO products(product_name,department_name,price)
VALUES("slippers","clothing",5.00);

INSERT INTO products(product_name,department_name,price)
VALUES("ottoman","funiture",50.00);

INSERT INTO products(product_name,department_name,price)
VALUES("lamp","funiture",20.00);

INSERT INTO products(product_name,department_name,price)
VALUES("sectional","funiture",700.00);

