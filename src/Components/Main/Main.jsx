import React, { useContext } from 'react';
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';
const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.USER_FACE}  alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hallo, Raj!</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Give some spoilers of Avengers Doomsday!!!</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Best startup ideas with 0 Investment, should give 100cr Profit...!</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>How to Chat with Girlfriend... Without Actually Having One?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Make a Clone of Google Gemini...</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.USER_FACE} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                       <hr />
                       <hr />
                       <hr /> 
                    </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }

                </div>
            </div>
            }
            

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}  placeholder='Ask Gemini' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        :null}
                    </div>
                </div>
                <p className="bottom-info">
                    This Gemini-Clone is the inspiration for Google to make their Own one. And this Gemini is made by Raj so not as reliable as original, unless u r here for some Brainrot. It may display incorrect or misleading information. As Life is Unfair.
                </p>
            </div>
        </div>
      
    </div>
  );
}

export default Main;
