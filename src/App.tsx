import React from 'react';
import './App.css';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

function App() {
  const docs = [
    { uri: require('./s01-redux-overview.pdf') }, // Local File
    { uri: require('./dailymeeting.txt') }, // Local File
    { uri: require('./tesst.docx') }, // Local File
    { uri: require('./adasdas.pptx') }, // Local File
  ];
  return (
    <DocViewer
      documents={docs}
      pluginRenderers={DocViewerRenderers}
    ></DocViewer>
  );
}

export default App;
