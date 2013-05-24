langApp.controller('WordsListCtrl', function ($scope, WordsList,LangList) {    
	'use strict';
    $scope.langs = [];
    $scope.words = [];		
	$scope.translatedWords =[];
	
	$scope.message = "";
	
	var init=function(){
		$scope.langs = LangList;
		$scope.words = WordsList;		
	};
    
	$scope.checkTranslation = function (e,el) {
        var charEl = el.item,
			charIndex = charEl.index(),
			isCorrect = false,
			word=charEl.html();
		if (charEl.parent()[0].textContent===$scope.translatedWord){	
			$scope.message="Congratulations! It's correct translation!"			
			//remove sortable
			$scope.translatedWords.push($scope.words.splice(1,$scope.words.indexOf($scope.word)));
			charEl.removeClass("error");			
		}	
		else{
			$scope.message="";
		}
		$scope.$apply();
		isCorrect = $scope.translatedWord[charIndex]==word;
		charEl[isCorrect?'removeClass':'addClass']("error");		
    };
	
	$scope.changeLangFrom=function(){
		if($scope.langTo==$scope.langFrom){
			$scope.langTo = null;
			//$scope.word=null;			
		}
	}
	
		
	init();
});
