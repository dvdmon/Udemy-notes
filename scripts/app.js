let notes = document.querySelectorAll(".rt-scaffolding");

let allNotes = "";

notes.forEach(function (note, i, shortArraynm) {
  allNotes += `
<div class="note">
     ${note.innerHTML}
</div>`;
});

console.log(allNotes);
