import output from "./console.js";

function convert() {
    let string = document.getElementById("input").value
    //Replacing the "console" for "output" word
    while(string.match("console")){
        string = string.replace("console", "output")
    }
    return string
}

function render() {
    const finalCode = convert()
    //call the console (output module)
    try {
        eval(finalCode)
    } catch (error) {
        output.error(error)
    } finally {
        const $modal = document.querySelector(".output")
        $modal.classList.add("output--active")    
    }
}

const $run = document.getElementById("run")
$run.addEventListener("click", render)


function hideModal() {
    const $modal = document.querySelector(".output")
    $modal.classList.toggle("output--active")    
}


const $closeBtn = document.querySelector(".close-btn")
$closeBtn.addEventListener("click", hideModal)