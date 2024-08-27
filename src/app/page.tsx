'use client';

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        // let Id = document.getElementById('demo')
        // console.log(Id)
        let Class1 = document.getElementsByClassName('demo1')[0]
        let Class2 = document.getElementsByClassName('demo1')[1]
        console.log(Class1)
        console.log(Class2)
      
    }, [])
    
  return (
    <>
      <h2 id='demo' className=" p-5 font-serif text-2xl demo1">This is Home Page1</h2>
      <h2 id='demo' className=" p-5 font-serif text-2xl demo1">This is Home Page2</h2>
    </>
  );
}
