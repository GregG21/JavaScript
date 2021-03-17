// const http = new EasyHTTP;

// //GET USERES

// // http.get('https://jsonplaceholder.typicode.com/users')
// // .then(data => console.log(data))
// // .catch(error => console.log(error));

// // USER DATA 
// const data ={
//     name: "Gregor",
//     username: "GregorGabric",
//     email: "gbababa@gmail.com"
// }


// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(error => console.log(error));

const map1 = new Map();

const key1 = 'some string',
        key2 = {},
        key3 = function(){};

map1.set(key1, 'First Value')
map1.set(key2, 'Second Value')
map1.set(key3, 'Third Value')

// for(let [key, value] of map1 ){
//     console.log(key + " " + value)
// };

map1.forEach((key,value) => console.log(key, value))