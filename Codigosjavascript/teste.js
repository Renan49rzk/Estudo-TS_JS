var sum = function(a, b) {
    return a + b;
};

console.log(sum(2, 3));

// Arrow function

//*> em toda arrow function, voce deve usar esses caracteres "=>"

var sum = (a, b) => a + b 

console.log(sum(5, 15));
//em arrow function, nao eh necessario usar a palavra "function"
//se tiver apenas um argumento, nao eh necessario usar parenteses
//se tiver mais de um argumento, eh necessario usar parenteses