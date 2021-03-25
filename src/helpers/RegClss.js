import React, { Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import { Container } from 'react-bootstrap';
const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'
SearchVoice.propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool,
    startListening: PropTypes.func,
    abortListening: PropTypes.func,
    recognition: PropTypes.object,
};

const options = {
    autoStart: false
}
class SpeechRecognition2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content: props.transcript
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            content: nextProps.transcript
        })
    }

    startListen = () => {
        this.props.startListening()
    }

    stopListen = () => {
        this.props.stopListening()
    }

    render() {
        return (
            <Container>{
                <div className='container'>
                    <button className='button' onClick={this.startListen()}>Start</button>
                    <button className='button' onClick={this.stopListen()}>Stop</button>
                    <div className='content'>{this.state.content}
                    </div>
                </div>
            }</Container>
        );
    }
}

export default SpeechRecognition2