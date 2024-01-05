import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;

// -------------------------->  Example  tupple
// ->  let role: [number:string]
// role=[3,"hello"]

// --------------------------->  Example Object
// type Person={
//   name:string,
//   age:number;
// }

// let person:Person={
//   name:"hello",
//   age:3
// }

// --------> Example Union(can be assign both number or string)
// let age: number | string;
// age='string'      // both correct
// age=4

//  Any = unknown ;

// let p: unknown;

//  ------------function void --------------------------
// if the function is return undefiened then using void 
// let printName:(name:string)=> void 

// if the function is return nothing then using never 
// let printName:(name:string)=> never


// -####------->  to extend the values or interface  <-----------




