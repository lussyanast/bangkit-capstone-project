## Dokumentasi API bangkit-capstone-project

### Deskripsi

API ini menyediakan layanan untuk mengelola data prediksi penyakit pada tomat.

### Follow this step to run

1. npm install
2. npm start

### Endpoint

*Prediction*
- Method: POST
- Path: /detect
- Headers: Content-Type: multipart/form-data
- Body (form-data) : key:file value:image
- Response:
    - Jika berhasil (200 OK)
        {
            "status": "success",
            "data": {
                "prediction": "Leaf Mold",
                "confidence": "1.00"
            }
        }
    - Jika gagal karena tidak ada file
        {
            "status": "fail",
            "message": "No file uploaded"
        }
    - Jika gagal karena jenis file tidak didukung
        {
            "status": "fail",
            "message": "Unsupported file type"
        }
    - Jika gagal karena ada kesalahan proses
        {
            "status": "error",
            "message": "Something went wrong while detecting disease"
        }