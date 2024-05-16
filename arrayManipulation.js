function processArray(arrNum) {
    return(
        arrNum.map(number => {
            if(number % 2 === 0){
                return (number**2)
            }
            else{
                return (number*3)
            }
        })
    )
}

// Task 2
function formatArrayStrings(stringsArray, numbersArray) {
    return (
        stringsArray.map((string, index) => {
            if(numbersArray[index] % 2 === 0){
                return ( string.toUpperCase())
            } 
            else {
                return (string.toLowerCase())
            }
        })
    )
}
