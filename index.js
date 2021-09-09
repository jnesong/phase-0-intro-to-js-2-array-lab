// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    return cats.pop();
}

function destructivelyRemoveFirstCat(name){
    return cats.shift();
}

function appendCat(name){
    const moreCats = [...cats, name];
    return moreCats;
}

console.log(appendCat("Broom"));

function prependCat(name){
    const fourCats = [name, ...cats];
    return fourCats;
}

console.log(prependCat("Broom"));

function removeLastCat(){
    const newCats = cats.slice(0,2);
    return newCats;
}

console.log(removeLastCat());

function removeFirstCat(){
    const twoCats = cats.slice(1);
    return twoCats;
}

console.log(removeFirstCat());