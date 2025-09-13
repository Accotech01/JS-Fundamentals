let args = process.argv.slice(2)

let arg = Number(args[0]);


if (isNaN(arg)){
    console.log("Missing size")

} else {

    for (let i = 0; i<arg; i++){

        let size =' ';
        for(let j = 0; j<arg; j++){
            size += 'X'
    }
    console.log(size)
}

}
