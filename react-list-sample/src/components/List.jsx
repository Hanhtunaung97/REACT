import React from 'react'

const List = ({id,name,rate}) => {
    console.log({id,name,rate});
    const bgClasses=rate <5 ? 'bg-rose-100 border-rose-200':'bg-sky-100'
  return (
    rate >5 && <div className={`${bgClasses} p-2 mb-3 font-semibold border-s-4  border-sky-200 `}>
    { `${name} ${rate} `}
</div>
  )
}

export default List