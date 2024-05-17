import { bundle } from "https://deno.land/x/emit/mod.ts";

const result = await bundle(
  new URL("./workerd_miniflare_script.ts", import.meta.url),
);

await Deno.writeFile(
  new URL("./workerd_test_bundle.js", import.meta.url),
  new TextEncoder().encode(result.code),
);
