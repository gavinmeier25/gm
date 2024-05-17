/**
 * This module contains functions that relate to logging.
 *
 * @example
 * ```tsx
 * import { useLogger } from "@gm/hooks/logger"
 *
 * function App(): React.ReactElement {
 *   const logger = useLogger()
 *   logger.info('Rendered app')
 *
 *   return <div>Hello world</div>
 * }
 * ```
 *
 * @module
 */

/**
 * The logger interface type
 */
export type Logger = {
  /** The info log level */
  info: (...data: unknown[]) => void;
  /** The warn log level */
  warn: (...data: unknown[]) => void;
  /** The error log level */
  error: (...data: unknown[]) => void;
  /** The trace log level */
  trace: (...data: unknown[]) => void;
};

/**
 * @category tracing
 *
 * A hook that returns a logger that can be used to log information
 * on the client.
 *
 * @returns - {@link Logger} a logger that can be used in React.
 */
export function useLogger(): Logger {

  return {
    info: console.info,
    warn: console.warn,
    error: console.error,
    trace: console.trace,
  };
}
