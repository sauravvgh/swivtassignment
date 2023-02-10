import React from 'react'

const CmpInfo = () => {
    
  return (
    
    <div className = 'Infobar'>
        <div className="img">
            <img src="Gorilla.jpg" alt="Logo" class='logoimg' />
        </div>
        <div className="phoneimg">
            <img src="" alt="phone" class='phoneimg1' />
            <img src="" alt="phone" class='phoneimg2' />
            <h3>+988-00002222</h3>
            </div>
            
            <div className="locationimg">
            <img src="" alt="pinpointer" />
            <h2>Kathmandu, Nepal</h2>
        </div>
        

        <form >
        <input type="text" id="fname" name="fname" className="searchFood"/>
        <br/>
        </form>
        <div className="login">login</div>
      
    </div>
  )
}

export default CmpInfo
