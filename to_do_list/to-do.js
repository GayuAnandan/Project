const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "data:image/png;base64,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"
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})