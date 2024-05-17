import { getCurrentRuntime } from "../../main.ts";

export default {
  fetch() {
    return new Response(getCurrentRuntime());
  },
};
