import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleOnClick = () => {
        console.log('click function called!!');
    }

    const handleOnChange = (event) => {
        console.log(event.target.value);
        setText(event.target.value);
    }

    const handleUpClick = (event) => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    return (
        <>
            <div>
                <form>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id='myBox'
                            placeholder='enter the text' />
                    </div>
                    <button className="btn btn-primary" onClick={handleOnClick} >Submit</button>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick} >Upper</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowerClick} >Lower</button>

                </form>
            </div>
            <div className='container mt-3'>
                <h1>Values</h1>
                <h3>{text.split(" ").length} Words and {text.length} Charctors</h3>
            </div>
        </>
    );
}
