# Getting Started

[![current version](https://jsr.io/badges/@gm/hooks)](https://jsr.io/@gm/hooks)

Refer to the following command for your package manager / runtime.

```bash
npx jsr add @gm/hooks
yarn dlx jsr add @gm/hooks
pnpm dlx jsr add @gm/hooks

deno add @gm/hooks

bunx jsr add @gm/hooks
```

## Exports By Path

- `/logger`
  - useLogger

```ts
import { useLogger } from "@gm/hooks/logger";

export function useAccountData() {
  const logger = useLogger();
  const res = useFetch(fetch("/api/account/me"));

  if (res.error) {
    logger.error(res.error);
  }

  return res.data;
}
```

## **Note**

This is kind of a placeholder of sorts till I figure out the best way to really take advantage of React from Deno that can
be published to all platforms.
