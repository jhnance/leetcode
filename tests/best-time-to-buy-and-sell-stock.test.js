import { maxProfit } from './best-time-to-buy-and-sell-stock'

test('Returns the correct maximum profit, when there are multiple potential selling points', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
})

test('Returns a maximum profit of 0 when there is no day on which a profit can be made', () => {
    expect(maxProfit([7, 6, 5, 4, 3, 2, 1])).toBe(0)
})

test('Returns a maximum profit of 0 if the input array is empty', () => {
    expect(maxProfit([])).toBe(0)
})

test('Returns the correct maximum profit when there is only one possible selling point', () => {
    expect(maxProfit([7, 6, 7])).toBe(1)
})
