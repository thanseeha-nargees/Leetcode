1/**
2 * @param {Function[]} functions
3 * @return {Function}
4 */
5var compose = function(functions) {
6    return function(x) {
7        let result = x;
8
9        for (let i = functions.length - 1; i >= 0; i--) {
10            result = functions[i](result);
11        }
12
13        return result;
14    };
15};
16 
17
18/**
19 * const fn = compose([x => x + 1, x => 2 * x])
20 * fn(4) // 9
21 */