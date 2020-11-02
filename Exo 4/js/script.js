let note = prompt("Choisis une note entre 0 et 10");

if (note >= 0 && parseInt(note) < 4) {
    alert('Nul');
} else if (note >= 4 && parseInt(note) < 7) {
    alert('Moyen');
} else if (note >= 7 && parseInt(note) < 9) {
    alert('Assez bien');
} else if (note == 9) {
    alert('Bien');
} else if (note == 10) {
    alert('Très bien');
} else {
    alert("Ce chiffre n'est pas  compris entre 0 et 10 !");
};