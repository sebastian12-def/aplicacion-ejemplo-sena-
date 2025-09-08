import Libro from "./libro.js";  // IMPORTAR con L mayúscula

let libros = [];
let mensaje = "";

const form = document.getElementById("formLibro");
const tablaLibros = document.getElementById("tablaLibros");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que se recargue la página

    if (validarFormulario()) {
        // recoger valores
        let titulo = document.getElementById("txtTitulo").value;
        let autor = document.getElementById("txtAutor").value;
        let editorial = document.getElementById("txtEditorial").value;
        let idioma = document.getElementById("cbIdioma").value;

        // crear objeto libro con la clase
        const objLibro = new Libro(titulo, autor, editorial, idioma);

        // agregar al arreglo
        libros.push(objLibro);

        // mostrar en tabla
        mostrarLibrosTabla();

        // resetear formulario
        form.reset();
    } else {
        alert(mensaje); // mostrar mensaje de validación
    }
});

const mostrarLibrosTabla = () => {
    tablaLibros.innerHTML = "";
    libros.forEach(libro => {
        let fila = `
        <tr>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.editorial}</td>
            <td>${libro.idioma}</td>
        </tr>`;
        tablaLibros.innerHTML += fila;
    });
};

const validarFormulario = () => {
    if (document.getElementById("txtTitulo").value === "") {
        mensaje = "Debe ingresar el Título del libro";
        return false;
    } else if (document.getElementById("txtAutor").value === "") {
        mensaje = "Debe ingresar el Autor del libro";
        return false;
    } else if (document.getElementById("txtEditorial").value === "") {
        mensaje = "Debe ingresar la Editorial del libro";
        return false;
    }
    return true;
};
