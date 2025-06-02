Array.prototype.slice = function (start, end) {
    const length = this.length;

    // Normalise Start And End
    if (start === undefined) {
        start = 0;
    } else if (start < 0) {
        const newIdx = length + start;
        start = Math.max(newIdx, 0);
    } else {
        start = Math.min(start, length);
    }

    if (end === undefined) {
        end = length;
    } else if (end < 0) {
        const newIdx = length + end;
        end = Math.max(newIdx, 0);
    } else {
        end = Math.min(end, length);
    }

    const result = [];

    for (let i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
};
