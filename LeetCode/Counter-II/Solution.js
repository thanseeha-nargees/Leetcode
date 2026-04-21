1/**
2 * @param {integer} init
3 * @return { increment: Function, decrement: Function, reset: Function }
4 */
5    var createCounter = function(init) {
6    let value = init
7
8    return {
9        increment(){
10            value++
11            return value
12        },
13        decrement(){
14             value--
15            return value
16        },
17        reset(){
18             value = init
19             return value
20        }
21    }
22
23};
24
25/**
26 * const counter = createCounter(5)
27 * counter.increment(); // 6
28 * counter.reset(); // 5
29 * counter.decrement(); // 4
30 */