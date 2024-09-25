// Modules protects their variables, function, Methods from leak, by default.


export const name = "this is a sum module"
console.log(name)

export function calculateSum(a,b){
    const sum = a + b;

    console.log(sum)
}

