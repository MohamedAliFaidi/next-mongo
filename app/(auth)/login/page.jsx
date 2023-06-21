"use client"
"use client"
import  { useEffect } from "react"

 function Page() {
  useEffect(() => { 
  fetch(`http://localhost:3000/api/login`).then(async(res) => {
      console.log(res)
  }).catch((err) => {
    console.log(err); 
  })
  }, [])

  return (
    <div><button
    onClick={() => {
      
    }}
    ></button></div>
  )
}

export default Page