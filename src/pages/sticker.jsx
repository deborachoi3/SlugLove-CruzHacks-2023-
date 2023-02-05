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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprUgJUzl65Y-xlbabxEaVz2UQHajb598QQw&usqp=CAU"
                itemTitle="#SlugLife"
                className="card-a" />
            <Card
                img src="https://ih1.redbubble.net/image.4547226423.5757/st,small,507x507-pad,600x600,f8f8f8.jpg"
                className="card-b" />
            <Card
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUSFBobQ2CphvDSPoykSR67K1ZaoOhm12YA&usqp=CAU"
                alt="Pic #3"
                itemTitle="Blue Heart"
                className="card-c" />
            <Card
                src="https://dejpknyizje2n.cloudfront.net/marketplace/products/a1d0132055fe4c429557e6a56849f2eb.png"
                itemTitle="V-day"
                className="card-d" />
            <Card
                src="https://appadvice.com/cdn-cgi/mirage/80ec584b7eeb7e415153342264be8f6a183ab0093f2374a280e6e387f47020ee/1280/https://is3-ssl.mzstatic.com/image/thumb/Purple82/v4/b7/f1/e2/b7f1e2c9-baed-3259-6e5a-21559ccaad62/source/256x256bb.jpg"
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