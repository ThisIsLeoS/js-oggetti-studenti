/* DESCRIZIONE:
- Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  Stampare a schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti.
  Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
inserendo nell’ordine: nome, cognome e età. */

var pippo =
{
    "firstName": "Pippo",
    "lastName": "Rossi",
    "age": 32
};
for (var key in pippo)
{
    console.log(pippo[key]);
}
var pluto =
{
    "firstName": "Pluto",
    "lastName": "Bianchi",
    "age": 35
};
var paperino =
{
    "firstName": "Paperino",
    "lastName": "Carli",
    "age": 18
};
var studentsCollection = [pippo, pluto, paperino];
for (var i = 0; i < studentsCollection.length; ++i)
{
    console.log(studentsCollection[i].firstName, studentsCollection[i].lastName);
}
var ciccio =
{
    "firstName": prompt("Enter the student's first name"),
    "lastName": prompt("Enter the student's last name"),
    "age": parseInt(prompt("Enter the student's age"))
};
console.log(ciccio);
