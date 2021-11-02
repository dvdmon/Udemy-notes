let notes = document.querySelectorAll(".lecture-bookmark-v2--content-container--2f_Tg div")

let allNotes = ""

for (note of notes) {
    allNotes += `<div class="note">
    `
    allNotes += "<h2>" + note.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.innerHTML + "</h2>"
    allNotes += `
    `
    allNotes += note.innerHTML
    allNotes += `
    </div>`
}

console.log(allNotes);
