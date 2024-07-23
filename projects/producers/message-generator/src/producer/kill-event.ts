import { Kafka } from 'kafkajs';

const brokers = [`kafka-kafka-bootstrap.streaming.svc.cluster.local:9092`]

const kafka = new Kafka({
  clientId: 'kafkajs-producer',
  brokers: brokers,
  ssl: false,
  // sasl: false,
  // brokers: string[] | BrokersFunction
  // ssl?: tls.ConnectionOptions | boolean
  // sasl?: SASLOptions | Mechanism
  // clientId?: string
  // connectionTimeout?: number
  // authenticationTimeout?: number
  // reauthenticationThreshold?: number
  // requestTimeout?: number
  // enforceRequestTimeout?: boolean
  // retry?: RetryOptions
  // socketFactory?: ISocketFactory
  // logLevel?: logLevel
  // logCreator?: logCreator
})

const producer = kafka.producer(
  // createPartitioner: (config: {
  //   topic: string
  //   partitionMetadata: PartitionMetadata[]
  //   message: Message
  // }) +> void,
  // retry?: RetryOptions
  // metadataMaxAge?: number
  // allowAutoTopicCreation?: boolean
  // idempotent?: boolean
  // transactionalId?: string
  // transactionTimeout?: number
  // maxInFlightRequests?: number
)

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    // topic: string
    // messages: Message[]
    // acks?: number
    // timeout?: number
    // compression?: CompressionTypes
    // test_unsubscribing_topic
    // test-unsubscribing-topic-group2
    // topic: 'test_unsubscribing_topic',
    topic: 'debezium.ben.ddd_event',
    /**
     * 0=서버 응답 기다리지 않음, 전송 보장 없음, 처리량 높아지겠지만 메시지 유실 괜찮은 경우만 사용
     * 1=파티션 리더에 저장되면 응답 받음. 리더 장애시 메시지 유실 가능(팔로워에 복제되지 않은 상태에서 에러날 경우)
     * all or -1= min.insync.replicas 리플리카에 저장되면 응답 받음, 
     */
    // acks: []; 
    messages: [
      {
        headers: {
          name: 'test',
        },
        key: JSON.stringify({
          schema: {
              type: 'struct',
              fields: [
                  {
                      type: 'int64',
                      optional: false,
                      field: 'id',
                  },
              ],
              optional: false,
              name: 'debezium.ben.ddd_event.Key',
          },
          payload: {
              id: 1424821,
          },
      }),
        value: JSON.stringify({
          schema: {
              type: 'struct',
              fields: [
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'int64',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'type',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.Timestamp',
                              version: 1,
                              field: 'occurredAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'txId',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'createdAt',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'updatedAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'data',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'actorId',
                          },
                      ],
                      optional: true,
                      name: 'debezium.ben.ddd_event.Value',
                      field: 'before',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'int64',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'type',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.Timestamp',
                              version: 1,
                              field: 'occurredAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'txId',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'createdAt',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'updatedAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'data',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'actorId',
                          },
                      ],
                      optional: true,
                      name: 'debezium.ben.ddd_event.Value',
                      field: 'after',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'string',
                              optional: false,
                              field: 'version',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'connector',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'name',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'ts_ms',
                          },
                          {
                              type: 'string',
                              optional: true,
                              name: 'io.debezium.data.Enum',
                              version: 1,
                              parameters: {
                                  allowed: 'true,last,false,incremental',
                              },
                              default: 'false',
                              field: 'snapshot',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'db',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'sequence',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'table',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'server_id',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'gtid',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'file',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'pos',
                          },
                          {
                              type: 'int32',
                              optional: false,
                              field: 'row',
                          },
                          {
                              type: 'int64',
                              optional: true,
                              field: 'thread',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'query',
                          },
                      ],
                      optional: false,
                      name: 'io.debezium.connector.mysql.Source',
                      field: 'source',
                  },
                  {
                      type: 'string',
                      optional: false,
                      field: 'op',
                  },
                  {
                      type: 'int64',
                      optional: true,
                      field: 'ts_ms',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'string',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'total_order',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'data_collection_order',
                          },
                      ],
                      optional: true,
                      name: 'event.block',
                      version: 1,
                      field: 'transaction',
                  },
              ],
              optional: false,
              name: 'debezium.ben.ddd_event.Envelope',
              version: 1,
          },
          payload: {
              before: null,
              after: {
                  id: 1424821,
                  type: 'ATestUpdated',
                  occurredAt: 1721209469000,
                  txId: 'c21144d6394a443104d7a7340f70cbc7',
                  createdAt: 1721209468696815,
                  updatedAt: 1721209468696815,
                  data: '{}',
                  actorId: '5431',
              },
              source: {
                  version: '2.1.3.Final',
                  connector: 'mysql',
                  name: 'debezium',
                  ts_ms: 1721209468000,
                  snapshot: 'false',
                  db: 'ben',
                  sequence: null,
                  table: 'ddd_event',
                  server_id: 39870371,
                  gtid: null,
                  file: 'mysql-bin-changelog.001109',
                  pos: 103559055,
                  row: 0,
                  thread: 131260,
                  query: null,
              },
              op: 'c',
              ts_ms: 1721209468710,
              transaction: null,
          },
      }), 
        // headers: {}, 
        // partition: 0, 
        // timestamp: 0,
    }, {
        headers: {
          name: 'test',
        },
        key: JSON.stringify({
          schema: {
              type: 'struct',
              fields: [
                  {
                      type: 'int64',
                      optional: false,
                      field: 'id',
                  },
              ],
              optional: false,
              name: 'debezium.ben.ddd_event.Key',
          },
          payload: {
              id: new Date().valueOf(),
          },
      }),
        value: JSON.stringify({
          schema: {
              type: 'struct',
              fields: [
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'int64',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'type',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.Timestamp',
                              version: 1,
                              field: 'occurredAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'txId',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'createdAt',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'updatedAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'data',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'actorId',
                          },
                      ],
                      optional: true,
                      name: 'debezium.ben.ddd_event.Value',
                      field: 'before',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'int64',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'type',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.Timestamp',
                              version: 1,
                              field: 'occurredAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'txId',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'createdAt',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'updatedAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'data',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'actorId',
                          },
                      ],
                      optional: true,
                      name: 'debezium.ben.ddd_event.Value',
                      field: 'after',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'string',
                              optional: false,
                              field: 'version',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'connector',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'name',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'ts_ms',
                          },
                          {
                              type: 'string',
                              optional: true,
                              name: 'io.debezium.data.Enum',
                              version: 1,
                              parameters: {
                                  allowed: 'true,last,false,incremental',
                              },
                              default: 'false',
                              field: 'snapshot',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'db',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'sequence',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'table',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'server_id',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'gtid',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'file',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'pos',
                          },
                          {
                              type: 'int32',
                              optional: false,
                              field: 'row',
                          },
                          {
                              type: 'int64',
                              optional: true,
                              field: 'thread',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'query',
                          },
                      ],
                      optional: false,
                      name: 'io.debezium.connector.mysql.Source',
                      field: 'source',
                  },
                  {
                      type: 'string',
                      optional: false,
                      field: 'op',
                  },
                  {
                      type: 'int64',
                      optional: true,
                      field: 'ts_ms',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'string',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'total_order',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'data_collection_order',
                          },
                      ],
                      optional: true,
                      name: 'event.block',
                      version: 1,
                      field: 'transaction',
                  },
              ],
              optional: false,
              name: 'debezium.ben.ddd_event.Envelope',
              version: 1,
          },
          payload: {
              before: null,
              after: {
                  id: 1424821,
                  type: 'KillEvent',
                  occurredAt: 1721209469000,
                  txId: 'c21144d6394a443104d7a7340f70cbc7',
                  createdAt: 1721209468696815,
                  updatedAt: 1721209468696815,
                  data: '{}',
                  actorId: '5431',
              },
              source: {
                  version: '2.1.3.Final',
                  connector: 'mysql',
                  name: 'debezium',
                  ts_ms: 1721209468000,
                  snapshot: 'false',
                  db: 'ben',
                  sequence: null,
                  table: 'ddd_event',
                  server_id: 39870371,
                  gtid: null,
                  file: 'mysql-bin-changelog.001109',
                  pos: 103559055,
                  row: 0,
                  thread: 131260,
                  query: null,
              },
              op: 'c',
              ts_ms: 1721209468710,
              transaction: null,
          },
      }), 
        // headers: {}, 
        // partition: 0, 
        // timestamp: 0,
    }, {
        headers: {
          name: 'test',
        },
        key: JSON.stringify({
          schema: {
              type: 'struct',
              fields: [
                  {
                      type: 'int64',
                      optional: false,
                      field: 'id',
                  },
              ],
              optional: false,
              name: 'debezium.ben.ddd_event.Key',
          },
          payload: {
              id: 1424821,
          },
      }),
        value: JSON.stringify({
          schema: {
              type: 'struct',
              fields: [
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'int64',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'type',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.Timestamp',
                              version: 1,
                              field: 'occurredAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'txId',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'createdAt',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'updatedAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'data',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'actorId',
                          },
                      ],
                      optional: true,
                      name: 'debezium.ben.ddd_event.Value',
                      field: 'before',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'int64',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'type',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.Timestamp',
                              version: 1,
                              field: 'occurredAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'txId',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'createdAt',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              name: 'io.debezium.time.MicroTimestamp',
                              version: 1,
                              default: 0,
                              field: 'updatedAt',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'data',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'actorId',
                          },
                      ],
                      optional: true,
                      name: 'debezium.ben.ddd_event.Value',
                      field: 'after',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'string',
                              optional: false,
                              field: 'version',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'connector',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'name',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'ts_ms',
                          },
                          {
                              type: 'string',
                              optional: true,
                              name: 'io.debezium.data.Enum',
                              version: 1,
                              parameters: {
                                  allowed: 'true,last,false,incremental',
                              },
                              default: 'false',
                              field: 'snapshot',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'db',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'sequence',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'table',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'server_id',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'gtid',
                          },
                          {
                              type: 'string',
                              optional: false,
                              field: 'file',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'pos',
                          },
                          {
                              type: 'int32',
                              optional: false,
                              field: 'row',
                          },
                          {
                              type: 'int64',
                              optional: true,
                              field: 'thread',
                          },
                          {
                              type: 'string',
                              optional: true,
                              field: 'query',
                          },
                      ],
                      optional: false,
                      name: 'io.debezium.connector.mysql.Source',
                      field: 'source',
                  },
                  {
                      type: 'string',
                      optional: false,
                      field: 'op',
                  },
                  {
                      type: 'int64',
                      optional: true,
                      field: 'ts_ms',
                  },
                  {
                      type: 'struct',
                      fields: [
                          {
                              type: 'string',
                              optional: false,
                              field: 'id',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'total_order',
                          },
                          {
                              type: 'int64',
                              optional: false,
                              field: 'data_collection_order',
                          },
                      ],
                      optional: true,
                      name: 'event.block',
                      version: 1,
                      field: 'transaction',
                  },
              ],
              optional: false,
              name: 'debezium.ben.ddd_event.Envelope',
              version: 1,
          },
          payload: {
              before: null,
              after: {
                  id: 1424821,
                  type: 'BTestUpdated',
                  occurredAt: 1721209469000,
                  txId: 'c21144d6394a443104d7a7340f70cbc7',
                  createdAt: 1721209468696815,
                  updatedAt: 1721209468696815,
                  data: '{}',
                  actorId: '5431',
              },
              source: {
                  version: '2.1.3.Final',
                  connector: 'mysql',
                  name: 'debezium',
                  ts_ms: 1721209468000,
                  snapshot: 'false',
                  db: 'ben',
                  sequence: null,
                  table: 'ddd_event',
                  server_id: 39870371,
                  gtid: null,
                  file: 'mysql-bin-changelog.001109',
                  pos: 103559055,
                  row: 0,
                  thread: 131260,
                  query: null,
              },
              op: 'c',
              ts_ms: 1721209468710,
              transaction: null,
          },
      }), 
        // headers: {}, 
        // partition: 0, 
        // timestamp: 0,
    }],
    // compression: CompressionTypes.ZSTD,
  })
}

run().catch(console.error)