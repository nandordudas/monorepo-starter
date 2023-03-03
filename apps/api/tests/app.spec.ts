import { isTruthy } from '@workspace/utils'

describe('app', () => {
  let number = 0

  beforeEach(() => {
    if (isTruthy(Math.random() * 1))
      number = 1
  })

  it('should do not do too much', () => {
    expect(number).toBe(number)
  })
})
