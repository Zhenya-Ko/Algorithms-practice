
function countTableSize(x1, y1, x2, y2) {
    if ((x1 === x2 || x1 === y2) && (y1 === x2 || y1 === y2)) {
        console.log(`${x1 * 2}  ${y1}`)
    }
    else {
 s1 = (x1 + x2) * Math.max(y1, y2)
 s2 = (y1 + y2) * Math.max(x1, x2)
 s3 = (x1 + y2) * Math.max(y1, x2)
 s4 = (y1 + x2) * Math.max(x1, y2)

        switch (Math.min(s1, s2, s3, s4)) {
            case s1:
                { console.log(`${(x1 + x2)} ${Math.max(y1, y2)}`) };
                break
            case s2:
                { console.log(`${(y1 + y2)} ${Math.max(x1, x2)}`) };
                break
            case s3:
                { console.log(`${(x1 + y2)} ${Math.max(y1, x2)}`) };
                break
            case s4:
                { console.log(`${(y1 + x2)} ${Math.max(x1, y2)}`) };
                break
            default:
                console.log( "Check your data");
        }

    }

}

countTableSize(5, 3, 7, 8)

