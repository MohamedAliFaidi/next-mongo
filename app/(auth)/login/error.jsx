"use client"
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