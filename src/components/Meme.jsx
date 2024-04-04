import React, {useState} from "react"
import memesData from "../memesData.js";

export default function Meme() {
    const[url, setUrl] = useState();

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setUrl(memesArray[randomNumber].url)
        console.log(url)
    }


    return (
        <main>
            <div className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                    <input
                        id="top-text"
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                </div>
                <div>
                    <label htmlFor="bottom-text">Top Text</label>
                    <input
                        id="bottom-text"
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                </div>
                <button
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
                <p>{url}</p>
            </div>
        </main>
    )
}