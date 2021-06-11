
function triangle(x, y, z) {
    if ((x < y + z) && (y < х + z) && (z < х + у)) {
        console.log("YES")
    }
    else { console.log("NO") }
}


let res;
// process.stdin.on('data', data => {
//     let [x, y, z] = data.toString().trim().split("\n");
//     process.stdout.write(triangle(x, y, z) + " ")
//     process.exit()
// })


triangle(3, 4, 5)
