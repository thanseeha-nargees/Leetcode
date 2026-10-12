1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5
6var maxProfit = function(prices) {
7    let minPrice = Infinity;
8    let maxProfit = 0;
9
10    for (let i = 0; i < prices.length; i++) {
11        if (prices[i] < minPrice) {
12            minPrice = prices[i];
13        }
14
15        let profit = prices[i] - minPrice;
16
17        if (profit > maxProfit) {
18            maxProfit = profit;
19        }
20    }
21
22    return maxProfit;
23};
24