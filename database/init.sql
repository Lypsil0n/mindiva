DROP DATABASE IF EXISTS mindiva;

CREATE DATABASE mindiva;

\c mindiva

CREATE TABLE account (
    id uuid PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    password_hash TEXT,
    token_hash TEXT
);

CREATE TABLE psychologist (
    id uuid PRIMARY KEY,
    verbal_id VARCHAR(50),
    psyc_name VARCHAR(50),
    street_address VARCHAR(50),
    postal_code VARCHAR(50),
    city VARCHAR(50),
    phone_number VARCHAR(50),
    email_address VARCHAR(50)
);