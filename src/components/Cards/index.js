import './style.css';
import '../../Page/Main';


function Card({
    title,
    description,
    cover,
    music,
    setPlay,
}) {

    function CurrentSong() {
        music.playing = true
        setPlay(music)
    }


    return (

        <div className='container' onClick={() => CurrentSong()} >

            <img src={cover} alt='cover art' />

            <h1>{title}</h1>

            <span>{description}</span>

        </div>


    )

}

export default Card