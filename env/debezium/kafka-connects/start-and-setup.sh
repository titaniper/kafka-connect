#!/bin/bash

# Run the setup connector script in the background
/usr/local/bin/debezium-mysql-connector.sh &

# Start Kafka Connect using the original entrypoint script
exec /etc/confluent/docker/run
