import React, { useState } from 'react'
import Model from 'react-modal'
import CloseIcon from '@material-ui/icons/Close';
import './ReactModal.css';
import Styled from 'styled-components'

const Title = Styled.h4`
font-size : 20px;
color : red;
justify-content : center
display : flex;
flex-wrap : wrap;
animation : movement 1s linear infinite;

&:hover{
    color : blue
}
&:after{
    color : green
}
@keyframes movement{
    from{
         transform : rotateZ(0deg);
    }
    to{
        transform : rotateZ(360deg);
    }
}


`

Model.setAppElement('#root')
const REactModel = () => {
    const [openModel, setOpenModel] = useState(false)
    return (
        <div >
            <Title>Hello Everyone</Title>
            <button onClick={() => setOpenModel(true)} type="button" className="btn btn-outline-primary mt-10">Contact US</button>
            <Model isOpen={openModel} closeTimeoutMS={200} onRequestClose={() => setOpenModel(false)} style={{
                overlay: {
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "500px",
                    marginTop: "100px"
                },
                content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'hidden',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }}>
                <CloseIcon className="modal__button" onClick={() => setOpenModel(false)} shouldCloseOnOverlayClick={() => setOpenModel(false)} style={{ display: "flex", justifyContent: "end", alignItems: "top", cursor: "pointer" }} />

                <form style={{ marginLeft: "auto", marginRight: "auto" }} className='modal__form'>
                    <h3 className="mb-3">Contact Us</h3>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ marginLeft: "auto", marginRight: "auto" }} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" style={{ marginLeft: "auto", marginRight: "auto" }} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Model>
        </div>



    )
}

export default REactModel


