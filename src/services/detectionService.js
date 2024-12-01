const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

const modelPath = path.join(__dirname, '../models/tomato_disease_classifier.json'); // Ganti dengan path model .json Anda
let model;

// Fungsi untuk memuat model
const loadModel = async () => {
    if (!model) {
        console.log('Loading model from:', modelPath);
        try {
            model = await tf.loadLayersModel(`file://${modelPath}`);
            console.log('Model loaded successfully.');
        } catch (error) {
            console.error('Error loading model:', error.message);
            throw error;
        }
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
            console.error('Buffer is empty!');
            throw new Error('Failed to read file buffer');
        }
        console.log('Buffer size:', buffer.length);

        // Mengonversi buffer menjadi tensor
        console.log('Decoding image...');
        const imageTensor = tf.node.decodeImage(buffer).resizeBilinear([150, 150]).expandDims(0); // Resize sesuai input model
        console.log('Image tensor shape:', imageTensor.shape);

        // Melakukan prediksi
        const prediction = model.predict(imageTensor);
        const scores = prediction.dataSync();
        console.log('Prediction scores:', scores);

        if (!scores || scores.length === 0) {
            console.error('Prediction failed. No scores returned.');
            throw new Error('Model prediction failed. No scores returned.');
        }

        const maxIndex = scores.indexOf(Math.max(...scores));

        // Label penyakit (sesuaikan dengan label model Anda)
        const labels = [
            'Healthy',
            'Bacterial Spot',
            'Early Blight',
            'Late Blight',
            'Leaf Mold',
            'Septoria Leaf Spot',
            'Target Spot',
            'Tomato Mosaic Virus',
            'Tomato Yellow Leaf Curl Virus',
            'Other',
        ];
        return {
            prediction: labels[maxIndex],
            confidence: Math.max(...scores).toFixed(2),
        };
    } catch (error) {
        console.error('Error during prediction:', error.message);
        throw error;
    }
};

module.exports = {
    predictDisease,
};
