function diagonal(matrix) {
    let left = 0;
    let right = 0;

    for (let i = 0; i < matrix.length; i++) {

        left += matrix[i][i]
        right += matrix[i][matrix.length - 1 - i]
    }

    if (left > right) {
        return "Principal Diagonal win!"

    } else if (left < right) {
        return "Secondary Diagonal win!"

    } else if (left === right) {
        return "Draw!"
    }

}
