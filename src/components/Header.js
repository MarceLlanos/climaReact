import React from 'react'
import { tsPropertySignature } from '@babel/types'
const Header = (props) =>{
  return(
    <div>
      <nav>
        <div className = "nav-wrapper light-blue darken-2">
          <a className = "brand-logo">{props.title}</a>
        </div>
      </nav>
    </div>
  )
}

export default Header;