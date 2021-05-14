# Aidrop Merkle API
Return data for check and claim airdrop

## run the app
`deno run --allow-env --allow-net app.ts`

## CORS
**Need change avaliable CORS address:**
**origin**: your api address 

```typescript
app.use(
  oakCors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
```

## Routes

| Route                | Description              |
| -------------------- | ------------------------ |
| GET /users           | return all users         |
| GET /user/{address}  | return a user            |

---
[codingsh](https://twitter.com/codingsh)
