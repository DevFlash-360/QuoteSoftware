import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import StepViewer from '../../../components/StepViewer'
import { AttachFile, ChevronRight } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Upload = () => {
  const navigate = useNavigate();

  const readFileAsArrayBuffer = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const [file, setFile] = useState();
  const onDrop = async (acceptedFiles) => {
    console.log(acceptedFiles)
    const arrayBuffer = await readFileAsArrayBuffer(acceptedFiles[0])
    setFile(new Uint8Array(arrayBuffer))
  }

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    maxFiles: 1,
    multiple: false,
    noClick: true,
    onDrop
  })
  return <Box className="w-[90%] flex justify-center m-auto">
    {
      file ?
        <Box className="flex md:flex-row flex-col md:items-start items-center justify-center gap-8 mt-[15vh] w-[100%]">
          <Box className='bg-sky-300 w-[100%] md:w-[80%] rounded-3xl h-[60vh]'>
            <StepViewer file={file} />
          </Box>
          <Box className="flex flex-col gap-7 md:items-baseline items-center">
            <Typography variant='h3'>Visualization 3D Model</Typography>
            <Typography variant='h5'>Enter all the information</Typography>
            <Box className="rounded-3xl bg-[rgba(255,255,255,0.06)] p-5">
              <Typography variant='h4'>Upload Technical Drawing</Typography>
              <Typography className='font-bold'>Do you want to upload the technical drawing?</Typography>

              <Typography className='line-clamp-3'>*If you do not upload a technical drawing, your quote request may not be processed by the supplier</Typography>
              <Button variant='outlined'>Upload PDF <AttachFile /></Button>
            </Box>
            <Typography>Proceed by entering the data in detail with all the specifications relating to the estimate</Typography>
            <Button variant='contained' color='success' onClick={() => navigate('/create-job/settings')}>Proceed <ChevronRight /> </Button>
          </Box>
        </Box>
        :
        <Box
          {...getRootProps({ className: 'dropzone' })}
          className={`border-dashed border-2 border-[#ABFF9E] rounded-3xl mt-[20vh] w-[60%] h-[40vh] flex justify-center items-center flex-col gap-5 ${isDragActive ? 'bg-slate-400' : ''}`}
        >
          <input {...getInputProps()} />
          <Typography variant='h2'>
            Drag and Drop here
          </Typography>
          <Button variant='contained' size='large' onClick={open}>Upload File</Button>
        </Box>
    }
  </Box>
}

export default Upload