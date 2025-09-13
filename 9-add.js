let args = process.argv.slice(2)

let arg1 = Number(args[0])
let arg2 = Number(args[1])

function add (a, b){
    let arg = a + b;
    console.log(arg)
}

add(arg1, arg2)

