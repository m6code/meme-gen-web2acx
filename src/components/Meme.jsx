import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
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
            </form>
        </main>
    )
}