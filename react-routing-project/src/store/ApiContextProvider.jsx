import React, { createContext } from 'react'
import useFetch from '../hook/useFetch';
import { getBookData } from '../service/bookUrl.service';

export const apiContext=createContext({data:null,error:null,loading:false})
const ApiContextProvider = ({children}) => {
  const { loading, error, data } = useFetch(getBookData, "books");
  return (
    <apiContext.Provider value={{loading,error,data}}>{children}</apiContext.Provider>
  )
}

export default ApiContextProvider