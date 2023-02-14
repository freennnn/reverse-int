function reverse (n) {
    let reversed = "";
    n = Math.abs(n);
    while (n  > 0) {
        reversed += n  % 10;
        n = Math.floor(n/10);
    }
    return parseInt(reversed);
}

module.exports = reverse;

console.log(reverse(169));