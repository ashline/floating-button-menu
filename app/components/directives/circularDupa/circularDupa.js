angular.module('myApp.circularDupa', [])
    .directive('circularDupa', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'components/directives/circularDupa/circular-dupa-tpl.html',
            controller: function() {
                
            }
        }
    })
.directive('booty', function() {
    return {
        restrict: 'E',
        replace: true,
        require: '^circulaDupa',
        templateUrl: 'components/directives/circularDupa/booty-tpl.html',
        scope: {
            icon: '@'
        },
        controller: function() {
            
        }
    }
});