import React from 'react'
import Header from '../../../Componenets/Header/Header'

function layout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default layout
