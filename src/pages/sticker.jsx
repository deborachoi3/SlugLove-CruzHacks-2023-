import React from 'react'
import "../../static/index.css"
    
function Card({src, alt, itemTitle, className}) {
    return (
        <div className={`card ${className}`}>
            <div className="image-container">
                <img src={src} alt={alt} />
            </div>
            <span className="item-title">{itemTitle}</span>
        </div>
    );
}

function StickerInventory() {
    return (
        <div className="layout wrap">
            <Card
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprUgJUzl65Y-xlbabxEaVz2UQHajb598QQw&usqp=CAU"
                alt="Slug Life"
                itemTitle="Slug Life"
                className="card-a" />
            <Card
                src="https://ih1.redbubble.net/image.3889163402.5365/st,small,507x507-pad,600x600,f8f8f8.jpg"
                alt="Little Miss"
                itemTitle="Little Miss *RARE*"
                className="card-b" />
            <Card
                src="https://assets.codepen.io/21542/Shield.4x.png"
                alt="Pic #3"
                itemTitle="Pic #3"
                className="card-c" />
            <Card
                src="https://assets.codepen.io/21542/Hat.2x.png"
                alt="Pic #4"
                itemTitle="Pic #4"
                className="card-d" />
            <Card
                src="https://ih1.redbubble.net/image.2276700918.7392/st,small,507x507-pad,600x600,f8f8f8.jpg"
                alt="Backpack Slug"
                itemTitle="Backpack Slug"
                className="card-e" />
            <Card
                src="https://assets.codepen.io/21542/Banana.2x.png"
                alt="Pic #5"
                itemTitle="Pic #5"
                className="card-f" />
            <Card
                src="https://assets.codepen.io/21542/Gem.2x.png"
                alt="Pic #6"
                itemTitle="Pic #6"
                className="card-g" />
            <Card
                src="https://assets.codepen.io/21542/PurpleRock.2x.png"
                alt="Purple Rock"
                itemTitle="Purple Rock"
                className="card-h" />
        </div>
    );
}

const Sticker = () => {
    return (
        <header>
            <div className="wrap">Sticker Inventory</div>
            <StickerInventory/>
        </header>
    )
}

export default Sticker