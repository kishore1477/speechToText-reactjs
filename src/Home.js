import React, {useEffect} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Home = () => {

    // useEffect(() => {
    //     SpeechRecognition.startListening({ continuous: true });
    //     console.log("Now listening...");
    //     return () => {
    //       SpeechRecognition.stopListening();
    //       console.log("Stopped Listening");
    //     };
    //   }, []);
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }

      const  printData = () =>{
var   Tdata = document.getElementById('totalData').innerHTML
var   data = document.getElementById('data').innerHTML
document.getElementById('totalData').innerHTML = data
window.print()
      }
 
  return (
    <body  id = 'totalData'>
    <div>
    <p>Microphone: {listening ? 'on' : 'off'}</p>
    <button onClick={SpeechRecognition.startListening}>Start</button>
    <button onClick={SpeechRecognition.stopListening}>Stop</button>
    <button onClick={resetTranscript}>Reset</button>
    <button onClick={printData}>Print Text</button>
    {/* <p  >{console.log(transcript)}</p> */}
    <p  id ='data'>{transcript}</p>

  </div>
  </body>
  )
}

export default Home