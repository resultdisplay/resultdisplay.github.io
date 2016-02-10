/*UPDATES*/
var myApp = angular.module("myAppControllers",[]);

/*DISPLAY*/
myApp.controller('displayController',['$scope','$http','$location','$timeout','$sce',function($scope,$http,$location,$timeout,$sce){

// setTimeout(function(){
// alert("setting owl");
//   $("#owl-demo").owlCarousel({

//       navigation : true,
//       slideSpeed : 300,
//       paginationSpeed : 400,
//       singleItem : true
//       });
// },1000);

//take only the first name and initial
$scope.events = [
{
  name:'Heptathlon',
  round:'Round 1',
  participants:
  [{
  position:'First',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Second',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Third',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'First',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Second',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Third',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'First',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Second',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Third',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'First',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Second',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Third',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  }]
},
{
  name:'Godspeed',
  round:'Round 1',
  participants:
  [{
  position:'First',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Second',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Third',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'First',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Second',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Third',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'First',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Second',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Third',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'First',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Second',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  },
  {
  position:'Third',
  members:[
  {kid:'K123456',name:'Sangeetha KP'},
  {kid:'K123456',name:'Rahul Vignesh'},
  {kid:'K123456',name:'Gowtham VN'},
  {kid:'K123456',name:'Baratheraja'},
  {kid:'K123456',name:'Rahul Prakash'}]
  }]
}];

$(".bbox").hide();

// $scope.animate = function(){
//   var len = $scope.events1.length;
//   console.log("Big len: ",len);
//   for(i=0;i<len;)
//   { 
//     var num = $scope.events1[0]['participants'].length;
//     console.log("i: ",i," len: ",num);
//     $timeout(function(){
//       $scope.events = $scope.events[i];
     
//     },(i+1)*1000+1500*num)
//   }
// };

// $scope.animate();

// angular.element(document.querySelector())
}]);
