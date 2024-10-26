import React from 'react'

interface numprops{
    number:number
}
const Number:React.FC<numprops> = ({number}) => {
  return (
    <div className="h-12 text-2xl mb-4 w-12 flex justify-center items-center bg-primary rounded-full text-white">
    <div className="">{number}</div>
  </div>    
  )
}

export default Number