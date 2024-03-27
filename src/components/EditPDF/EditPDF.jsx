import "./EditPDF.css";
import { useContext, useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";
import PDFContext from "../../context/PDFContext";
import { Link } from "react-router-dom";

const EditPDF = () => {
  const viewer = useRef(null);
  const { fileURL } = useContext(PDFContext);

  useEffect(() => {
    if (fileURL === null) return;
    WebViewer(
      {
        path: "lib",
        licenseKey: process.env.LICENSE_DEMO_KEY,
      },
      viewer.current
    ).then((instance) => {
      instance.UI.loadDocument(fileURL, { filename: fileURL.name });
      instance.UI.setZoomLevel("100%");
      instance.UI.disableElements(["toolbarGroup-Edit"]);
      instance.UI.disableElements(["toolbarGroup-Insert"]);
      instance.UI.disableElements(["toolbarGroup-Forms"]);
      instance.UI.disableElements(["toolbarGroup-FillAndSign"]);
    });
  }, [fileURL]);

  return (
    <div className="edit-pdf-container">
      {
        fileURL == null?
        <div className="not-found-pdf">
          <h3>Please insert PDF file to edit</h3>
          <Link className='edit-link' to="/">Go Back</Link>
        </div>
        :
        <div id="viewer" ref={viewer} />
    }
    </div>
  );
};

export default EditPDF;
