export const CalcAverage = (arr: number[]) :number => {
  let average = 0
  for (let i = 0; i < arr.length; i++) {
        average += arr[i]
  }
  return average/arr.length
}




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
export const reverseString = (arr: string) :string => {
  // return arr.split(" ").reverse().join(" ")
  let arrayFromString = []
  let reversedString = ""

  for (let i = 0; i < arr.length; i++) {
    arrayFromString[i] = arr[i]
  }

  let left = 0
  let right = arr.length - 1

  while (left < right){
    [arrayFromString[left], arrayFromString[right]] = [arrayFromString[right], arrayFromString[left]]

    left++
    right--
  }

  for (let i = 0; i < arrayFromString.length; i++) {
        reversedString += arrayFromString[i]
  }

  return reversedString
}



/* 
  1. loop through
  2. if the first is greater than the next set that as the first if not as last
*/

export const SortArrayAsc = (arr :any[]):any[] => {
  // const sortedArray:any[] = []
  let n = arr.length
  let swapped;

  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        swapped = true
      }
      n--
    }

    
  } while (swapped);

  return arr
}


export const FactorialCalc = (num: number):number => {
  let factorial = 1

  for (let i = 0; i < num; i++) {
    factorial += factorial*i
  }

  return factorial
}


export const isPalindrome = (str: string):boolean => {
  // return str.split('').reverse().join("") === str
  return reverseString(str) == str

  // should know if spaces count
}


export const FindLongestWord = (str: string):string | string[] | undefined => {
  let longestWord;
  let arrayFromString = str.split(" ")
  let n = 0;
  // using inbuilt

  
  for (let i = 0; i < arrayFromString.length; i++) {
      if(arrayFromString[i].length > n){
        n = arrayFromString[i].length
        longestWord = arrayFromString[i]
      }
  }

  return longestWord
}