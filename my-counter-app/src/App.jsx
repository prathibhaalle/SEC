

// export default app
// import { useState } from 'react'
// import './App.css'
// function App() {
//     const [count, setCount] = useState(0)   
//     return (  
//         <div className="App">
//             <h2> my Counter: {count}</h2>  
//             <button onClick={() => setCount(count + 1)}>increase</button>
//             <button onClick={() => setCount(count - 1)}>decrease</button>
//             <button onClick={() => setCount(0)}>Reset</button> 
//         </div>
//     )
// }
// export default App


//     // App.jsx
// import { useState } from "react";

// export default function App() {
//   const [input, setInput] = useState("");

//   const handleClick = (value) => {
//     setInput(input + value);
//   };

//   const clearInput = () => {
//     setInput("");
//   };

//   const calculate = () => {
//     try {
//       // Use eval carefully (only for demo purposes)
//       setInput(eval(input).toString());
//     } catch {
//       setInput("Error");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Simple Calculator</h2>
//       <div
//         style={{
//           margin: "auto",
//           width: "200px",
//           padding: "10px",
//           border: "1px solid #ccc",
//           borderRadius: "10px",
//         }}
//       >
//         <input
//           type="text"
//           value={input}
//           readOnly
//           style={{
//             width: "100%",
//             height: "40px",
//             fontSize: "18px",
//             textAlign: "right",
//             marginBottom: "10px",
//           }}
//         />
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>
//           {[7, 8, 9, "+"].map((val) => (
//             <button key={val} onClick={() => handleClick(val)}>{val}</button>
//           ))}
//           {[4, 5, 6, "-"].map((val) => (
//             <button key={val} onClick={() => handleClick(val)}>{val}</button>
//           ))}
//           {[1, 2, 3, "*"].map((val) => (
//             <button key={val} onClick={() => handleClick(val)}>{val}</button>
//           ))}
//           {[0, ".", "/", "="].map((val) =>
//             val === "=" ? (
//               <button key={val} onClick={calculate}>=</button>
//             ) : (
//               <button key={val} onClick={() => handleClick(val)}>{val}</button>
//             )
//           )}
//         </div>
//         <button
//           onClick={clearInput}
//           style={{ marginTop: "10px", width: "100%", background: "#f44336", color: "white" }}
//         >
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2 style={{ color: count > 5 ? "blue" : "pink" }}>
        My Counter: {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
