console.log("test?");

/* 
Frage

slice 

Varibale A = Susi is going to codingschool

in neuen Variable speichern 
dann
in html ausgeben
    Susi
    is
    is going to school
    school
    Susi is school


*/

const A = "Susi is going to codingschool";
console.log(A.length); //29

let sucheSusi = "Susi";
let sucheIs = "is";
let sucheIsGoingToSchool = "is going to school";
let sucheSchool = "school";
let sucheSusiIsSchool = "Susi is school";

let längeSusi = sucheSusi.length;
console.log(längeSusi);                 // 4  4 Zeichen lang
let anfangsIndexSusi = A.indexOf(sucheSusi);
console.log(anfangsIndexSusi);          // 0  fängt bei 0 an

let ausschneidernSusi = A.slice(anfangsIndexSusi, anfangsIndexSusi+längeSusi);
console.log(ausschneidernSusi);          // Susi 

document.write(ausschneidernSusi + " ");    // in Html einfügen



// Funktion
// input Variable A = x 
// und Suche y = namen 
function inHtml(x, y){      // x = A    y = Susi 
    let A = x;
    console.log("function " + A);
    let sucheSusi = y;
    console.log("function " + sucheSusi);


    let längeSusi = sucheSusi.length;
console.log(längeSusi);                 // 4  4 Zeichen lang
let anfangsIndexSusi = A.indexOf(sucheSusi);
console.log(anfangsIndexSusi);          // 0  fängt bei 0 an

let ausschneidernSusi = A.slice(anfangsIndexSusi,anfangsIndexSusi+längeSusi);
console.log(ausschneidernSusi);          // Susi 

document.write(ausschneidernSusi + " ");    // in Html einfügen

}

inHtml(A, sucheSusi);
inHtml(A, sucheIsGoingToSchool);
inHtml(A, sucheIs);
inHtml(A, sucheSchool);
inHtml(A, sucheSusiIsSchool);


let sucheIs2 = "is";

let längeIs2 = sucheIs2.length;
console.log(längeIs2);                 // 2  2 Zeichen lang
let anfangsIndexIs2 = A.indexOf(sucheIs2);
console.log(anfangsIndexIs2);          // 5  fängt bei 5 an

let ausschneidernIs2 = A.slice(anfangsIndexIs2, anfangsIndexIs2+längeIs2);
console.log(ausschneidernIs2);          // Susi 

document.write(ausschneidernIs2 + " ");    // in Html einfügen

console.log(A);