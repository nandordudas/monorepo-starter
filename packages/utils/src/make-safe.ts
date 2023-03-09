type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: Error }

// https://twitter.com/mattpocockuk/status/1633064377518628866
export const makeSafe = <TArgs extends any[], TReturn>(func: (...args: TArgs) => TReturn) => {
  return (...args: TArgs): Result<TReturn> => {
    try {
      return {
        ok: true,
        value: func(...args),
      }
    }
    catch (error) {
      return {
        error: error instanceof Error ? error : new Error('Something went wrong', { cause: error }),
        ok: false,
      }
    }
  }
}
