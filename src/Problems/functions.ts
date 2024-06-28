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
export const reverseArray = (n : any[]): any[] => { 
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
  // this returns the first longest word in a senence if there are two of the same length
  let longestWord = "";
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

export const CountVowel = (str:string):number => {
  const vowels = "AaEeIiOoUu"
  let noVowels = 0
  for (let i = 0; i < str.length; i++) {
      // indexOf() returns  -1 if not in the array or string
      if(vowels.indexOf(str[i]) !== -1){
        noVowels += 1
      }     
     
  }

  return noVowels
}

export const RemoveNegativeNums = (num: number[]): number[] => {
  // both not working for 0
  return num.filter(n => n/0 !== -Infinity && n)
  return num.filter(n => n >= 0 && n)
}

export const RemoveSpaces = (str: string):string =>{
  // in-built function
  // return str.split(' ').join('')


  let trimmedString = ""

  for (let i = 0; i < str.length; i++) {
    if(str[i] !== ' '){
      trimmedString += str[i]
    }
  }
  return trimmedString
}

export const FindMaxNum = (arr :number[]):number | number[] => {
  // put max first then sort array asc
  let newArray = []
  let n = arr.length
  let swapped;

  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        swapped = true
      }
      n--
    }


  } while (swapped);
  
  newArray = arr
  newArray.unshift(arr[arr.length-1])
  newArray.pop()

  return newArray
}

/* 
  1. convert the string into array
  2. loop through the array and convert it to array
  3. loop through it and convert the first letter to uppercase
  convert to string
*/

export const CapitalizeFirst = (str: string) :string => {
  let capitalizedString = "" 
  str.split(' ').map(
    s => {s.split('').map(
      (a, i) => capitalizedString += 
          (i == 0 ? a.toUpperCase() : a + (i == s.length-1 ? ' ': ''))
        )


  })

  return capitalizedString
}

export const GenerateFabonacci = (num: number) :number[] => {
  let series:number[] = [0, 1]

  for (let i = 2; i < num; i++) {
      series[i] = series[i-1] + series[i-2]
  }

  return series
}

export const IsPrime = (num: number) :boolean => {
  let divisionOccurence = 0
  for (let i = 1; i < (num < 100 ? 100 : num < 1000 ? 1000 : 10000); i++) {
    if(num%i == 0){
      divisionOccurence += 1
    }
  }

  return divisionOccurence == 2
}

export const RemoveDuplicates = (arr :string[] | number[]) :string[] | number[] =>{
  let n = arr.length
  let checked;
  
  do {
    
  } while (checked);
  
  return arr
}

