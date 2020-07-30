import { formatAmount, formatAmountInUsFormat, humanReadableTokenAmount } from 'src/logic/tokens/utils/formatAmount'


describe('formatAmount', () => {
  it('Given 0 returns 0',  () => {
    // given
    const input = '0'
    const expectedResult = '0'

    // when
    const result = formatAmount(input)

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given 1 returns 1',  () => {
    // given
    const input = '1'
    const expectedResult = '1'

    // when
    const result = formatAmount(input)

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a string in format XXXXX.XXX returns a number of format XX,XXX.XXX',  () => {
    // given
    const input = '19797.899'
    const expectedResult = '19,797.899'

    // when
    const result = formatAmount(input)

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given number > 0.001 && < 1000 returns the same number as string',  () => {
    // given
    const input = 999
    const expectedResult = '999'

    // when
    const result = formatAmount(input.toString())
    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a number between 1000 and 10000 returns a number of format XX,XXX',  () => {
    // given
    const input = 9999
    const expectedResult = '9,999'

    // when
    const result = formatAmount(input.toString())
    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a number between 10000 and 100000 returns a number of format XX,XXX',  () => {
    // given
    const input = 99999
    const expectedResult = '99,999'

    // when
    const result = formatAmount(input.toString())
    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a number between 100000 and 1000000 returns a number of format XXX,XXX',  () => {
    // given
    const input = 999999
    const expectedResult = '999,999'

    // when
    const result = formatAmount(input.toString())
    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a number between 10000000 and 100000000 returns a number of format X,XXX,XXX',  () => {
    // given
    const input = 9999999
    const expectedResult = '9,999,999'

    // when
    const result = formatAmount(input.toString())
    // then
    expect(result).toBe(expectedResult)
  })
  it('Given number < 0.001 returns < 0.001',  () => {
    // given
    const input = 0.000001
    const expectedResult = '< 0.001'

    // when
    const result = formatAmount(input.toString())
    // then
    expect(result).toBe(expectedResult)
  })
  it('Given number > 10 ** 15 returns > 1000T',  () => {
    // given
    const input = 10 ** 15 * 2
    const expectedResult = '> 1000T'

    // when
    const result = formatAmount(input.toString())

    // then
    expect(result).toBe(expectedResult)
  })
})

describe('FormatsAmountsInUsFormat', () => {
  it('Given 0 returns 0.00',  () => {
    // given
    const input = 0
    const expectedResult = '0.00'

    // when
    const result = formatAmountInUsFormat(input.toString())

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given 1 returns 1.00',  () => {
    // given
    const input = 1
    const expectedResult = '1.00'

    // when
    const result = formatAmountInUsFormat(input.toString())

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a number in format XXXXX.XX returns a number of format XXX,XXX.XX',  () => {
    // given
    const input = 311137.30
    const expectedResult = '311,137.30'

    // when
    const result = formatAmountInUsFormat(input.toString())

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a number in format XXXXX.XXX returns a number of format XX,XXX.XXX',  () => {
    // given
    const input = 19797.899
    const expectedResult = '19,797.899'

    // when
    const result = formatAmountInUsFormat(input.toString())

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a number in format XXXXXXXX.XXX returns a number of format XX,XXX,XXX.XXX',  () => {
    // given
    const input = 19797899.479
    const expectedResult = '19,797,899.479'

    // when
    const result = formatAmountInUsFormat(input.toString())

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given a number in format XXXXXXXXXXX.XXX returns a number of format XX,XXX,XXX,XXX.XXX',  () => {
    // given
    const input = 19797899479.999
    const expectedResult = '19,797,899,479.999'

    // when
    const result = formatAmountInUsFormat(input.toString())

    // then
    expect(result).toBe(expectedResult)
  })
})
describe('humanReadableTokenAmount', () => {
  it('Given 0 returns 0',  () => {
    // given
    const amount = '0'
    const decimals = 18
    const expectedResult = '0'

    // when
    const result = humanReadableTokenAmount(amount, decimals)

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given XXXXXXXXXXX with 8 decimals returns XX.XXXXXXXXX',  () => {
    // given
    const amount = '5870701711'
    const decimals = 8
    const expectedResult = '58.70701711'

    // when
    const result = humanReadableTokenAmount(amount, decimals)

    // then
    expect(result).toBe(expectedResult)
  })
  it('Given XXXXX000000000000000 with 18 decimals returns XX.XXX000000000000000',  () => {
    // given
    const amount = '25599000000000000000'
    const decimals = 18
    const expectedResult = '25.599'

    // when
    const result = humanReadableTokenAmount(amount, decimals)

    // then
    expect(result).toBe(expectedResult)
  })
})