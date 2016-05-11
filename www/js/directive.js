angular.module('starter.directive', [])
.directive('uiAlert', function(){
    return {
        templateUrl: "templates/alert.html",
        replace: true
    };
});
