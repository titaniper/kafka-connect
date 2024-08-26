
# Binlog 활성화 확인

```
SHOW MASTER STATUS;

SHOW VARIABLES LIKE 'log_bin';


SHOW VARIABLES LIKE 'log_bin_basename';

GRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'root'@'%';
FLUSH PRIVILEGES;
```


# Binlog 설정 

```
apt-get update
apt-get install nano
nano /etc/mysql/my.cnf
```

```
[mysqld]
log-bin=mysql-bin
server-id=1
```

# Docker 설정

## Volume
```
version: '3'
services:
  mysql:
    image: mysql:latest
    volumes:
      - ./my.cnf:/etc/mysql/my.cnf

```

## 환경 변수

```
version: '3'
services:
  mysql:
    image: mysql:latest
    environment:
      - MYSQL_LOG_BIN=mysql-bin
      - MYSQL_SERVER_ID=1
```


## command
```
version: '3'
services:
  mysql:
    image: mysql:latest
    command: --log-bin=mysql-bin --server-id=1
```