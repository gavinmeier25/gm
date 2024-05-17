function getCurrentRuntime() {
    if (typeof globalThis?.Deno !== "undefined") {
        return "deno";
    } else if (typeof globalThis?.Bun !== "undefined") {
        return "bun";
    } else if (typeof globalThis?.process?.env !== "undefined") {
        return "node";
    } else if (typeof WorkerGlobalScope !== "undefined") {
        return "workerd";
    } else {
        console.assert(typeof globalThis.window !== "undefined", "Window is not defined, a detection error occurred before defaulting to browser.");
        return "browser";
    }
}
const __default = {
    fetch () {
        return new Response(getCurrentRuntime());
    }
};
export { __default as default };
