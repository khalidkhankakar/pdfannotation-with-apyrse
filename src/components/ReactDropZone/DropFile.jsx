import './DropFile.css'
import React, { useContext, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import PDFContext from '../../context/PDFContext';

export default function DropFile(props) {
  const {fileURL, setFileURL} = useContext(PDFContext)

  
  const onDrop = acceptedFiles => {
    // Check if only one file is dropped and it's a PDF
    if (acceptedFiles.length === 1 && acceptedFiles[0].type === 'application/pdf') {
      setFileURL(acceptedFiles[0]);
    } else {
      if (acceptedFiles.length !== 1) {
        alert('Please drop only one file.');
      } else {
        alert('Please drop only PDF files.');
      }
    }
  };


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

console.log(fileURL);
  return (
<div className="drop-container" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        fileURL ==null ?
          <div className='no-file'>
            <img src='/assests/pdflogo.png' className='img' alt='pdflogo' />
            <p className='pdf-para'>Drop only one PDF file</p>
            </div>
           :
           <div className='no-file'>
           <img src='/assests/pdflogo.png' className='img' alt='pdflogo' />
           <p className='pdf-para'>{fileURL.name}</p>
           </div>
      }

      <button className='btn'>{fileURL == null ? "Drop" : "Replace"}</button>
    </div>
  );
}