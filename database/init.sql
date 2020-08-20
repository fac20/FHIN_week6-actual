BEGIN;

DROP TABLE IF EXISTS users, recipes CASCADE;

CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       password VARCHAR(255) NOT NULL,
       email  VARCHAR(255) NOT NULL      
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    recipe_name TEXT,
    time VARCHAR(255),
    ingredients TEXT,
    method TEXT
);

    INSERT INTO users (email, password) VALUES
    ('hello@hi.com', 'ghtodk'),
    ('hi@hi.com', 'hjfldbv')
    ;

    INSERT INTO recipes 
    (user_id, recipe_name, time, ingredients, method) 
    VALUES
    (1, 'pasta', '20', 'pasta, oil, tomatoes, bacon', 'cook it')
    ;
COMMIT;




