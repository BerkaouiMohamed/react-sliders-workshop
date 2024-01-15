import { useState } from "react";
import "./slider.css"

function Sliderback({images}) {
    const firstindex=0;
    const lasindex=images.length-1

    const [carrent,setCarrent]=useState(firstindex)


    const styleSliderContainer={
        position:'relative',
        width:"70vw",
        height:'60vh',
        borderRadius:'10px',
        background:"red",
        overflow:"hidden"
    }
    

    function increase(e) {
        if (carrent ==lasindex){
            setCarrent(0)
        }
        else{
            setCarrent(carrent+1)
        }
        
    }
    console.log(carrent);
    function decrease(e){
        if (carrent ==firstindex){
setCarrent(lasindex)
    }
    else{
        setCarrent(carrent-1)
    }}



  return (
    <>
    <div style={styleSliderContainer}>

<div  style={{transition:'all 0.4s ease',backgroundImage:`url(${images[carrent]})`,width:'inherit',height:'inherit',backgroundSize:'100% 100%'}}>
    

    </div> 
    <div className="arrow" style={{fontSize:"3rem",color:'whitesmoke',position:'absolute' ,left:"50px",top:"50%" ,transform:"translateY(-50%)",cursor:'pointer'}} onClick={decrease} > ↢</div>
     <div className="arrow" style={{fontSize:"3rem",color:'white',position:'absolute',right:"50px" ,top:"50%" ,transform:"translateY(-50%)",cursor:"pointer"}} onClick={increase} > ↣</div>
     
    </div>

    <div style={{display:"flex"}}>
    {images.map((e,index)=>
        <div key={index} style={{fontSize:'5rem' ,cursor:'pointer'}} 
        onClick={()=>setCarrent(index)}>.</div>
     )}
    </div>
     </>
  )
}

export default Sliderback
