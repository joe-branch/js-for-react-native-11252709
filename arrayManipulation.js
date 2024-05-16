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
