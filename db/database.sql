CREATE DATABASE IF NOT EXISTS companydb;


USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary int(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Cristian', 1800),
(2, 'Carmen', 2000),
(3, 'Nemecio', 1500),
(4, 'Angel', 500),
(5, 'Maricarmen', 1000);

