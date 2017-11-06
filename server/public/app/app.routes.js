app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'app/pages/home.html',
            controller: 'HomeController'
        })

        .when('/admin', {
            templateUrl: 'app/pages/admin.html',
            controller: 'AdminController'
        })
        .when('/thanks', {
            templateUrl: 'app/pages/thanks.html',
            controller: 'ThankController'
        })

        .otherwise({
            redirectTo: '/'
        });
});
