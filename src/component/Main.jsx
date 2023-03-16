
import React,{ useRef,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Logo from '../Images/bg.png'

import '../App.css'
import Note from './Note';



function Main() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
// these states are for number of workers
const [photo,setphoto]=useState(0)
const [video,setvideo]=useState(0)
const [drone,setdrone]=useState(0)
const [album,setalbum]=useState(0)
const [highlights,sethightlight]=useState(0)
const [outdoor,setoutdoor]=useState(0)
const [video_editing,setvideo_editing]=useState(0)
const [photo_editing,setphoto_editing]=useState(0)


// shifts
const [nphoto,nsetphoto]=useState(0)
const [nvideo,nsetvideo]=useState(0)
const [ndrone,nsetdrone]=useState(0)
const [nalbum,nsetalbum]=useState(0)
const [nhighlights,nsethightlight]=useState(0)





// total


 let Total_photo=nphoto*photo

let total_video=nvideo*video
let total_drone=drone*ndrone
let total_albums=album*nalbum
let total_highlights =highlights* nhighlights




  return (
    <div>

<div ref={componentRef} >  <div className='app'>
      <div className='main'>
        <div className='logo'><img src={Logo} alt='logo'></img></div>
        <div><h1><span className='aa'>FAIZAN ALI FILMS</span></h1>
        <p className='number'>+923488279821</p></div>
        <div className='c'>
        Client NAME<input type='text'/>From<input type='date'/>To<input type='date'/></div></div>

            
<div className='Heading'><h1>INVOICE</h1></div>
<div className='con'>
<div><span><h3>Servies</h3></span>
<span><h4>Photographer</h4></span>
<span><h4>Videographer</h4></span>
<span><h4>Drone</h4></span>
<span><h4>Highlights </h4></span>
<span><h4>Albums</h4></span>
<span><h4>PhotoEditing</h4></span>
<span><h4>VideoEditing</h4></span>
<span><h4>OutdoorShoot</h4></span>

</div>

<div><span><h3>Pakages</h3></span>
<span><h4><input type='number' onChange={(event)=>{

let j=event.target.valueAsNumber
let k=isNaN(j)? 0: j
setphoto(k)


}}/></h4></span>
<span><h4><input type='number' onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  
  
  setvideo(k)}}/></h4></span>
<span><h4><input type='number'onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  
  setdrone(k)}}/></h4></span>
<span><h4><input type='number'onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  sethightlight(k)}}/></h4></span>
<span><h4><input type='number'onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  setalbum(k)}}/></h4></span>
<span><h4><input type='number' onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  setphoto_editing(k)}}/></h4></span>
<span><h4><input type='number' onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  setvideo_editing(k)}}/></h4></span>
<span><h4><input type='number' onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  setoutdoor(k)}}/></h4></span></div>

<div><span><h3>Shifts/Albums</h3></span>
<span><h3><input type='number' onChange={(event)=>{  
let j=event.target.valueAsNumber
let k=isNaN(j)? 0: j
  
  nsetphoto(k)}}/></h3></span>
<span><h3><input type='number' onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  nsetvideo(k)}}/></h3></span>
<span><h3><input type='number'onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  nsetdrone(k)}}/></h3></span>
<span><h3><input type='number'onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  nsethightlight(k)}}/></h3></span>
<span><h3><input type='number'onChange={(event)=>{
  let j=event.target.valueAsNumber
  let k=isNaN(j)? 0: j
  nsetalbum(k)}}/></h3></span>
</div>
  <div><span><h2>Amount</h2></span>
  
  <span><h3>{Total_photo}</h3></span>
  <span><h3>{total_video}</h3></span>
<span><h3>{total_drone}</h3></span>
<span><h3>{total_highlights}</h3></span>

<span><h3>{total_albums}</h3></span>
<span><h3>{photo_editing}</h3></span>
<span><h3>{video_editing}</h3></span>
<span><h3>{outdoor}</h3></span>




<div className='total'><h2>TOTAL</h2>
<h4>{Total_photo+total_video+total_drone+total_albums+photo_editing+video_editing+outdoor+total_highlights}</h4></div>
</div>
</div>
<Note/>
</div>


</div>
      <button onClick={handlePrint} className='btn'>Print this out!</button>










    </div>
  )
}

export default Main