/**
 * Difficulty: easy
 * Leetcode link:https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 *
 * Description
 * -----------
 *
 * You are given an array `prices` where `prices[i]` is the price of a given stock
 * on the `i_th` day. You want to maximize your profit by choosing a single day
 * to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot
 * achieve any profit, return `0`.
 *
 * Examples
 * --------
 *
 * Input: `prices` = [7, 1, 5, 3, 6, 4]
 * Output: 5 (buy on day 2 (`price` = 1) and sell on day 5 (`price` = 6)). Note
 * that buying on day 2 and selling on day 1 is not allowed because you must
 * buy before you sell.
 *
 * Input: `prices` = [7, 6, 4, 3, 1]
 * Output: 0 (in this case, no transactions are done and the max profit = 0).
 */
export function maxProfit(prices) {
    let min = Infinity
    let maxProfit = 0

    for (let price of prices) {
        min = Math.min(price, min)
        maxProfit = Math.max(maxProfit, price - min)
    }

    return maxProfit
}
