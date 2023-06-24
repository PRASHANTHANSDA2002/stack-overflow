import React from 'react'
import freeplan from '../../assets/freeplan.png'
import silverplan from '../../assets/silverplan.png'
import goldplan from '../../assets/goldplan.png'
import '../Plans/Plans.css'
const Plans = () => {
  return (
    <div className='out'>
        <div className='texty'> "Dive into Seamless Coding Experience with our Subscription Plans"</div>
        <div className='cardcont'>
        <div className='plans'> <img src={freeplan} alt="freeplan" style={{width:"80%"}} />
       <a href="./AskQuestion"><button className='button' >Continue Free</button></a> </div>
        <div className='plans' > <img src={silverplan} alt="silverplan" style={{width:"80%"}}/>
        <a href="https://buy.stripe.com/test_8wMeWFc43deyg8MbIK"><button className='myButton'>Buy Now</button></a></div>
        <div  className='plans' > <img src={goldplan} alt="goldplan"style={{width:"80%"}} /><a href="https://buy.stripe.com/test_28o5m51pp7Ue09O001"><button className='myButton'>Buy Now</button></a></div>
        </div>     
    </div>
  )
}

export default Plans
