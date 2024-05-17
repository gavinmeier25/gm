#!/usr/bin/env -S deno run --allow-all

/**
 * Used to run all of the different environments in one swoop
 * that are supported through the {@link getCurrentRuntime} function.
 *
 * @privateRemarks
 * order is as follows:
 *
 * - node
 * - deno
 * - bun
 * - workerd
 */

import $ from "https://deno.land/x/dax@0.39.2/mod.ts";

const __dirname = new URL(".", import.meta.url).pathname;

await $`npx tsx ${__dirname}/tests/node_test.ts`;

await $`deno test ${__dirname}/tests/deno_test.ts`;

await $`bun test ${__dirname}/tests/bun_test.ts`;

await $`deno run --allow-write --allow-read --allow-env ${__dirname}/tests/workerd_test/bundle.ts`;

await $`cd ${__dirname}/tests/workerd_test && bun install --no-save && npx tsx ./workerd_test.ts`;
