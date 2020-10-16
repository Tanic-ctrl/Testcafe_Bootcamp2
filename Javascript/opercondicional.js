//Operadores condicionales

let edad = 29
let masde18

if (edad < 18) {
    console.log("Eres menor de edad no puedes tomar alcohol")
    masde18 = false
} else {
    console.log("Salud")
    masde18 = true
}

console.log(masde18)


//Operador ternario -- If breve
masde18 = (edad < 18) ? false : true
console.log(masde18)