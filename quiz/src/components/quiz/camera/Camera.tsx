import React from 'react'

export const Camera = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-20 mb-10">
                <img className="w-64 mx-auto" src="./emotion.svg" alt="Emotion 98.3" />
            </h1>

            <div className="flex justify-center items-center relative">
                <canvas className="js-overlay absolute t-0"></canvas>
                <video className="js-video" width="720" height="560" muted></video>
            </div>

            <div className="emotion js-emotion text-center text-white mt-5 text-2xl uppercase relative text-6xl">Poczekaj chwilę...</div>
            <script src="./face-api.min.js"></script>
            <script src="./app.js"></script>
        </div>
    )
}
