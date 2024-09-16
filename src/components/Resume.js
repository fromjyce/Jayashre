import React from 'react';
import "../styles/Resume.css";

function Resume() {
  return (
    <div className='main'>
      <iframe
        src={`${process.env.PUBLIC_URL}/resume.pdf`}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Resume PDF"
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>Download PDF</a>.
      </iframe>
    </div>
  );
}

export default Resume;
