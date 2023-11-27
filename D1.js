/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatypes in JavaScript sono 
1. STRINGHE= un insieme di caratteri alfanumerici delimitati da apici,doppi apici o backtips
2. NUMERO= un valore numerico che puo essere positivo,negativo o decimale
3. BOOLEAN= un datatype che puo assumere solo due valori: TRUE o FALSE
4. NULL= un valore assegnato ad una variabile che non può contenere nulla per nostra scelta
5. UNDEFINDED= indica il valore di una variabile a cui non è stato assegnato alcun valore di quelli precedentemente elencati */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Pasquale";
console.log("Il valore della variabile 'myName' è", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12;
let number2 = 20;
let sum = number1 + number2;
console.log("Il primo addendo è", number1);
console.log("Il secondo addendo è", number2);
console.log("La somma dei due addendi è", sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log("Il valore della variabile 'x' è", x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// const myName = 'Andriano'";
// La const "myName" è gia stata definita nella riga 25 pertanto a causa del tipo di variabile essa non puo essere riassegnata a nessun'altro valore

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let substraction = 4 - x;
console.log("La sottrazione tra il numero 4 e la variabile x è", substraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
let equality = name1 === name2;
console.log("Il valore della variabile 'name1' è", name1);
console.log("Il valore della variabile 'name1' è", name2);
console.log("L'ugualianza tra le variabili 'name1' e 'name2' è", equality);
name2 = name2.toLowerCase();
name1 = name1.toLowerCase();
console.log(
  "L'ugualianza tra 'name1' e 'name2' applicando toLowerCase è",
  name2 === name1
);
