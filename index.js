// Import library Hapi untuk membuat server
const Hapi = require("@hapi/hapi");

// Import definisi rute dari file routes.js
const routes = require("./routes");

// Fungsi async untuk menginisialisasi server
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  // Menjalankan server dan menunggu hingga server siap
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

// Menangani kesalahan yang tidak tertangani (unhandledRejection)
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

// Memanggil fungsi init() untuk memulai server
init();
