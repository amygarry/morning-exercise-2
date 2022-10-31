// Write your code below

function isPalindrom (word, andrew){
    for(i=0; i<word.length; i++)
    if(word[i]=== word[word.length-1-i]){   
    }
    else {
        andrew(false)
    }
    andrew(true)
}
//split the word inot a array 
//check the array[i] ==  array.length-1
function printingPress (result){
    if (result === true){
        console.log("this is palindrom") 
    }
    else {
        console.log("this is not a palindrom")
    }
}

isPalindrom("racecar", printingPress)
