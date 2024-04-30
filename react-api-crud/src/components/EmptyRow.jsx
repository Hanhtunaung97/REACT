import React, { useContext } from 'react'
import { dataContext } from '../contexts/DataContext'

const EmptyRow = () => {
    const {toggleCreateDrawer}=useContext(dataContext);
  return (
    <tr className=" odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          colSpan={5}
          className=" text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white record-id"
        >
          There is no courses    <button className='text-blue-500 border border-blue-100 hover:bg-blue-200 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-200 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={toggleCreateDrawer}>Create New One</button>
        </th>
       
      </tr>
  )
}

export default EmptyRow