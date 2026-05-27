class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        for (let index = 0; index < s.length; index++) {
            if (s[index] == '(' || s[index] == '[' || s[index] == '{') {
                stack.push(s[index])
            } else {
                if (stack.length == 0 || stack.pop() != map[s[index]]) {
                    return false
                }
            }
        }
        return stack.length == 0;
    }
}