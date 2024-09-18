import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Welcome To This Page");


function handleClick(){
  console.log("Button was clicked");
  setText("You have clicked on Convert to Uppercase");
  setText(text.toUpperCase());
}
function handleClick2(){
  console.log("Button was clicked");
  setText(text.toLowerCase());
}
function handleClick3(){
  setText("");
}
function handleClick4(){
  let ch=document.querySelector("#myId");
  ch.select();
  navigator.clipboard.writeText(ch.value); 
}


function onHandleClick(event){
  console.log("On Change");
  setText(event.target.value);  // Update the state with the new text

}
  return (
    <>
 
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control" id="myId" rows="6" value={text} onChange={onHandleClick}></textarea>
  <br />
  <button className="btn btn-primary mx-1" onClick={handleClick}> Convert To UpperCase </button>
  <button className="btn btn-primary mx-1" onClick={handleClick2}> Convert To LowerCase </button>
  <button className="btn btn-primary mx-1" onClick={handleClick3}> Clear Text </button>
  <button className="btn btn-primary mx-1" onClick={handleClick4}> Copy Text </button>



</div>
<div className='container my-3'>
  <h1> Your Text Summary</h1>
  <p> {text.split(" ").length} words , {text.length} characters</p>
  <p> {0.008 * text.split(" ").length} Minutes Reading Time </p>
  <h2> Preview </h2>
  <p> {text} 
    
     </p>
</div>
    </>
  )
}
