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

// interface First extends Second {
//   profession: string;
// }

// type X = {
//   a: string;
// };

// interface person extends X {
//   name: string;
// }
import React from "react";

const Test = () => {
  return <div>Test</div>;
};

export default Test;
