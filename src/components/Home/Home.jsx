import { Link } from 'react-router-dom';
import { useContext } from "react";
import DropFile from '../ReactDropZone/DropFile';
import PDFContext from '../../context/PDFContext';
import './Home.css'
export default function Home() {
  const {fileURL} =  useContext(PDFContext)
  return (
    <section className="section-container">
      <div className="container">
        <div className="heading">
          <h1>PDF Anno</h1>
          <p>
            Annotate your PDFs with ease using PDF Anno. Add comments, highlight text, and draw shapes to bring attention to important sections.
          </p>
        </div>
        <DropFile />
     {fileURL != null &&  <Link className='edit-link' to="/edit">Edit PDF</Link>}
      </div>
    </section>
  );
}
