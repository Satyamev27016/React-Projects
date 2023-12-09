import { useState } from "react"



function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className="w-full h-full duration-200"
         style={{backgroundColor: color}}
          >
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate deleniti commodi ipsam modi consequatur fugiat enim suscipit nam culpa corporis maxime repellendus adipisci aliquid ducimus, perspiciatis dolores rerum voluptatum veniam.

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
          <button
             onClick={() => setColor("red")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
             style={{backgroundColor: "red"}}
          > Red </button>
           <button
            onClick={() => setColor("green")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
             style={{backgroundColor: "green"}}
          > green </button>
           <button
             onClick={()=> setColor("blue")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
             style={{backgroundColor: "blue"}}
          > blue</button>
           <button
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
             style={{backgroundColor: "grey"}}
          > Red </button>
           <button
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
             style={{backgroundColor: "black"}}
          > Red </button>
           <button
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
             style={{backgroundColor: ""}}
          > Red </button>
           <button
             className="outline-none px-4 py-1 rounded-full text-white shadow-sm "
             style={{backgroundColor: "red"}}
          > Red </button>
          </div>
        </div>
      </div>
    
    
    
    
  )
}

export default App
