1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5
6    function longestCommonPrefix(strs) {
7    if (!strs || strs.length === 0) return "";
8
9    let prefix = strs[0];
10
11    for (let i = 1; i < strs.length; i++) {
12        while (!strs[i].startsWith(prefix)) {
13            prefix = prefix.slice(0, -1);
14            if (prefix === "") return "";
15        }
16    }
17
18    return prefix;
19
20};