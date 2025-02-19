Array.prototype.even = function () {
    const arr = this;
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    return even;
}

Array.prototype.odd = function () {
    const arr = this;
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 2 !== 0) {
            odd.push(num);
        }
    }
    return odd;
}

Array.prototype.under = function (n) {
    const arr = this;
    let under = [];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num < n) {
            under.push(num);
        }
    }
    return under;
}

Array.prototype.over = function (n) {
    const arr = this;
    let over = [];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > n) {
            over.push(num);
        }
    }
    return over;
}

Array.prototype.inRange = function (min, max) {
    const arr = this;
    let inRange = [];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num >= min && num <= max) {
            inRange.push(num);
        }
    }
    return inRange;
}

