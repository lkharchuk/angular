'use strict';

/* Filters */

langApp.directive('draggable', function () {
    return function (scope, element, attrs) {
        element.draggable({
            revert: true
        });
    };
});

langApp.directive('sortable2', function () {
    return function(scope, element, attrs) {
        element.sortable({
            connectWith: element[0].nodeName
        });
    };
});


langApp.directive('sortable', function () {
    return  function (scope, element, attrs) {            
		element.sortable({
			connectWith: element[0].nodeName,
			placeholder: "ui-state-highlight",
			//forcePlaceholderSize:true,
			stop: scope.checkTranslation
		});      
    };
});
