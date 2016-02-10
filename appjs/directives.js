var myApp = angular.module('myAppDirectives',[]);
myApp.directive('compile', ['$compile', function ($compile) {

				return function(scope, element, attrs) {

				var ensureCompileRunsOnce = scope.$watch(

						function(scope) {

						return scope.$eval(attrs.compile);

						},

						function(value) {

						console.log(value);

						element.html(value);

						$compile(element.contents())(scope);

						}

				);

				};

}]);

// GLAnim
myApp.directive('bnSortable', function() {
        console.log("contactsAnim");
        return{
        scope:{},
        restrict: 'AEC',
        replace:'true',
        link: function(scope,elem,attrs){
          var tot = $(".bbox").length;
          console.log("tot:",tot);
          // function hide_()
          // {
          //   $(".bbox").each(function(i){
          //     var elem = $(this);
          //     var num = 12;
          //     setTimeout(function(){
          //       $(elem).animate({'margin-left':"-5000px"},1000,'easeInOutSine').hide(0);
          //     },(i+1)*num*1000);
          //   });
          //   setTimeout(show_,tot*9000)
          // }
          // function show_()
          // {
          //  $(".bbox").each(function(i){
          //     var elem = $(this);
          //     var num = 12;
          //     setTimeout(function(){
          //       $(elem).animate({'margin-left':"0px"},1000,'easeInOutSine').show(0);
          //     },1000*(i+1)+(i+1)*num*1000);
          //   }); 
          //   setTimeout(hide_,tot*9000)
          // }
          // hide_();
      $("#owl-demo").owlCarousel({

      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true
      });


    }
};
});
myApp.directive('wrapOwlcarousel', function () {  
    return {  
        restrict: 'AEC',  
        link: function (scope, element, attrs) {  
            var options = scope.$eval($(element).attr('data-options'));  
            setTimeout(function(){$(element).owlCarousel(options);},0);  
        }  
    };  
});  