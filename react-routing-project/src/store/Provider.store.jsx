import React from 'react'
import ApiContextProvider from './ApiContextProvider'

const ProviderStore = ({children}) => {
  return (
    <ApiContextProvider>{children}</ApiContextProvider>
  )
}

export default ProviderStore