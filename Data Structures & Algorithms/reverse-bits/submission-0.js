class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
         var binary = this.intToBinary(n);
    var newBinary = "";
    var length = binary.length;
    for (var index = 0; index < length; index++) {
        newBinary += binary[length - (index + 1)];
    }
    return parseInt(newBinary, 2);}
    intToBinary(n,bits=32){
        if (bits === void 0) { bits = 32; }
    if (bits === void 0) {
        bits = 0;
    }
    var bin = n.toString(2);
    return bits > 0 ? bin.padStart(bits, "0") : bin;
    }
}
