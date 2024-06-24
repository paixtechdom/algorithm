import { FC } from "react"

interface tableInterface {
    verticalLimit: number,
    horizontalLimit: number
}

export const MultiplicationTable:FC<tableInterface> = ({verticalLimit, horizontalLimit}) => {
    const data: number[][] = []
    for (let i = 1; i < horizontalLimit + 1; i++) {
        const values: number[] = []
        for (let j = 1; j < verticalLimit + 1; j++) {
            values[j] = j * i
        }
        data[i] = values
    }
    

    return(
        <section className="flex flex-col gap-3">
            <h2>Multiplication Table 1 - {horizontalLimit}</h2>

            <div className="flex" style={{
                display: "flex",
                gap: 30+"px"
            }}>
                {
                    data.map((d: number[], i:number) => (
                        <div key={i} className="flex">
                            {
                                d.map((n, j) => (
                                    <p key={j}>{n}</p>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
 
        </section>  
    )
}
