import React,{useState} from 'react'

export default function TextForm(props) {
    // const[btnText,SetbtnText]=useState("Enable Dark Mode")
    const [text , setText] = useState('');
    const hadleUpCase=()=>{
        // console.log("button clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const hadleDCase=()=>{
        // console.log("button clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const hadleClCase=()=>{
        // console.log("button clicked"+text);
        
        setText('')
    }
    const hadleCopy=(event)=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const hadleOnChange=(event)=>{
        
        setText(event.target.value)
    }
    const hadleExtraSpaces=(event)=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
       
    }
    // const[Style,SetMystyle]=useState({
    //    color:'#042743',
    //    backgroundColor:'white' 
    // })
    // const darkMode=()=>{
    //     if(Style.color==='black'){
    //         SetMystyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         SetbtnText("Enable light mode")
    //     }
    //     else{
    //         SetMystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         SetbtnText("Enable Dark mode")

    //     }

    

   
        return (
            <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3 >{props.heading}</h3>
             <div className="mb-3">
                
                <textarea className="form-control"onChange={hadleOnChange} value={text} id="myBox"style={{backgroundColor: props.mode==='dark'?'#87AFC7':'white', color: props.mode==='dark'?'white':'#042743' }}  rows="8"></textarea>
             </div>
                 <button className="btn btn-primary mx-2" onClick={hadleUpCase}>Convert To Upper Case</button>
                 <button className="btn btn-primary mx-2" onClick={hadleDCase}>Convert To lowwer Case</button>
                 <button className="btn btn-primary mx-2" onClick={hadleExtraSpaces}>Remove Extra Spaces</button>
                 <button className="btn btn-primary mx-2" onClick={hadleClCase}>Clear Text</button>
                 <button className="btn btn-primary mx-2" onClick={hadleCopy}>Copy Text</button>
                 <button className="btn btn-primary mx-2" onClick={hadleUpCase}>Convert To Upper Case</button> <button className="btn btn-primary mx-2" onClick={hadleUpCase}>Convert To Upper Case</button> <button className="btn btn-primary mx-2" onClick={hadleUpCase}>Convert To Upper Case</button> <button className="btn btn-primary mx-2" onClick={hadleUpCase}>Convert To Upper Case</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p> Avarage time to read the Text {0.008 * text.split(" ").length} Minutes</p>
                <p>Number of sentence in the Text {text.split(".").length} </p>
                {/* <p>Number of words in the sentence {text.split().length} </p> */}
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Text To Preview"}</p>
            </div>
            
            </>
  )
}
TextForm.defaultProps={
    heading:'Enter Text'
}
