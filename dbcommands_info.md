Acceso rapido de comandos db local postgresql
https://www.prisma.io/dataguide/postgresql/create-and-delete-databases-and-tables

# Iniciar postgres
psql

# entrar como usuario postgres
psql -U postgres

# Crear db
CREATE DATABASE nombredb ENCODING 'UTF8';

# Listar bases de datos
SELECT datname FROM pg_database;
\l

# Moverse a base de datos 
\c nombredb

# Crear tablas
CREATE TABLE table_name (
    column_name TYPE [column_constraint],
    [table_constraint,]
);

CREATE TABLE supplies (
  id INT PRIMARY KEY,
  name VARCHAR,
  description VARCHAR,
  manufacturer VARCHAR,
  color VARCHAR,
  inventory int CHECK (inventory > 0)
);

# Update
# Drop

data modeling https://www.prisma.io/dataguide/datamodeling/intro-dont-panic