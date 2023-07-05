import {useState} from 'react'
import axios from 'axios'
import LeftSidebar from "../src/components/LeftSidebar/LeftSidebar";
import CGLogo from './assets/chatGPT.png'
import AppLogo from './assets/app-logo.png'
import './Chatbot.css';
import RightSidebar from "../src/components/RightSidebar/RightSidebar"
function Chatbot() {
 
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://stack-overflow-qfdp.onrender.com/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    
  };


  
  return (
    <div className="home-container-1">
      <LeftSidebar/>
      <div className='kio'>
     
    <div className="wrapper">
    <img src={AppLogo} alt="" className="app-logo" />	
    <form  onSubmit={handleSubmit} >
      <img src={CGLogo} alt="" className={loading ? 'cg-logo loading' : 'cg-logo'} />
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask anything... :)"
      />
      <button type="submit">Ask</button>
    </form>
    <p className="response-area">
    {loading ? 'loading...' : response}
      {/* Here will be my response  */}
    </p>
    <div className="footer">~ Copyrights ~ Prashant ~</div>
</div>

</div>


<div className='nio'>
<RightSidebar/>
</div>
</div>
  );
}

export default Chatbot ;


