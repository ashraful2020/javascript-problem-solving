function addBorder(border) {
    let star = "*"
    let wall = star.repeat(border[0].length + 2);
    border.unshift(wall)
    border.push(wall);
    for (let i = 0; i < border.length - 1; i++) {
        border[i] = star.concat(border[i], star)
    }
    return border;
}

console.log(addBorder(["ash", "raf"]))