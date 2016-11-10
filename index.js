module.exports = function() {
	console.log('dtc-test-module');
	require("cf-deployment-tracker-client").track();
};