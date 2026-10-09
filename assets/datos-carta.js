/*
  Carta de Mr. Pizza El Parador
  Fuente: fotografías de la carta del local (assets/carta/), vigente desde la apertura (octubre 2026).
  - Nombres de producto tal como aparecen en la carta.
  - Descripciones en portugués del cartel de menús/postres traducidas al español.
  - El número 27 no existe en la carta: no se añade ningún producto.
  - Revisar: la foto de la carta se corta bajo "Entrantes"; podría haber más entrantes.
*/
window.CARTA = {
  tamanos: {
    normal: { nombre: "Normal", medida: "35 cm" },
    maxi: { nombre: "Maxi", medida: "50 cm" }
  },

  // Grupos de precio tal como aparecen en la carta
  grupos: [
    { id: "g1", normal: 8.40, maxi: 11.20 },
    { id: "g2", normal: 12.50, maxi: 17.50 },
    { id: "g3", normal: 12.90, maxi: 17.90 },
    { id: "g4", normal: 14.90, maxi: 19.50 },
    { id: "g5", unico: true }
  ],

  pizzas: [
    { n: "01", nombre: "Margherita", grupo: "g1", ing: ["tomate", "mozzarella", "orégano"], foto: "pizza-margherita.jpg" },
    { n: "02", nombre: "Rústica", grupo: "g2", ing: ["tomate", "mozzarella", "tomate fresco", "parmesano", "rúcula fresca"], foto: "pizza-rustica-caja.jpg", fotoAmbiente: true },
    { n: "03", nombre: "Oriente", grupo: "g2", ing: ["pollo", "nata", "curry", "cebolla", "orégano"] },
    { n: "04", nombre: "4 Stagioni", grupo: "g2", ing: ["tomate", "mozzarella", "jamón york", "champiñones", "aceitunas", "orégano"] },
    { n: "05", nombre: "Capricciosa", grupo: "g2", ing: ["tomate", "mozzarella", "jamón york", "champiñones", "pimientos", "orégano"] },
    { n: "06", nombre: "Invierno", grupo: "g2", ing: ["tomate", "mozzarella", "chorizo", "aceitunas", "emmental", "orégano"], foto: "pizza-invierno.jpg" },
    { n: "07", nombre: "Primavera", grupo: "g2", ing: ["tomate", "mozzarella", "champiñones", "pimiento", "nata", "orégano"] },
    { n: "08", nombre: "Outono", grupo: "g2", ing: ["tomate", "mozzarella", "chorizo", "champiñones", "cebolla", "orégano"] },
    { n: "09", nombre: "Strogonow", grupo: "g2", ing: ["tomate", "mozzarella", "pollo", "champiñones", "nata", "orégano"] },
    { n: "10", nombre: "Paesana", grupo: "g2", ing: ["tomate", "mozzarella", "pollo", "queso de oveja", "champiñones", "cebolla", "orégano"] },
    { n: "11", nombre: "Firenze", grupo: "g2", ing: ["tomate", "mozzarella", "bacon", "champiñones", "nata", "orégano"] },
    { n: "12", nombre: "Vegetariana", grupo: "g2", ing: ["tomate", "mozzarella", "pimiento", "aceitunas", "champiñones", "maíz", "cebolla", "tomate fresco"], foto: "pizza-vegetariana.jpg" },
    { n: "13", nombre: "4 Quesos", grupo: "g2", ing: ["tomate", "mozzarella", "gorgonzola", "emmental", "parmesano", "orégano"] },
    { n: "14", nombre: "Novara", grupo: "g2", ing: ["tomate", "mozzarella", "gorgonzola", "huevo", "jamón serrano", "orégano"] },
    { n: "15", nombre: "Siciliana", grupo: "g2", ing: ["tomate", "mozzarella", "anchoas", "aceitunas", "alcaparras", "orégano"] },
    { n: "16", nombre: "Zio Giorgio", grupo: "g3", ing: ["tomate", "mozzarella", "tomate fresco", "gambas", "aceitunas", "orégano"] },
    { n: "17", nombre: "Toscana", grupo: "g3", ing: ["tomate", "mozzarella", "jamón serrano", "champiñones", "nata", "orégano"] },
    { n: "18", nombre: "Carnivora", grupo: "g3", ing: ["tomate", "mozzarella", "jamón york", "chorizo", "salchicha", "bacon", "orégano"] },
    { n: "19", nombre: "Frutti di Mare", grupo: "g3", ing: ["tomate", "mozzarella", "gambas", "atún", "cangrejo", "orégano"], foto: "pizza-frutti-di-mare.jpg" },
    { n: "20", nombre: "Barbanesa", grupo: "g3", ing: ["tomate", "mozzarella", "carne picada", "cebolla", "salsa barbacoa", "orégano"] },
    { n: "21", nombre: "Verano", grupo: "g3", ing: ["tomate", "mozzarella", "gambas", "piña", "maíz", "orégano"] },
    { n: "22", nombre: "Tango", grupo: "g3", ing: ["tomate", "mozzarella", "pimiento", "cebolla", "champiñones", "emmental", "orégano"] },
    { n: "23", nombre: "Veneziana", grupo: "g3", ing: ["tomate", "mozzarella", "jamón serrano", "gambas", "champiñones", "orégano"] },
    { n: "24", nombre: "Samu", grupo: "g3", ing: ["tomate", "mozzarella", "bacon", "champiñones", "piña", "pimiento", "orégano"] },
    { n: "25", nombre: "Caldeirada", grupo: "g3", ing: ["tomate", "mozzarella", "salchicha", "nata", "huevo", "cebolla", "maíz", "orégano"] },
    { n: "26", nombre: "V.P.C. Martesa", grupo: "g3", ing: ["tomate", "mozzarella", "jamón york", "bacon", "cebolla", "emmental", "huevo", "orégano"] },
    { n: "28", nombre: "Mr. Pizza", grupo: "g4", ing: ["tomate", "mozzarella", "jamón york", "champiñones", "gorgonzola", "huevo", "chorizo", "jamón serrano", "orégano"], foto: "pizza-mr-pizza.jpg", firma: true },
    { n: "29", nombre: "Lucas", grupo: "g4", ing: ["tomate", "mozzarella", "jamón york", "champiñones", "atún", "gambas", "maíz", "nata", "orégano"], foto: "pizza-lucas.jpg" },
    { n: "30", nombre: "Calzone Farcito", grupo: "g5", precio: 10.90, ing: ["tomate", "mozzarella", "jamón york", "champiñones", "orégano"] },
    { n: "31", nombre: "Porción (slice)", grupo: "g5", precio: 2.50, ing: [] }
  ],

  elabora: {
    base: { descripcion: "Tomate y mozzarella", normal: 8.40, maxi: 11.20 },
    extra: { normal: 1.80, maxi: 2.20 },
    ingredientes: [
      "Jamón york", "Chorizo", "Champiñones", "Pimientos", "Emmental", "Gorgonzola",
      "Huevo", "Jamón serrano", "Aceitunas", "Cebolla", "Atún", "Maíz", "Bacon",
      "Salchicha", "Cangrejo", "Tomate fresco", "Queso parmesano", "Alcaparras",
      "Salsa barbacoa", "Pollo", "Piña", "Gambas", "Anchoas", "Rúcula", "Carne picada"
    ]
  },

  entrantes: [
    { nombre: "Fagottino", precio: 1.90, nota: "Entrante" }
  ],

  menus: [
    { nombre: "Menú 1", precio: 3.90, incluye: ["1 porción de pizza", "1 refresco (lata)"] },
    { nombre: "Menú 2", precio: 6.20, incluye: ["2 porciones de pizza", "1 refresco (lata)"] },
    { nombre: "Menú Familiar", precio: 32.50, incluye: ["4 Fagottinos", "1 pizza Maxi con 3 ingredientes", "1 refresco (1,5 L)", "4 Cannoncini"], destacado: true }
  ],

  postres: [
    { nombre: "Fagottino", precio: 3.00, unidad: "1 unidad", desc: "Nutella y avellanas" },
    { nombre: "Cannoncini", precio: 1.60, unidad: "1 unidad", desc: "Masa, Nutella y azúcar blanco" },
    { nombre: "Cocco Bello", precio: 13.90, unidad: "Tamaño Normal (35 cm)", desc: "Nata, leche condensada, Nutella y coco deshidratado" }
  ]
};
