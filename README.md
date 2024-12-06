## Dokumentasi API

### Deskripsi

API ini menyediakan layanan untuk mendeteksi dan memprediksi penyakit pada tanaman tomat berdasarkan gambar yang diunggah. Pengguna dapat mengirimkan gambar dan menerima hasil prediksi penyakit dengan tingkat keyakinan.

### Endpoint

_Prediksi Penyakit_

- _Detect Disease_
  - _Method:_ POST
  - _Path:_ /detect
  - _Parameters:_
    - file: Gambar tanaman tomat untuk dianalisis (required)
  - _Headers:_
    - Content-Type: multipart/form-data
  - _Body (form-data):_
    - Key: `file`
    - Value: `image` (file gambar yang ingin dianalisis, dalam format PNG atau JPEG)
  - _Response:_
    - Jika berhasil:
      - Status code: 200 OK
      - Body:
        ```json
        {
          "status": "success",
          "data": {
            "prediction": "Leaf Mold",
            "confidence": "1.00"
          }
        }
        ```
    - Jika gagal karena tidak ada file yang diunggah:
      - Status code: 400 Bad Request
      - Body:
        ```json
        {
          "status": "fail",
          "message": "No file uploaded"
        }
        ```
    - Jika gagal karena jenis file tidak didukung:
      - Status code: 415 Unsupported Media Type
      - Body:
        ```json
        {
          "status": "fail",
          "message": "Unsupported file type"
        }
        ```
    - Jika gagal karena ada kesalahan saat memproses:
      - Status code: 500 Internal Server Error
      - Body:
        ```json
        {
          "status": "error",
          "message": "Something went wrong while detecting disease"
        }
        ```

### Langkah-langkah untuk menjalankan

1. Install dependensi dengan perintah:
   npm install
2. Jalankan server dengan perintah:
   npm start
3. Gunakan Postman untuk mengirimkan foto untuk diprediksi ke server
4. Sesuaikan URL seperti pada Endpoint di atas
