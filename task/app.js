const express = require('express');
const router = require('./routes/api');
const mysql = require('mysql2');
require('dotenv').config(); // Menggunakan dotenv untuk membaca variabel lingkungan dari file .env

const app = express();

// Menggunakan middleware
app.use(express.json());

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Menguji koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal:', err);
  } else {
    console.log('Koneksi database berhasil');
  }
});

// Menggunakan router
app.use(router);

// Mendefinisikan port
const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
