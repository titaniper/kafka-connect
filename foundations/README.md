
동작
- 스키마 변경: 스키마 히스토리에 쌓임
- row 생성: 1개 메시지 발행
- row 수정: 1개 메시지 발행
- row 삭제: 2개 메세지 발행(after null 이벤트, value 가 비어 있는 이벤트 하나)

binlog filter 가능한지 확인
