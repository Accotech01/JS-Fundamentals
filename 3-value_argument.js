let args = process.argv.slice(2);

let arg = args[0];
if (args[0] === undefined) {
    console.log("No argument")
} else {
    console.log(arg)
}