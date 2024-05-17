/** Represents running in the browser
 *
 * @template {'node'} - Represents running in NodeJS's V8 engine
 * @template {'deno'} - Represents running in Deno's V8 engine
 * @template {'workerd'} - Represents running in Cloudflare's `workerd` engine
 * @template {'bun'} - Represents running in Bun's JavaScriptCore engine
 * @template {'bun'} - Represents running in the browser
 *
 * @remarks
 *
 * If you are using a runtime that is not checked for and the runtime
 * has a window globally then this will be hit but a console.assert will be
 * triggered.
 */
export type SupportedRuntime =
  | "node"
  | "deno"
  | "workerd"
  | "bun"
  | "browser";

/**
 * A function that can be used by library authors to check for the current runtime
 * that is orchestrating the javascript event loop.
 *
 * @example
 *
 * ```
 * let server: RuntimeAgnosticServer | undefined = undefined
 * const runtime = getCurrentRuntime()
 *
 * if (runtime === 'node') {
 *    server = await import('./node-server')
 * } else if (runtime === 'deno') {
 *   server = await import('./deno-server)
 * } else if (runtime === 'bun') {
 *   server = await import ('./bun-server)
 * } else {
 *   throw new Error(`${runtime} does not support a long running server`)
 * }
 *
 * ```
 *
 * @returns - the runtime that is currently being used {@link SupportedRuntime}
 */
export function getCurrentRuntime(): SupportedRuntime {
  if (typeof globalThis?.Deno !== "undefined") {
    return "deno";
    // Bun is not defined in deno global scope which we are using
    // deno-lint-ignore ban-ts-comment
    // @ts-expect-error
  } else if (typeof globalThis?.Bun !== "undefined") {
    return "bun";
    // process.env is not defined in the Deno global scope but is in Bun and Node
    // so it has to come after Bun.
    // deno-lint-ignore ban-ts-comment
    // @ts-expect-error
  } else if (typeof globalThis?.process?.env !== "undefined") {
    return "node";
  } else if (
    // WorkerGlobalScope is defined in workerd but not in the browser but window is defined in Deno and in Workerd
    // deno-lint-ignore ban-ts-comment
    // @ts-expect-error
    typeof WorkerGlobalScope !== "undefined"
  ) {
    return "workerd";
  } else {
    console.assert(
      typeof globalThis.window !== "undefined",
      "Window is not defined, a detection error occurred before defaulting to browser.",
    );
    return "browser";
  }
}
