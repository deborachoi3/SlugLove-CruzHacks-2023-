import React from 'react'
import "../../static/sticker.css"
    
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
                src="https://i.ibb.co/C6CtSsX/flower.jpg" alt="flower" border="0"
                itemTitle="Flowers 4 U"
                className="card-a" />
            <Card
                src="Hackathon-5.jpg"
                alt="Little Miss"
                itemTitle="SlugLove logo"
                className="card-b" />
            <Card
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUSFBobQ2CphvDSPoykSR67K1ZaoOhm12YA&usqp=CAU"
                alt="Pic #3"
                itemTitle="Blue Heart"
                className="card-c" />
            <Card
                src="squiggle.jpg"
                alt="Pic #4"
                itemTitle="Porter Squiggle"
                className="card-d" />
            <Card
                src="bee.jpg"
                alt="Backpack Slug"
                itemTitle="Be Mine"
                className="card-e" />
            <Card
                src="https://assets.codepen.io/21542/Banana.2x.png"
                alt="Pic #5"
                itemTitle="Banana"
                className="card-f" />
            <Card
                src="https://assets.codepen.io/21542/Gem.2x.png"
                alt="Pic #6"
                itemTitle="Green Diamond"
                className="card-g" />
            <Card
                src="https://assets.codepen.io/21542/PurpleRock.2x.png"
                alt="Purple Rock"
                itemTitle="Purple Gemstone"
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