FROM confluentinc/cp-kafka-connect:latest

# 필요한 유틸리티 JAR 파일을 다운로드 및 추가
# 예시로 특정 경로에서 JAR 파일을 다운로드하는 방법을 보여줍니다.
RUN curl -O https://packages.confluent.io/maven/io/confluent/confluent-utils/6.2.0/confluent-utils-6.2.0.jar
RUN mv confluent-utils-6.2.0.jar /usr/share/java/kafka/

# 환경 변수 설정
ENV CLASSPATH="/usr/share/java/kafka/*:$CLASSPATH"

# Kafka Connect 실행
CMD ["connect-distributed", "/etc/kafka/connect-distributed.properties"]
