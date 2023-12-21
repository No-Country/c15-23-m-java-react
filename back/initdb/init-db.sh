#!/bin/bash
set -e

# Perform all actions as $POSTGRES_USER
export PGPASSWORD=${POSTGRES_PASSWORD} # This line is optional since the password may already be set in the environment

# Create each schema in the $POSTGRES_DB database
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE SCHEMA IF NOT EXISTS users_db;
    CREATE SCHEMA IF NOT EXISTS products_db;
    CREATE SCHEMA IF NOT EXISTS transactions_db;
EOSQL
