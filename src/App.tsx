import { useEffect } from "react"
import { MultiplicationTable } from "./Problems/MultiplicationTable"
import { PrintEvenNumber, sumNumbersInTheArray, sumNumbersAcrossArray, reverseArray, reverseString, SortArrayAsc, CalcAverage, FactorialCalc, isPalindrome, FindLongestWord, CountVowel, RemoveNegativeNums, RemoveSpaces, FindMaxNum, CapitalizeFirst, GenerateFabonacci, IsPrime, RemoveDuplicates, MergeSortedArray } from "./Problems/functions"

function App() {
  const arrayOne = [0, 10, 4, 5, 14, 53, -3, -0.6]
  const arrayTwo = [[0, 1], [3, 4], [5, 4]]
  const arrayThree = ["a", 'b','c', "d", "ddd", "ddd"]
  const arrayFour = [1, 2, 3, 4, 5, 6, 2, 3, 4, 7, 7]
  const stringOne = "ade goes to school"
  const stringTwo = "Hello world"
  useEffect(() => {
    // PrintEvenNumber(56)
    // console.log(sumNumbersInTheArray(arrayOne))
    // console.log(sumNumbersAcrossArray(arrayTwo, 1))
    // console.log(reverseArray(arrayThree))
    // console.log(reverseString(stringOne))
    // console.log(CalcAverage(arrayOne))
    // console.log(SortArrayAsc(arrayOne))
    // console.log(FactorialCalc(7))
    // console.log(isPalindrome('racecar'))
    // console.log(FindLongestWord('This is a website development course'))
    // console.log(CountVowel(stringOne))
    // console.log(RemoveNegativeNums(arrayOne))
    // console.log(RemoveSpaces(stringOne))
    // console.log(FindMaxNum(arrayOne))
    // console.log(CapitalizeFirst(stringTwo))
    // console.log(GenerateFabonacci(10))
    // console.log(IsPrime(117))
    // console.log(RemoveDuplicates(arrayFour))
    console.log(MergeSortedArray(arrayOne, arrayFour))

  }, [])
  


  return(
    <main className="flex flex-col gap-9 px-9 bg-zinc-900 min-h-screen">
      <h1 className="text-gray-100 text-4xl">Problem Solving With Typescript</h1>

      {/* this returns a multiplication table */}
      <MultiplicationTable horizontalLimit={20} verticalLimit={12}/>



    </main>
  )
}

export default App
