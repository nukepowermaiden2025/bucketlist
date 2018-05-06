DROP DATABASE IF EXISTS bucketlists_db;

CREATE DATABASE bucketlists_db;

USE bucketlists_db;

CREATE TABLE bucketlists(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bucketItem_name VARCHAR(255) DEFAULT "Traveling",
	complete BOOLEAN
);
