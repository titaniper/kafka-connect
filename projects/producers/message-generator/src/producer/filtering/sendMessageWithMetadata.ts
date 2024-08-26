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
    topic: 'debezium.ben2.ddd_event',
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
                            {
                                type: 'string',
                                optional: true,
                                field: 'metadata',
                            },
                        ],
                        optional: true,
                        name: 'debezium.haulla.ddd_event.Value',
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
                            {
                                type: 'string',
                                optional: true,
                                field: 'metadata',
                            },
                        ],
                        optional: true,
                        name: 'debezium.haulla.ddd_event.Value',
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
                name: 'debezium.haulla.ddd_event.Envelope',
                version: 1,
            },
            payload: {
                before: null,
                after: {
                    id: 1420557,
                    type: 'AccountRegisteredEvent',
                    occurredAt: 1720577012000,
                    txId: '8d84e66f0833f4c55eb402c0e3295432',
                    createdAt: 1720577012350745,
                    updatedAt: 1720577012350745,
                    metadata: '{"channel":"kafka","topic":"partition.ben.","to":"dynamic-partition-forwarder-app-typeA","enabled":true}',
                    data: '{"status":"100","accountId":"629f0657-683a-4f73-a782-61bd826f00fe","role":"generator","name":"abc","contractOn":"2024-07-01","registeredAt":"2024-07-10T02:03:32.325Z","accountNumber":"1000000000109","regionId":7,"billingEmails":["dealupload@test.com"],"billingPhoneNumbers":[{"label":"Phone","value":"123-123-1234"}],"billingAddress":{"address1":"","address2":"","latitude":0,"longitude":0,"zipCode":""},"address":{"address1":"Houston, TX 77088, USA","address2":"","latitude":29.8790707,"longitude":-95.4515725,"zipCode":"77088"},"invoiceMethod":"Email","accountManagerId":"keUGCTgx95","term":3,"taxStatus":"Taxable","dumpsterDeliveryFee":{"amount":0,"currency":"usd"},"firstMonthPromotion":{"amount":0,"currency":"usd"},"promoCode":"","incumbent":{"id":"629f0657-683a-4f73-a782-61bd826f00fe","hauler":"None","liquidatedDamages":{"amount":0,"currency":"usd"},"rate":{"amount":0,"currency":"usd"},"services":[],"closureMethod":"F","scheduledBinRemovalOn":null,"binRemovalOn":null},"contract":{"id":"629f0657-683a-4f73-a782-61bd826f00fe","hauler":"","haulerId":"","suspendedOn":null,"terminatedOn":null,"dumpsterDeliveryFee":{"amount":0,"currency":"usd"},"rate":{"amount":0,"currency":"usd"},"maxRate":{"amount":0,"currency":"usd"},"rollOffNote":"","reflectedOn":null,"clientId":null},"taxIds":["123"],"vertical":"Restaurant","annualIncreaseRate":4,"initialRawAddress":"Houston, TX 77088, USA","initialRawBillingAddress":"","accountManagerEmployeeId":"TEST12345","hubspotDealId":"1000000000109"}',
                    actorId: '5432',
                },
                source: {
                    version: '2.1.3.Final',
                    connector: 'mysql',
                    name: 'debezium',
                    ts_ms: 1720577012000,
                    snapshot: 'false',
                    db: 'haulla',
                    sequence: null,
                    table: 'ddd_event',
                    server_id: 39870371,
                    gtid: null,
                    file: 'mysql-bin-changelog.001098',
                    pos: 4712722,
                    row: 0,
                    thread: 63159,
                    query: null,
                },
                op: 'c',
                ts_ms: 1720577012373,
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