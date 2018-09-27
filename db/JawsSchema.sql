CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    devoured BOOLEAN DEFAULT false,
    creadtedAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);