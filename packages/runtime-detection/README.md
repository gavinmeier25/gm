# Runtime Detection

[![current version](https://jsr.io/badges/@gm/runtime-detection)](https://jsr.io/@gm/runtime-detection)

Used to determine the current javascript environment when supporting multiple execution paths.

## Testing

- Node is tested through Node's built in test runner.
- Bun is tested through Bun's built in test runner.
- Deno is tested through Deno's built in test runner.
- Workerd (Cloudflare) is tested through a bundling of the code, then on mini-flare.
- The browser is not tested but since the others are its safe to assume the window will be there since its based on web standards.
