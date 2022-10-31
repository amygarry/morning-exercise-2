// Write your code below this line.


function luckyNums(n){
    let arr1=[]
    while (arr1.length < n ){
        let rndNum = Math.floor(Math.random()*10)+1
        if (!arr1.includes(rndNum)){
            arr1.push(rndNum)
        }
    }
    return arr1
}
console.log(luckyNums(5))