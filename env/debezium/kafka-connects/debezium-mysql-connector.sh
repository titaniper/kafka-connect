#!/bin/bash

set -x

echo "Waiting for Kafka Connect to start..."
# Wait for Kafka Connect to start
while ! nc -z localhost 8083; do   
  sleep 10 # wait for 1 second before check again
done

echo "Kafka Connect started, setting up debezium-mysql-connector..."

# # TODO; 포트, 비밀번호 변경
# Add the MySQL source connector
curl -X POST -H "Content-Type: application/json" --data '{
  "name": "debezium-mysql-connector",
  "config": {
    "connector.class": "io.debezium.connector.mysql.MySqlConnector",
    "database.hostname": "host.docker.internal",
    "database.port": "3326",
    "database.user": "root",
    "database.password": "root",
    "database.server.id": "184054",
    "database.include.list": "db1,db2,db3",
    "table.include.list": "db1.ddd_event,db2.ddd_event,db3.ddd_event",
    "topic.prefix": "debezium",
    "include.schema.changes": false,
    "schema.history.internal.kafka.topic": "schemahistory",
    "schema.history.internal.kafka.bootstrap.servers": "kafka-broker:29092",
    "snapshot.mode": "schema_only",
    "snapshot.locking.mode": "none",
    "message.max.bytes": "10485760",
    "replica.fetch.max.bytes": "10485760",
    "database.connectionTimeZone": "Asia/Seoul",
    "retention.ms": "259200000",
    "segment.ms": "259200000"
  }
}' http://localhost:8083/connectors
