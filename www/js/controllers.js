angular.module('starter.controllers', [])


.controller('AccountCtrl', function($scope, $cordovaBarcodeScanner, $http) {
  $scope.insertdatako = function(){
     $cordovaBarcodeScanner.scan().then(function(imageData){
   var json = imageData.text;
  // json.date= {"date" : new Date};

//    var date = [{"Date": new Date}];
// var json = image.concat(date);
 $http.post(
   'https://api.mongolab.com/api/1/databases/testmobile/collections/savehere?apiKey=X8645ILWJXiV_Rmu4gZVn1URuu1WF1Ey', 
      obj = JSON.parse(json) + JSON.stringify({'now': new Date()}
    
  )
  .success(function(){
    alert("yes!!");
    console.log(arguments);
    console.log("yes naman!");
  })
  .error(function(){
    console.log(arguments);
    console.log("awwww");
  });

});
}
});

//  .controller("ourController", function($scope, $cordovaBarcodeScanner, $http){
//   $scope.scanBarcode = function(){
//     $cordovaBarcodeScanner.scan().then(function(imageData){



//      $http.post(
//     'https://api.mongolab.com/api/1/databases/testmobile/collections/savehere?apiKey=X8645ILWJXiV_Rmu4gZVn1URuu1WF1Ey', 
//     $scope.data = JSON.stringify(imageData.text)
  // scope.data = JSON.parse()
//   )
//   .success(function(){
//     console.log(arguments);
//     console.log("yes naman!");
//   })
//   .error(function(){
//     console.log(arguments);
//     console.log("awwww");
//   });

//   });

// }
// });