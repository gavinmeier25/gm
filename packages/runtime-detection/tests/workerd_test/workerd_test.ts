
import { Miniflare } from "miniflare";
import { test, afterEach } from 'node:test'
import assert from 'node:assert'
import fs from 'fs/promises'
import path from 'path'


let mf;

afterEach(async () => {
  if (mf !== undefined) {

   await mf.dispose()
  }
})
test("returns the proper runtime", async () => {
  mf =  

  new Miniflare({
    modules: [{
        type: "ESModule",
        path: path.resolve(__dirname, './workerd_test_bundle.js')
    }]
    })

  const response = await mf.dispatchFetch("http://localhost:8787/");
  const result = await response.text();
  
  assert.equal(result, 'workerd')
});
