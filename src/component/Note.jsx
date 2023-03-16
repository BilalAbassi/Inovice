import React from 'react'
import '../App.css'
import {useState } from 'react'

const Note = () => {
  const [data,getdata]=useState("")
  return (
    <div className='insta'>
        <h1>Terms and Conditions</h1>

<p>
 (1) 50% amount will be paid by the Client to mark their Slot as Booked<br/>
(2)  25% of the total amount is to be paid at the time of event coverage<br/>
(3)  The remaining 25% amount is to be paid at the time of final delivery of the package<br/>
(4)  events outside of Islamabad will be Charged extra according to the distance travel on a resonable basis and food + accommodation will be the responsibility of the client.


</p>

    </div>
  )
}

export default Note