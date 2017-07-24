define('app', ['angular', 'angular-route', 'geolocation'], function (angular, ngRoute, ngGeolocation) {
	'use strict';
	var app = angular.module('timeLoggerApp', ['ngRoute', 'ngGeolocation']);
	return app;
});