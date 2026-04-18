1/**
2 * @param {...(null|boolean|number|string|Array|Object)} args
3 * @return {number}
4 */
5
6    function argumentsLength(...args) {
7    return args.length;
8}
9
10
11/**
12 * argumentsLength(1, 2, 3); // 3
13 */