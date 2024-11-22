// (Import fungsi-fungsi handler dari file handlers) (Work in progress)
const { signin, signup, signout } = require("../handlers/authHandler");

const routes = (server, myModels) => {
	server.route({
		method: "POST",
		path: "/signin",
		handler: signin,
		options: {
			auth: false,
		},
	});

	server.route({
		method: "POST",
		path: "/signup",
		handler: signup,
		options: {
			auth: false,
		},
	});

	server.route({
		method: "POST",
		path: "/signout",
		handler: signout,
		options: {
			auth: "session",
		},
	});
};

module.exports = routes;