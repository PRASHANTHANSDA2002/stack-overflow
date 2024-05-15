import React from 'react'
import freeplan from '../../assets/freeplan.png'
import silverplan from '../../assets/silverplan.png'
import goldplan from '../../assets/goldplan.png'
import '../Plans/Plans.css'
import {Link} from "react-router-dom"


const Plans = () => {
  return (
    <div className='out'>
        <div className='texty'> "Dive into Seamless Coding Experience with our Subscription Plans"</div>
        <div className='cardcont'>
        <div className='plans'> <img src={freeplan} alt="freeplan" className='up' style={{width:"80%"}} />
       <Link to ="/AskQuestion"><button className='button' >Continue Free</button></Link> </div>
        <div className='plans' > <img src={silverplan} className='up' alt="silverplan" style={{width:"80%"}}/>
        <a className='opo' ><button className='myButton'>Buy Now</button></a></div>
        <div  className='plans' > <img src={goldplan} alt="goldplan" className='up' style={{width:"80%"}} /><a><button className='myButton'>Buy Now</button></a></div>
        </div>     
    </div>
  )
}

export default Plans
