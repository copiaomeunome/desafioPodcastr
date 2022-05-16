import '../styles/currentPlaying.scss';
import logoImg from '../assets/images/playing.svg';
import pauseImg from '../assets/images/pause.svg';
import shuffleImg from '../assets/images/shuffle.svg';
import playImg from '../assets/images/play.svg';
import repeatImg from '../assets/images/repeat.svg';
import nextImg from '../assets/images/play-next.svg';
import previousImg from '../assets/images/play-previous.svg';
import {useState,useContext} from 'react';
import {TrackContext} from '../App';
type EpisodesProps ={
    ChangeCurrentPlaying:Function;
    value1:string;
    value2:string;
    func1:Function;
    func2:Function;
};
type podcastType={
    episodes:[{
        id:string;     
        title: string;
        members:string;
        published_at: string;
        thumbnail:string;
        description :string;
        selected:string,
        file: {
            url:string,
            type:string,
            duration:string
        }
    }]
}
const server:podcastType= require('../server.json');
export function CurrentPlaying(props:EpisodesProps){
    const {EpisodeId} = useContext(TrackContext);
    const [whatButton, setWhatButton]=useState('playButton');
    const [imageButton, setImageButton]=useState(playImg);
    
    function SwitchImageAndPlay(){
        if(imageButton === playImg){ 
            setImageButton(pauseImg);
            setWhatButton('pauseButton');
        } else{
            setImageButton(playImg);
            setWhatButton('playButton');
        }
    }
    
    function PreviousFunction(){
        if(EpisodeId!==0){
            props.ChangeCurrentPlaying(EpisodeId-1,props);
        }
    }
    function NextFunction(){
        if(EpisodeId!==server.episodes.length-1){
            props.ChangeCurrentPlaying(EpisodeId+1,props);
        }
    }
    function ShuffleFunction(){
        
    }
    function RepeatFunction(){
        
    }
    let playButton=document.querySelector('#playButton');
    playButton?.addEventListener('click',SwitchImageAndPlay);

    let shuffleButton = document.querySelector('#shuffleButton');
    shuffleButton?.addEventListener('click',ShuffleFunction);

    let previousButton = document.querySelector('#previousButton');
    previousButton?.addEventListener('click',PreviousFunction);

    let nextButton = document.querySelector('#nextButton');
    nextButton?.addEventListener('click',NextFunction);

    let repeatButton = document.querySelector('#repeatButton');
    repeatButton?.addEventListener('click',RepeatFunction);

    return(
        <div id="currentPlaying">
            
            <h2><img src={logoImg} alt="" /> Tocando agora</h2>

            <div className={props.value1}>
                <h2>Selecione um podcast para ouvir</h2>
            </div>
            
            <div className={props.value2}>
                <img src={server.episodes[EpisodeId].thumbnail} alt="" />
                <h2>{server.episodes[EpisodeId].title}</h2>
                
                <p>{server.episodes[EpisodeId].members}</p>
                <audio id='audio' controls>
                    <source src={server.episodes[EpisodeId].file.url}/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            

            <div id='buttons'>
                <button id='shuffleButton' disabled><img src={shuffleImg} alt="" /></button>
                <button id='previousButton' disabled><img src={previousImg} alt="" /></button>
                <button id='playButton' className={whatButton} disabled><img src={imageButton} alt=''/></button>
                <button id='nextButton' disabled><img src={nextImg} alt="" /></button>
                <button id='repeatButton' disabled><img src={repeatImg} alt="" /></button>
            </div>
            
        </div>
    )
}