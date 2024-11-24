const detectionService = require("../services/detectionService");

const detectDiseaseHandler = async (request, h) => {
    try {
        const { payload } = request;
        const { file } = payload;

        if (!file) {
            return h.response({ status: "fail", message: "No file uploaded" }).code(400);
        }

        const result = await detectionService.predictDisease(file);
        return h.response({
            status: "success",
            data: {
                prediction: result.prediction,
                confidence: result.confidence,
            },
        }).code(200);
    } catch (error) {
        console.error(error);
        return h.response({
            status: "error",
            message: "Something went wrong while detecting disease",
        }).code(500);
    }
};

module.exports = {
    detectDiseaseHandler,
};
