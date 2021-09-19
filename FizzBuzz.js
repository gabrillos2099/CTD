let FizzBuzz = (numA, numB, p1, p2, p3) => {
    for (let contagem=0; contagem<=100; contagem++){
        if (contagem % numA == 0 && contagem % numB ==0 ){
            console.log (p1)

        }else if (contagem % numA == 0){
            console.log(p2);
        }else if(contagem % numB == 0){
            console.log(p3);
        }else{
            console.log(contagem);
        }
        
    }
    
}
console.log(FizzBuzz(5,10, 'FizzBuzz', 'Fizz','Buzz'));
