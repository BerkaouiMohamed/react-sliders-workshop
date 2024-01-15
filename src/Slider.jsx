import { useState } from "react";

function Slider({images}) {
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
    const styleSlider={
        position:'relative',
        display:"flex",
        width:"280vw",
        height:'60vh',
        borderRadius:'10px',
        background:"red",
        transform:`translateX(${carrent*-70}vw)`,
        transition:'all 0.5s ease'
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
    <div className='-container' style={styleSliderContainer}>

<div className='sliderslider' style={styleSlider}>
    
    <img src={images[0]} alt=''/>
    <img src={images[1]} alt=''/>
    
    <img src={images[2]} alt=''/>
    <img src={images[3]} alt=''/>
    {/* {images.map((img)=>{
        <img  src={img}/>
    })} */}

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

export default Slider
