var app = angular.module("myApp",[]);

app.controller("myController",function($scope){
	$scope.list = [];
	for(let i=0;i<50000;i++){
		$scope.list.push("item "+i);
	}
	$scope.rowHeight = 5;
	$scope.maxItems = 6;
	$scope.topRows= $scope.list.slice(0,$scope.maxItems);
	$scope.totalHeight = $scope.list.length * $scope.rowHeight;
	$scope.beforeHeight = 0;
});

app.directive("scrollElement",function(){
	return {
		link:function(scope,elem,attr){
			elem[0].onscroll = function(event){
				let startIndex = this.scrollTop/document.getElementById(attr["eleid"]).clientHeight * scope.list.length;
				scope.topRows= scope.list.slice(startIndex,startIndex + scope.maxItems);
				scope.$apply();
			}
		}
	};
});
