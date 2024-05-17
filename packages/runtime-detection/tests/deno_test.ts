import { it } from "https://deno.land/std@0.219.1/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.219.1/assert/mod.ts";
import { getCurrentRuntime } from "../main.ts";

it("returns the proper runtime", () => {
  assertEquals(getCurrentRuntime(), "deno");
});
