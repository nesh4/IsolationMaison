var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']).config(function ($httpProvider, $mdThemingProvider) {

    var greenBackgroundMap = $mdThemingProvider.extendPalette('green', {
        '50': '9CCC65'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('greenBackground', greenBackgroundMap);


    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('red')
        .warnPalette('red');
    //.backgroundPalette('greenBackground');

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

});

app.controller('AboutController', function ($scope) {
    $scope.message = 'Hello from AboutController';
});

app.filter('trusted', ['$sce', function ($sce) {
    return $sce.trustAsResourceUrl;
}]);
