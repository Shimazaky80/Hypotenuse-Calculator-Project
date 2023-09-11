let a
let b
let c

// Side a
a = prompt("Enter side A")
// converted to number data type
a = Number(a)

// side b
b = prompt("Enter side B")
// converted to number data type
b = Number(b)

// Fomula c2=a2+b2 (2 means to the power of 2)
// a	=	side of right triangle
// b	=	side of right triangle
// c	=	hypotenuse

c = Math.pow(a, 2) + Math.pow(b, 2)
c = Math.sqrt(c)

console.log(`Side C: ${c}`)