import React, { useState, createRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';
import { Input } from '../../index';


// ----------------------------------------------------------------------

// https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 const DocUploader = forwardRef((props, ref) => {
  const { filesTypes, label, multiple, name } = props;

  const fileInputRef = createRef(ref);
  const [selectedFiles, setSelectedFiles] = useState([]);

  if (!label) return null;
  const onFileChange = (event) => {
    if (event) {
      setSelectedFiles(Array.from(event.target.files));
      props.onChangeFiles(Array.from(event.target.files));
    }
  };

  return (
      <Input
        hidden
        type="file"
        name={name}
        accept={filesTypes.join()}
        multiple={multiple}
        files={selectedFiles}
        ref={fileInputRef}
        onChange={onFileChange}
        className={'docUploader-kariu '+ props.className}
      />
  );
});

DocUploader.propTypes = {
  onChangeFiles: PropTypes.func,
  label: PropTypes.string.isRequired,
  filesTypes: PropTypes.array.isRequired,
  message: PropTypes.string,
  multiple: PropTypes.bool,
  error: PropTypes.bool
};
DocUploader.defaultProps = {
  name: 'DocUploader',
  label: 'Label',
	filesTypes: [
    'application/msword', // .doc
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
    'image/jpeg', // .jpeg .jpg
    'image/png', // .png
    'application/pdf', // .pdf
    'application/vnd.ms-powerpoint', // .ppt
    'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
    'application/vnd.ms-excel', // .xls
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // .xlsx
  ]
}

export default DocUploader
