angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$collection',
function($scope, $stateParams, $collection){
  $collection(Parties).bindOne($scope, 'party', $stateParams.partyId, true, true);

  $collection(Meteor.users).bind($scope, 'users', false, true);
}]);
