import { useState, createRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
// import { useSnackbar } from 'notistack';
// material
import { Input } from '../../index';
// import InputBase from '@mui/material/InputBase';
// components
// hooks

// ----------------------------------------------------------------------

// https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 const DocUploader = forwardRef((props, ref) => {
  const { filesTypes } = props;
  // [
  //   'application/msword', // .doc
  //   'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  //   'image/jpeg', // .jpeg .jpg
  //   'image/png', // .png
  //   'application/pdf' // .pdf
  //   // 'application/vnd.ms-powerpoint', // .ppt
  //   // 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
  //   // 'application/vnd.ms-excel', // .xls
  //   // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // .xlsx
  // ];
  const fileInputRef = createRef(ref);
  const [selectedFiles, setSelectedFiles] = useState([]);

  if (!props.label) return null;
  const onFileChange = (event) => {
    if (event) {
      setSelectedFiles(Array.from(event.target.files));
      props.onChangeFiles(Array.from(event.target.files));
    }
  };

  const styleInput = {
    'input[type="file"]': {
      display: 'none'
    }
  };

  return (
    <>
      <Box sx={styleInput}>
        <Input
          fullWidth
          autoComplete="off"
		      name="DocUploader"
          value={selectedFiles ? selectedFiles.map((el) => el.name) : ''}
          color="primary"
          size="large"
          variant="filled"
          label={props.label}
          onClick={() => {
            fileInputRef.current.click();
          }}
          error={props.error}
          helperText={props.message}
        />

        <input
          type="file"
          name="input-file-upload"
          accept={filesTypes.join()}
          multiple={props.multiple}
          files={selectedFiles}
          ref={fileInputRef}
          onChange={onFileChange}
        />
      </Box>
    </>
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

export default DocUploader
