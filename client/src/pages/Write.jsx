import React, { useRef, useState, useEffect } from "react";
import Quill from "quill";
import Editor from "../components/Editor";
const Delta = Quill.import("delta");

const Write = () => {
  const [readOnly, setReadOnly] = useState(false);

  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current; // Quill instance
      quill.on("text-change", () => {
        const html = quill.root.innerHTML;
        console.log(html);
      });
    }
  }, []);

  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Ttile' />
        <div className='editorContainer'>
          <Editor
            className='editor'
            ref={quillRef}
            readOnly={readOnly}
            defaultValue={new Delta()}
          />
        </div>
      </div>

      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input style={{ display: "none" }} type='file' name='' id='file' />
          <label htmlFor='file' className='file'>
            Upload Image
          </label>
          <div className='buttons'>
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'>
            <input type='radio' name='cat' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>

          <div className='cat'>
            <input type='radio' name='cat' value='science' id='science' />
            <label htmlFor='science'>Science</label>
          </div>

          <div className='cat'>
            <input type='radio' name='cat' value='technology' id='technology' />
            <label htmlFor='technology'>Technology</label>
          </div>

          <div className='cat'>
            <input type='radio' name='cat' value='cinema' id='cinema' />
            <label htmlFor='cinema'>Cinema</label>
          </div>

          <div className='cat'>
            <input type='radio' name='cat' value='design' id='design' />
            <label htmlFor='design'>Design</label>
          </div>

          <div className='cat'>
            <input type='radio' name='cat' value='food' id='food' />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
