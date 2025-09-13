let args = process.argv.slice(2);

let arg = Number(args[0])

if (isNaN(arg)){
    console.log("Missing number of occurrences")
    } else {
       for (let i = 0; i < arg; i++){
        console.log("C is fun");
    }
}