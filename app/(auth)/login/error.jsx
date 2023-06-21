"use client"

// every folder inside app is a page 
// every page folder can include a layout component , error component  a page component,and loading component
s

function Error({
    error,
    reset
}) {
  return (
    <div>error
 <button onClick={reset}>reset</button>

    </div>
  )
}

export default Error