
function triangle (x, y, z) {
    if ((x < y + z) && (y < x + z) && (z < x + y)) {
        console.log("YES")
    }
    else { console.log("NO") }
}
triangle(1, 2, 3)

// let res;
// process.stdin.on('data', data => {
//     let [x, y, z] = data.toString().trim().split("\n");
//     process.stdout.write(triangle(x, y, z) + " ")
//     process.exit()
// })



