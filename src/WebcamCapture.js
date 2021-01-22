import React , {useRef, useCallback,useState} from 'react'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import {useDispatch} from "react-redux";
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';
import "./WebcamCapture.css"

const videoConstraints = {

    width:250,
    height:400,
    facingMode: "user"
};

function WebcamCapture() {

    const webcamRef = useRef(null);
    const dispatch = useDispatch()
    const history = useHistory();
 

    const capture = useCallback( 
        () => {
        const imgScr = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imgScr));
        history.push('/preview');
        },
        [webcamRef],
    )

    return (
        <div className="webcam-capture">

        <Webcam 
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}

        />

        <RadioButtonUncheckedIcon 
        className="webcam-capture__button"
        onClick={capture}
        fontSize="large"

        />

      

            
        </div>
    )
}

export default WebcamCapture
