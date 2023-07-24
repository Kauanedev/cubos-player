import { useState } from 'react';
import Card from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { musics } from '../../musics';
import './style.css';


function Main() {


  const [play, setPlay] = useState(musics[0])


  return (


    <div className="container">




      <Header />

      <h3 className='playlist-title'>The best playlist</h3>

      <div className='covers'>
        {musics.map((music) => (
          <Card
            key={music.id}
            title={music.title}
            description={music.description}
            cover={music.cover}
            music={music}
            setPlay={setPlay}
          >
          </Card>
        )
        )}
      </div>



      <Footer
        setPlay={setPlay}
        play={play}
      />



    </div >

  );

}


export default Main;
