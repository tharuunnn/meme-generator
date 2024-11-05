import { useState } from "react";
import useGetMemesApi from "../memes";


export default function Output(){
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const {allMemes,loading,error} = useGetMemesApi();
  
  if(loading) return <p>Loading...</p>;
  if(error) return <p>{error}</p>;

  function getMemeImage(){
    const randomMeme = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomMeme].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(){

  }



  
  return(
    <div className="output">
      <div className="meme-input-container">
        <div className="ip-container">
          <div className="top-ip-container">
            <div>
              <label className="toptext">Top text</label>
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Shut up"  className="top-input"
                name="topText"
              />
            </div>
          </div>
          <div className="bottom-ip-container">
            <div>
              <label className="bottomtext">Bottom text</label>
            </div>
            <div>
              <input 
                type="text" 
                placeholder="and take my money" className="bottom-input"
                name="bottomText"
              />
            </div>
          </div>
        </div>

        <div className="new-meme-button-container">
          <button 
            className="new-meme-button"
            onClick={getMemeImage}
            >
            Get a new meme image 🖼
          </button>
        </div>
      </div>

      <div className="meme-image-container">
        <img src={meme.randomImage} className="meme-edit"/>
        <div className="text-overlay top-text">Shut up</div>
        <div className="text-overlay bottom-text">And take my money</div>
      </div>

    </div>
  )
  
}

