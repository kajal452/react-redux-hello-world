import React,{useRef} from 'react'
import '../App.css';
const About = () => {
    //  ,,;
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const submitRef = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const isEnter = e.keyCode === 13 || e.keyCode === 9;
        if(isEnter){
            console.log(e);
            // switch(e.keyCode){
            //     case 13:
    
            // }
        }
        
    }
    return (
        <div className="App">
            <form onSubmit={()=>{console.log('')}}>
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email" ref={emailRef => emailRef.focus()}  onSubmit={()=>{passwordRef.focus()}} value={emailRef.current.value} />
                <label>Password</label>
                <input type="password" placeholder="Enter Your password" ref={passwordRef} value={passwordRef.current.value} />
                <label>Password</label>
                <input type="submit" value="submit" ref={submitRef} />
            </form>
        </div>
    )
}

export default About
