CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100)NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 4, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 20, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pants", "Clothing", 50, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boots", "Shoes" , 100, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hat", "Accessories", 25, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoop Earrings", "Jewlery", 30, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ring", "Jewelry", 20, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Necklace", "Jewelry", 40, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater", "Clothing", 60, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Belt", "Accessories", 40, 20);