import React from 'react';

function Resume() {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/display-resume.pdf`}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Resume PDF"
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href={`${process.env.PUBLIC_URL}/display-resume.pdf`}>Download PDF</a>.
      </iframe>
    </div>
  );
}

export default Resume;
