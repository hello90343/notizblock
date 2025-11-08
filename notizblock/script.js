// Notizen anzeigen lassen

let notesTitle = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let trashNotes = [];

function renderNotes(){

let contentRef = document.getElementById('content');
contentRef.innerHTML = "";

for(let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getnoteTemplate(indexNote);
}
}

function renderTrashNotes(){

let trashContentRef = document.getElementById('trash_content');
trashContentRef.innerHTML = "";
// In diesem Container ist etwas und das ist nichts. 
// Wenn etwas im Container nicht drine ist, dann funktionsunfähig.

for(let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
}
}

function getnoteTemplate(indexNote){
    return `<p>+ title: ${notesTitle[indexNote]} -> ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
    // Stempel -> Return wird verwendet, um ausserhalb einer Funktion den Quellcode übersichtlicher zu gestalten.
    // Ausserdem kann diese Funktion mehrmals verwendet werden.
}

function getTrashNoteTemplate(indexTrashNote){
    return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
    // Stempel -> Return wird verwendet, um ausserhalb einer Funktion den Quellcode übersichtlicher zu gestalten.
    // Ausserdem kann diese Funktion mehrmals verwendet werden.
}

function addNote(){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

function deleteNote(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    // 	[0] → du bekommst den Inhalt
    //  trashNotes = ["gelöschte Notiz"]
	//   ohne [0] → du bekommst ein Array im Array
    //   trashNotes = [ ["gelöschte Notiz"] ]
    renderNotes();
    renderTrashNotes();
}




/* 1 for(let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML = " " + note;
}
}

Durch diesen Code wird dann der eine Array-Element mit dem anderen Array-Element getauscht.
 */

/* 2 for(let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];
    contentRef.innerHTML += " " + note;
}
} 
html -> <button onclick="renderNotes()">neu rendern</button>
Durch diesen Code und Button verdoppelst du es beim druafklicken und der vorherige Text bleibt bestehen
*/