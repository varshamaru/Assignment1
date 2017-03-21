(function(){
  'user strict'

  angular.module('LunchApp',[])

  .controller('LunchController',LunchController);

  LunchController.$inject=['$scope'];

  function LunchController($scope)
  {
    $scope.LunchList="";
    $scope.FinalResult="";
    $scope.Fontclass={"color":"green"};

    $scope.checkLunch=function()
    {
      var result="";
        if($scope.LunchList=="")
        {
          result="Please enter data first";
          $scope.Fontclass={"color":"red"};
        }
        else {
          var arrayofItem=$scope.LunchList.split(",");
          arrayofItem = arrayofItem.filter(e => String(e).trim()); //use to remove empty string
          if(arrayofItem.length<=3)
          {
            result="Enjoy!";
          }
          else {
            result="Too Much!";
          }
        }
        $scope.FinalResult=result;
    };
  }
})();
