const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || '';
    attachEventListeners();
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function attachEventListeners() {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.addEventListener("keyup", updateStorage);
    });

    notesContainer.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", function(e) {
            e.target.parentElement.remove();
            updateStorage();
        });
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
    attachEventListeners();
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

showNotes();
