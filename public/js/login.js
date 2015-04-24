/**
 * Created by rupputur on 4/4/2015.
 */

/*Available colors - red, pink, purple, deep-purple,
    indigo, blue, light-blue, cyan, teal, green, light-green, lime
    yello, amber, orange, deep-orange, brown, grey, blue-grey,
*/

var app = angular.module('LogIn', ['ngMaterial']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
});

app.controller('LoginCtrl', function(){

});