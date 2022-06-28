export default{
    $output: document.querySelector(".output__results"),
    log(args) {
        const $printLine = document.createElement("li");
        $printLine.classList.add("output-line");
        $printLine.textContent += args;
        this.$output.append($printLine)
    },
    error(args) {
        const $printLine = document.createElement("li");
        $printLine.classList.add("output-line--error");
        $printLine.textContent += args;
        this.$output.append($printLine)
    }
}