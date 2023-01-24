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

let ausschneidernSusi = A.slice(anfangsIndexSusi, längeSusi);
console.log(ausschneidernSusi);          // Susi 

document.write(ausschneidernSusi);    // in Html einfügen


