
let res;
process.stdout.write("your data")
process.stdin.on('data', data => {
    [troom, tcond, mode] = data.toString().trim().split(' ');
    // process.stdout.write(`${troom}, ${tcond}, ${mode}`)
    process.stdout.write(gettemp(mode, troom, tcond) + " ")
    process.exit()
})

// function gettemp(mode,troom,tcond) {
// if (mode === "freeze") { troom <= tcond ? res = troom : res = tcond }
// else if (mode === "heat") { troom >= tcond ? res = troom : res = tcond }
// else if (mode === "auto") { res = tcond }
// else if (mode === "fan"){ res = troom }
// else( console.log("Check your data"))
// console.log(res)
// }

function gettemp(mode, troom, tcond) {
    switch (mode) {
        case "freeze":
            { return troom <= tcond ? res = troom : res = tcond };
        case "heat":
            { return troom >= tcond ? res = troom : res = tcond };
        case "auto":
            { return res = tcond };
        case "fan":
            { return res = troom };
        default:
            return "Check your data";
    }
}
