import React from 'react'

const AlertClock = () => {
 
    function getTime(){
        alert('La hora actual es' + ' ' +  new Date().toLocaleTimeString())
    }
 
    return (
    <div>
        <button onClick={getTime}>AlertClock</button>
    </div>
  )
}


export default AlertClock