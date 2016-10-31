(function() {

    window.pcConfig = {
        apiUrlBase: 'http://apipublic-development.azurewebsites.net/api/',
        appName: 'NocPortal',
        homeRoute: 'groups.dashboard',
        resetPasswordUrl: 'http://nocv2.development.powerconnect.us/#/reset-password',
        messageHubUrl: 'http://messagehub.development.powerconnect.us/signalr/hubs'
    };

    window.app.constant('pcConfig', window.pcConfig);
})();
