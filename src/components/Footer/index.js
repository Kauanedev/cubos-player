import { useState } from 'react';
import nextIcon from '../../assets/next.svg';
import pauseIcon from '../../assets/pause.svg';
import playIcon from '../../assets/play.svg';
import previousIcon from '../../assets/previous.svg';
import stopIcon from '../../assets/stop.svg';
import { musics } from '../../musics';
import './style.css';


function Footer({
    play,
    setPlay,
}) {



    const [playPause, setPlayPause] = useState(false)


    function handleStopSong() {

        document.querySelector('audio').currentTime = 0

        handlePlayBtn(false)
        play.playing = false
        setPlayPause(false)
    }


    function handlePreviousSong() {
        let findMusic = musics.findIndex((music) => {
            return music.url === play.url
        })
        if (findMusic === 0) {
            findMusic = 4
        }

        play.playing = true

        setPlay(musics[findMusic - 1])
    }



    function handlePlayBtn(btnPlayPause) {
        const btnAudio = document.querySelector('audio')

        play.playing = btnPlayPause

        setPlayPause(btnPlayPause)

        return btnPlayPause ? btnAudio.play() : btnAudio.pause()
    }


    function handleNextSong() {
        let findMusic = musics.findIndex((music) => {
            return music.url === play.url
        })
        if (findMusic === 3) {
            findMusic = 0
        }

        play.playing = true

        setPlay(musics[findMusic + 1])
    }


    return (

        <footer>

            <div className='song-playing'>
                <h1>{play.title}</h1>
                <h2>{play.artist}</h2>
            </div>

            <div className='control-btns'>

                <img src={stopIcon} alt='stop button' onClick={() => handleStopSong()} />

                <img src={previousIcon} alt='previous button' onClick={() => handlePreviousSong()} />

                <img src={play.playing ? pauseIcon : playIcon} alt='play button' onClick={() => handlePlayBtn(!playPause)} />

                <img src={nextIcon} alt='next button' onClick={() => handleNextSong()} />

                <audio src={play.url} autoPlay />


            </div>

        </footer>

    )

}


export default Footer;