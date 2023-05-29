import React from 'react'
// import './App.css'
// import {SwipeableTemporaryDrawer} from './Drawerinshorts'
import Drawerinshorts from './Drawerinshorts'
const Navbarinshorts = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className="icon">
<Drawerinshorts setcategory={setCategory}></Drawerinshorts>
      </div>
      <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" />
    </div>
  )
}

export default Navbarinshorts
