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
                src="https://mail.google.com/mail/u/1?ui=2&ik=0f3c72ed7f&attid=0.1.1&permmsgid=msg-f:1756987759741498430&th=1862130efe19f43e&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8cqLV9vr6dxkcRyrqPuUxhB_gUCT8yT2BuVdndX6yvPyAFnh1Cg8IWpvUnKMy4PIfYVnlP0uRNkKerpE3xLJoKjGNJvbs6Wiiq15UTweFpJ7wgmqMRkyeUchw&disp=emb"
                alt="Slug Life"
                itemTitle="Flowers 4 U"
                className="card-a" />
            <Card
                src="https://mail.google.com/mail/u/1?ui=2&ik=0f3c72ed7f&attid=0.1.1&permmsgid=msg-f:1756989306210839520&th=186214770edb6be0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8Uq4tf8Sg-RbfGeOle7QxK00zrItVH17xO4eexhC7w0BIYSllCG3Gj0dQKEu9uFxI9vGzWDJZGuQbFR5_iqPHjx85fzP3LuWWhzWROexutLVYuHtoT9hH1jqk&disp=emb"
                alt="Little Miss"
                itemTitle="SlugLove logo"
                className="card-b" />
            <Card
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUSFBobQ2CphvDSPoykSR67K1ZaoOhm12YA&usqp=CAU"
                alt="Pic #3"
                itemTitle="Blue Heart"
                className="card-c" />
            <Card
                src="https://mail.google.com/mail/u/1?ui=2&ik=0f3c72ed7f&attid=0.1.1&permmsgid=msg-f:1756987663726804383&th=186212f8a32dfd9f&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9spgUZC2aI2jJyjYOgtIOqLvFSp7PO4uPl4hgWq9pF8_k2hzuSjoBPxjbDxDaFQ07dEU-6jUsJAdqGli9aCkPnA4Q88TDLllMgT7QEISq-HYMbfQE1fIZFFwA&disp=emb"
                alt="Pic #4"
                itemTitle="Porter Squiggle"
                className="card-d" />
            <Card
                src="https://mail.google.com/mail/u/1?ui=2&ik=0f3c72ed7f&attid=0.1.1&permmsgid=msg-f:1756987559371504687&th=186212e0571e7c2f&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-CTLM_qL-1FkRF7VYaXYwcTpCJvlCK4nL8h22Z9yZXcaJ8lGSdGXd0ILQvV_XApthGTp34GE_cx1sSXkwQcVHR1gZ5hayAFWp8031zgfT8VpjgXX_8q-9FaBQ&disp=emb"
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