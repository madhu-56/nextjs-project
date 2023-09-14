"use client"

function ModelDetails({params}) {
    console.log("Model is ",params)
  return (
    <div>
      <h1>This is Model Number :{params.modelNum}</h1>
      
    </div>
  )
}

export default ModelDetails
