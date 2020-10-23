import React from 'react'

export default function Map() {
    return (
        <div
            className="map"
            style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
            }}
        >
            <iframe
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.88006126854!2d78.2679604968087!3d17.41262741377129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1603302880636!5m2!1sen!2sin"
                frameBorder="0"
            >
            </iframe>
        </div>
    )
}
