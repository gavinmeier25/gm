import { expect, test } from "bun:test";
import { getCurrentRuntime } from '../main'

test("returns the proper runtime", () => {
  expect(getCurrentRuntime()).toBe('bun')
});