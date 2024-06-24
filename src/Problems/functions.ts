// . *********Function to print even numbers from 0 to the given number********

export const PrintEvenNumber = (n: number) : void => {
    for(let i = 0; i < n; i ++){
      if(i%2 == 0){
        console.log(i) 

      }
    }
}

// returns the sum of numbers in an array
export const sumNumbersInTheArray = (n: number[]): number => {
  let sum = 0        
  for (let i = 0; i < n.length; i++) {
      sum += n[i]
  }
  return sum
} 


// returns the sum of numbers in the {index} position in an array of numbers
export const sumNumbersAcrossArray= (n: number[][], index: number): number => {
  let sum = 0
      for (let i = 0; i < n.length; i++) {
          sum += n[i][index]             
      }

  return sum;
}



// let the one with index 0 become the last index and the one with index last becomd first, let the one with second index become last index -1 the one with last index -1 becomes first index +1
export const reverseArray = (n : any[]) => { 
  // using in built functions
  
  // return n.reverse()



  // using my method
  // const reversedArray : any= []
  
  // for (let i = 0; i < n.length; i++) {
    //   reversedArray[i] = n[n.length -i -1]
  // }
  // return reversedArray


  // using array destructuring and while loop

  let left = 0
  let right = n.length - 1

  while(left <  right){
    [n[left], n[right]] = [n[right], n[left]]
    // the value of the first n becomes the last n, looping throught each
    left++
    right--
  }

  return n
}



/* 
  1. convert to array
  2. reverse array
  3. convert to string
*/
export const reverseString = (n: string) => {
  // using built in functions
  // return n.split('').reverse().join(``)




  // using loops
    let arrayFromString = []
    let reversedString = ""

    // convert string to array
  for (let i = 0; i < n.length; i++) {
        arrayFromString[i] = n[i]
  }

    // reverse array
    let right = arrayFromString.length - 1
    let left = 0
    while(left < right){
      [arrayFromString[left], arrayFromString[right]] = [arrayFromString[right], arrayFromString[left]]

      left++
      right--
    }


  // convert to string
  for (let i = 0; i < arrayFromString.length; i++) {
    reversedString += arrayFromString[i]
  }
  return reversedString
}


/* 
  1. loop through
  2. if the first is greater than the next set that as the first if not as last
*/
export const SortArrayAsc= (n: any) => {
  // using built in function
  // return n.sort()


  // bubble sort
  let no = n.length
  let sawpped;

  do{
    sawpped = false 
    for(let i = 1; i < no; i++){
      if(n[i - 1] >  n[i]){
        [n[i-1], n[i]] = [n[i], n[i-1]]
        sawpped = true
      }
    }
    no--
  }  while(sawpped)
    
    return n
}