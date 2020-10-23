import React from 'react'

export default function Video() {
    return (
        <div className="video">
            <iframe
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                src={`https://www.youtube.com/embed/0yGThj4HskA`}
                frameBorder="0"
            />
        </div>
    )
}
