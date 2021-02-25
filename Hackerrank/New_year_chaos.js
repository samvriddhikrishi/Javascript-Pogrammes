function minBribes(q) {
    let output = 0;
    let sub;
    for (let i = 0; i <= q.length; i++) {
        if ((i + 1) != q[i]) {
            if (q[i] > (i + 1)) {
                sub = q[i] - (i + 1);
                if (sub > 2) {
                    output = "Too chaotic"
                } else {
                    output = output + sub;
                }
            }
        }
    }
    return output;
}

console.log(minBribes([4, 1, 2, 3]));
