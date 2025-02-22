Package.describe({
	version: '0.1.0',
	name: 'apartx:meteor-user-session',
	summary: "Provides a UserSession object that works just like Session does, except it's persistent so you can preserve state across devices *and* sessions."
});

var both = ['client', 'server']

Package.onUse(function (api) {
	api.use('underscore', both);
	api.use('deps', both);
	api.use('session', both);
	api.use('livedata', both);
	api.use('mongo-livedata', both);

	api.addFiles('common.js', both);
	api.addFiles('server.js', 'server');
	api.addFiles('client.js', 'client');

	if (typeof api.export !== 'undefined') {
		api.export(['UserSession', 'UserSessionCollection'], both);
	}
});