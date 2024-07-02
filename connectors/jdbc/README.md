# Source Connector 등록

curl -X POST -H "Content-Type: application/json" --data @jdbc-source-connector.json <http://localhost:8083/connectors>

# Sink Connector 등록

curl -X POST -H "Content-Type: application/json" --data @jdbc-sink-connector.json <http://localhost:8083/connectors>
