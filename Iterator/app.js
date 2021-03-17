// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ?
//             { value: names[nextIndex++], done: false} :
//             { done: true }
//         }
//     }
// }


// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator
// const names = nameIterator(namesArr)



// Generator

// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();
// console.log(name.next());

// ID generator

function* createIds() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next.value);