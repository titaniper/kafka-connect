




```
[<!-- brew install confluent-hub -->](https://docs.confluent.io/legacy/platform/5.1.4/connect/managing/confluent-hub/client.html)
brew tap confluentinc/homebrew-confluent-hub-client
brew install --cask confluent-hub-client
confluent-hub
go to /opt/homebrew/Caskroom/confluent-hub-client/


confluent-hub install confluentinc/kafka-connect-jdbc:latest --component-dir ./plugins



docker exec -it env-connect-1 /bin/bash

docker exec -it env-connect-1 confluent-hub install --no-prompt debezium/debezium-connector-mysql:2.2.1

docker exec -it env-connect-1 confluent-hub install confluentinc/kafka-connect-jdbc:latest


```




```
docker exec -it env-connect-1 /bin/bash

confluent-hub install confluentinc/kafka-connect-jdbc:latest --component-dir /etc/kafka-connect/jars

-- 재시작

curl -s http://localhost:8083/connector-plugins | jq .
```