
function convert() {
    let string = document.getElementById("input").value
    //Replacing the "console" for "output" word
    while(string.match("console")){
        string = string.replace("console", "output")
    }
    
    return string
}

function render() {
    const $output = document.querySelector(".output__results")    

    const output = {
        log(args) {
            $printLine = document.createElement("li");
            $printLine.classList.add("output-line")
            $printLine.textContent += args;
            $output.append($printLine)
        }
    }
    
    const finalCode = convert()
    eval(finalCode)


    const $modal = document.querySelector(".output")
    $modal.classList.add("output--active")    
}

const $run = document.getElementById("run")
$run.addEventListener("click", render)


function hideModal() {
    const $modal = document.querySelector(".output")
    $modal.classList.toggle("output--active")    
}

const $closeBtn = document.querySelector(".close-btn")
$closeBtn.addEventListener("click", hideModal)
