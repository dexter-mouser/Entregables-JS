function recomendarPeliculas() {
    const entradaRating = prompt("Mostrar películas con rating superior a:", "8");
    if (entradaRating === null) {
        return;
    }

    const ratingMinimo = Number(entradaRating.trim());
    if (entradaRating.trim() === "" || !Number.isFinite(ratingMinimo)) {
        alert("Ingrese un rating válido.");
        return;
    }

    const peliculas = [
        { titulo: "Interestelar", genero: "Ciencia ficción", rating: 8.7 },
        { titulo: "Titanic", genero: "Romance", rating: 7.9 },
        { titulo: "El origen", genero: "Suspenso", rating: 8.8 },
        { titulo: "Avatar", genero: "Aventura", rating: 7.8 },
        { titulo: "El padrino", genero: "Crimen", rating: 9.2 }
    ];

    const peliculasTop = peliculas.filter(pelicula => pelicula.rating > ratingMinimo);
    const recomendaciones = peliculasTop.map(({ titulo, genero }) => {
        return `Recomendada: ${titulo} - Categoría: ${genero}`;
    });

    alert(recomendaciones.length > 0
        ? recomendaciones.join("\n")
        : "No hay películas que cumplan con el rating seleccionado.");
    return recomendaciones;
}