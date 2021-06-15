

const numbersArray = ["8(495)430-23-97", "+7-4-9-5-43-023-97", "4-3-0-2-3-9-7", "8-495-430"]

function isNumberThere(numbersArray) {
    const reg = /\D+/g
    let clearArr = numbersArray.map(e => e.replace(reg, ''))
    clearArr = clearArr.map(e => { if (e.length === 7) { return "495" + e } else { return e.slice(1) } })
    for (let i = 1; i < clearArr.length; i++) {
        let res;
        if (clearArr[0] === clearArr[i]) {
            console.log("YES")
        }
        else {console.log("NO") }
    }
}

isNumberThere(numbersArray)


