import '../styles/episodes.scss';
import greenPlay from '../assets/images/play-green.svg';
const server:podcastType= require('../server.json');
type podcastType={
    episodes:[{
        id:string;     
        title: string;
        members:string;
        published_at: string;
        thumbnail:string;
        description :string;
        selected:string;
        file: {
            url:string,
            type:string,
            duration:string
        }
    }]
}

type EpisodeProps = {
    episodeId:number;
    selected?:boolean;
    episodesProps:EpisodesProps;
    ChangeCurrentPlaying:Function;
};
type EpisodesProps ={
    ChangeCurrentPlaying:Function;
    value1:string;
    value2:string;
    func1:Function;
    func2:Function;
};
function dateConvert(initialDate:string){
    let monthList =['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
    let dateString = initialDate.slice(8,10)+' '+ monthList[parseInt(initialDate.slice(5,7))-1] +' '+ initialDate.slice(2,4);
    return dateString;
}

function toSecond(duration:string){
    let n;
    n = parseInt(duration);
    let hours = Math.trunc(n/3600);
    let minutes = Math.trunc((n-(hours*3600))/60);
    let seconds = Math.trunc(n-(hours*3600 + minutes*60));
    let chours = hours === 0 ? '' : hours + ':';
    let cminutes = minutes < 10 ? '0' + minutes : minutes;      
    let cseconds = seconds < 10 ? '0' + seconds : seconds;
    return chours + cminutes + ':' + cseconds;
}
function dateNumber(date:string){
    return parseInt(date.slice(8,10))+parseInt(date.slice(5,7))*10+parseInt(date.slice(0,4))*100;
}
let card1Number = 0, card2Number = 0;
export function EpisodeCard(props:EpisodesProps){
    
    let card1={
        episodesProps:props,
        ChangeCurrentPlaying: props.ChangeCurrentPlaying,
        episodeId:0
    } as EpisodeProps, card2={
        episodesProps:props,
        ChangeCurrentPlaying: props.ChangeCurrentPlaying,
        episodeId:0
    } as EpisodeProps;
    
    for(let i=0;i<server.episodes.length;i++){
        if(dateNumber(server.episodes[i].published_at)>card1Number){
            card1.episodeId=i;
            card1Number=dateNumber(server.episodes[i].published_at)
        }
        else if(dateNumber(server.episodes[i].published_at)>card2Number){
            card2.episodeId=i;
            card2Number=dateNumber(server.episodes[i].published_at);
        }
    }
    function Card1(props:EpisodeProps){
        
        return(
            <div className="episodeCard" id='card1'>
                <img src={server.episodes[props.episodeId].thumbnail} alt="" className="cardImage" />
                <div>
                    <h3 className='cardName'>
                        {server.episodes[props.episodeId].title}
                    </h3>
                    <p className='cardMembers'>{server.episodes[props.episodeId].members}</p>
                    <p>{dateConvert(server.episodes[props.episodeId].published_at)}</p>
                    <p className='cardDuration'>{toSecond(server.episodes[props.episodeId].file.duration)}</p>
                </div>
                <img src={greenPlay} onClick={() => props.ChangeCurrentPlaying(props.episodeId,props.episodesProps)} alt="" className='greenPlay' />
            </div>
        );
    }
    function Card2(props:EpisodeProps){
        return(
            <div className="episodeCard" id='card2'>
                <img src={server.episodes[props.episodeId].thumbnail} alt="" className="cardImage" />
                <div>
                    <h3 className='cardName'>
                        {server.episodes[props.episodeId].title}
                    </h3>
                    <p className='cardMembers'>{server.episodes[props.episodeId].members}</p>
                    <p>{dateConvert(server.episodes[props.episodeId].published_at)}</p>
                    <p className='cardDuration'>{toSecond(server.episodes[props.episodeId].file.duration)}</p>
                </div>
                
                
                <img src={greenPlay} onClick={() => props.ChangeCurrentPlaying(props.episodeId,props.episodesProps)} alt="" className='greenPlay' />
            </div>
        );
    }
    return(
        <div id="lastReleaseCards">
            <Card1 ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={card1.episodesProps} episodeId={card1.episodeId}/>
            <Card2 ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={card2.episodesProps} episodeId={card2.episodeId}/>
        </div>
    );
}

export function Episodes(props:EpisodesProps){
    
    function Episode(props:EpisodeProps){
        return(
            <div className='episode'>
                <div className='episodeName'>
                    <img src={server.episodes[props.episodeId].thumbnail} alt="" />
                    <h3>
                        {server.episodes[props.episodeId].title}
                    </h3>
                </div>
                <p className='members'>{server.episodes[props.episodeId].members}</p>
                <p className='dateRelease'>{dateConvert(server.episodes[props.episodeId].published_at)}</p>
                <p className='duration'>{toSecond(server.episodes[props.episodeId].file.duration)}</p>
                <img src={greenPlay} onClick={() => props.ChangeCurrentPlaying(props.episodeId,props.episodesProps)}alt=""  className='greenPlay'/>
            </div>
        );
    }
    
    return (
        <div id='episodes'>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={0}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={1}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={2}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={3}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={4}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={5}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={6}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={7}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={8}/>
            <div className='cut'/>
            <Episode ChangeCurrentPlaying={props.ChangeCurrentPlaying} episodesProps={props} episodeId={9}/>
        </div>
    )
}