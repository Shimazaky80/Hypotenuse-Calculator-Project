// let a
// let b
// let c

// Side a
// a = prompt("Enter side A")
// converted to number data type
// a = Number(a)

// side b
// b = prompt("Enter side B")
// converted to number data type
// b = Number(b)


// c = Math.pow(a, 2) + Math.pow(b, 2)
// c = Math.sqrt(c)

// console.log(`Side C: ${c}`)

document.getElementById("submitButton").onclick = ()=> {
    
    // Side a
    a = document.getElementById("aTextBox").value
    // converted to number data type
    a = Number(a)
    console.log(`Side A, you entered: ${a}`)

    // side b
    b = document.getElementById("bTextBox").value
    // converted to number data type
    b = Number(b)
    console.log(`Side B, you entered: ${b}`)


    c = Math.pow(a, 2) + Math.pow(b, 2)
    c = Math.sqrt(c)

    // chaninging the inner text of c label element
    document.getElementById("cLable").innerHTML = `Side C: ${c}`

}