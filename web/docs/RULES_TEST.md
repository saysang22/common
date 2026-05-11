# Test & Harness Rules

## Harness 실행

- `pnpm test:harness`
- 10초 제한

---

## 실패 기준

- 에러 반복
- 응답 지연
- 데이터 불일치

---

## Retry 정책

- 네트워크 2회
- 5xx 1회
- 4xx 금지

---

## 테스트 전략

- fixtures 사용
- mock 우선

---

## 테스트 시나리오

- login
- API 처리
- rate limit
- error handling

---

## 상태 검증

- DB
- side effect
- cache
