const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

  const categoriasUnicas = [];

  for (const pelicula of movies) {
    for (const categoria of pelicula.categories) {
      if (!categoriasUnicas.includes(categoria)) {
        categoriasUnicas.push(categoria);
      }
    }
  }
      console.log(categoriasUnicas);
