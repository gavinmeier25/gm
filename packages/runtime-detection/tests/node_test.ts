// NOTE - since we are running in deno normally this file is excluded from the path
import { test } from 'node:test'
import assert from 'node:assert'
import { getCurrentRuntime } from '../main'

test("returns the proper runtime", () => {
    assert(getCurrentRuntime() === 'node')
})




