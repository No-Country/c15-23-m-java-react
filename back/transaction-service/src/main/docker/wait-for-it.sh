#!/bin/bash

# Determine the environment - default to 'local' if ENVIRONMENT is not set
ENVIRONMENT=${ENVIRONMENT:-local}

# Check if running on Render
if [ -n "$RENDER" ]; then
    echo "Running on Render, bypassing wait-for-it checks."
    exec java -Djava.security.egd=file:/dev/./urandom -Xms512m -Xmx1g -jar /opt/transaction-service/app.jar
else
    eureka_url="http://eureka-server:8761"
    db_host="shopswiftly_db"
    db_port="5432"

    max_attempts=15
    attempt_interval=5

    # Function to check service status
    check_service() {
        response=$(curl --write-out '%{http_code}' --silent --output /dev/null "$1/actuator/health")
        [ "$response" -eq 200 ]
    }

    # Wait for Eureka server and PostgreSQL to be available
for service in "$eureka_url" "http://${db_host}:${db_port}"; do
    if [[ "$service" == http* ]]; then
        echo "Waiting for HTTP service ${service} to be available..."
        # ... [previous HTTP check code remains unchanged]
    else
        echo "Waiting for PostgreSQL service ${db_host}:${db_port} to be available..."
        attempt=1
        until check_postgres "${db_host}" "${db_port}"; do
            if [ ${attempt} -ge ${max_attempts} ]; then
                echo "PostgreSQL service ${db_host}:${db_port} not available after ${max_attempts} attempts. Exiting."
                exit 1
            fi
            printf "Attempt %s/%s: PostgreSQL service ${db_host}:${db_port} not ready yet. Waiting %s seconds...\n" "${attempt}" "${max_attempts}" "${attempt_interval}"
            sleep ${attempt_interval}
            attempt=$(( attempt + 1 ))
        done
    fi
done

    echo "All services are up. Executing command..."
    exec java -Djava.security.egd=file:/dev/./urandom -Xms512m -Xmx1g -jar /opt/transaction-service/app.jar
fi
