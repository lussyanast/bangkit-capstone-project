// (Import fungsi-fungsi handler dari file handlers) (Work in progress)
// const { signin, signup, signout } = require("../handlers/authHandler");

// const routes = (server, myModels) => {
// server.route({
// 	method: "POST",
// 	path: "/signin",
// 	handler: signin,
// 	options: {
// 		auth: false,
// 	},
// });

// server.route({
// 	method: "POST",
// 	path: "/signup",
// 	handler: signup,
// 	options: {
// 		auth: false,
// 	},
// });

// server.route({
// 	method: "POST",
// 	path: "/signout",
// 	handler: signout,
// 	options: {
// 		auth: "session",
// 	},
// });
// };
const { detectDiseaseHandler } = require("../handlers/detectionHandler");

const detectionRoutes = [
	{
		method: "POST",
		path: "/detect",
		config: {
			payload: {
				output: "stream",
				parse: true,
				allow: "multipart/form-data",
			},
		},
		handler: detectDiseaseHandler,
	},
];


module.exports = detectionRoutes;
