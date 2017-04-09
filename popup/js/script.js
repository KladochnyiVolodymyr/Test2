function open_window() {
    document.getElementById("modal-overlay").style.display = "flex";
}


function close_window(event) {
    if (event.target == document.getElementById("modal-overlay") || event.target == document.getElementById("modal-close")) {
        document.getElementById("modal-overlay").style.display = "none";
    }
}
