BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, password) VALUES
  ('taka', '1234'),
  ('matt', '4321'),
  ('grace', '1234');

COMMIT;
