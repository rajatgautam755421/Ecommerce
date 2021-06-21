import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import './Ckeditor.css'
const Ckeditor = () => {
    const [text, setText] = useState('')
    return (
        <>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6" style={{ marginTop: "70px" }}>
                        <div className="editor">
                            <CKEditor

                                style={{
                                    border: '100px solid red',
                                    height: "200px"
                                }}
                                editor={ClassicEditor}
                                data={text}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setText(data)
                                }}

                            />

                        </div>
                    </div>
                    <div className="col-md-6 mt-70">
                        <div className="mt-16">
                            <h2>Content</h2>
                            <p>{parse(text)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ckeditor
