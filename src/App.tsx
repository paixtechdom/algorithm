import { useEffect } from "react"
import { MultiplicationTable } from "./Problems/MultiplicationTable"
import { PrintEvenNumber, sumNumbersInTheArray, sumNumbersAcrossArray, reverseArray, reverseString, SortArrayAsc, CalcAverage, FactorialCalc, isPalindrome, FindLongestWord, CountVowel, RemoveNegativeNums, RemoveSpaces, FindMaxNum } from "./Problems/functions"

function App() {
  const arrayOne = [0, 10, 40, 55, 53, -3, -0.6]
  const arrayTwo = [[0, 1], [3, 4], [5, 4]]
  const arrayThree = ["a", 'b','c', "d", "ddd", "ddd"]
  const stringOne = "ade goes to school"
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
    console.log(FindMaxNum(arrayOne))
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
