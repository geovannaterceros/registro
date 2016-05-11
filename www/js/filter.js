angular.module('starter.filters', [])
.filter("nombre", function(){
    return function(input){
        var listaNombre = input.split(" ");
        var listaNombreMap= listaNombre.map(function(nombre){
            return nombre.charAt(0).toUpperCase() + nombre.substring(1).toLowerCase();   
        });
        console.log(listaNombreMap);
        return input;
    };
})
.filter('limitS', function(){
    return function(input, size){
        if(size === "undefined") return input
        var cadenaP= input.substring(0, (size || 2)) + "..."; 
        console.log(cadenaP);
        return cadenaP;
    };
});
