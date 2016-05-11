angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('RegistroCtrl', function($scope){
  $scope.contactos = [
    {nombre:"Maria", telefono:"7891234", data: new Date() ,operadores: {nombreO:"Tigo", codigo: "15", categoria: "Celular" }},
    {nombre:"Pedro", telefono:"7834578", data: new Date() ,operadores: {nombreO:"Viva", codigo: "13", categoria: "Celular" }},
    {nombre:"Juan", telefono:"7899976", data: new Date() ,operadores: {nombreO:"Entel", codigo: "12", categoria: "Celular" }}
  ];
  
  $scope.operadores = [
  {nombreO:"Tigo", codigo: "15", categoria: "Celular", precio: "1"},
  {nombreO:"Viva", codigo: "14", categoria: "Celular", precio: "2"},
  {nombreO:"Entel", codigo: "13", categoria: "Celular", precio: "3"},
  {nombreO:"Comteco", codigo: "12", categoria: "TvCable", precio: "4"},
  {nombreO:"Vhs", codigo: "11", categoria: "TvCable", precio: "5"},
  ];

  $scope.adicionarContacto= function(contacto){
    $scope.contactos.push(angular.copy(contacto));
      delete $scope.contacto;
  };
 
  $scope.eliminarContacto = function(contactos){
      $scope.contactos = contactos.filter(function(contactos){
        if(!contactos.seleccionado) return contactos;
      });
  };

  $scope.isContactoSeleccionado = function(contactos){
    contactos.some(function(contactos){
          return contactos.seleccionado;
    });
  };
  $scope.buscarPor = function (dato){
    $scope.datoFiltrado= dato; 
    $scope.direccionOrden = !$scope.direccionOrden;
  }
})
.controller("ListaMusicaCtrl",function($http, $scope){
    $http.get("https://randomuser.me/api/").success(function(dato, status){
       $scope.datos = dato;
        console.log (dato);
    });
});
