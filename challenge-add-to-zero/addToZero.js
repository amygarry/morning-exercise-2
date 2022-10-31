// Starting array
let array = [28, 43, -12, 30, 4, 0, 13]
let whatever= false
for(let i=0; i<array.length; i++){
    for (let j=0; j<array.length; j++){
        if(array[i]+array[j] === 0 && i !== j){
       console.log(i,j)
        whatever=true}
    }
}
console.log(whatever)
// Write your solution below: