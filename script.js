const nomb = ["Pedro", "Juan", "Valeria", "Miguel", "Carlos", "Lina", "Laura", "Luis", "Mateo", "María"];

function contarNomb(nomb) {
    var total = 0;
    for (let i = 0; i < nomb.length; i++) {
        total++;
        document.write((i + 1) + " " + nomb[i] + "<br>");
        console.log((i + 1) + " " + nomb[i]);
    }
    return total; 
}

const cantidadNombres = contarNomb(nomb);
console.log("Total de nombres: " + cantidadNombres);


let spancantAlumnos =document.getElementById("cantAlumnos")

spancantAlumnos.innerHTML=cantidadNombres;


