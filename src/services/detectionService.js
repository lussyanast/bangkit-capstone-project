const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const path = require("path");

const modelPath = path.join(__dirname, "../models/tomato_disease_classifier.h5");
let model;

// Fungsi untuk memuat model
const loadModel = async () => {
    if (!model) {
        console.log("Loading model from:", modelPath);
        model = await tf.loadLayersModel(`file://${modelPath}`);
        console.log("Model loaded successfully.");
    }
    return model;
};

// Fungsi untuk memprediksi penyakit
const predictDisease = async (file) => {
    try {
        const model = await loadModel();

        // Membaca buffer file
        const buffer = await file.read();
        if (!buffer) {
            console.error("Buffer is empty!");
            throw new Error("Failed to read file buffer");
        }
        console.log("Buffer size:", buffer.length);

        // Mengonversi buffer menjadi tensor
        const imageTensor = tf.node.decodeImage(buffer).resizeBilinear([224, 224]).expandDims(0);
        console.log("Image tensor shape:", imageTensor.shape);

        // Melakukan prediksi
        const prediction = model.predict(imageTensor);
        const scores = prediction.dataSync();
        console.log("Prediction scores:", scores);

        const maxIndex = scores.indexOf(Math.max(...scores));

        // Label penyakit (harus sesuai dengan pelatihan model Anda)
        const labels = ["Healthy", "Bacterial Spot", "Early Blight", "Late Blight", "Leaf Mold"];
        return {
            prediction: labels[maxIndex],
            confidence: Math.max(...scores).toFixed(2),
        };
    } catch (error) {
        console.error("Error during prediction:", error.message);
        throw error;
    }
};

module.exports = {
    predictDisease,
};
