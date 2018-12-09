function idOfClickedProduct(whereClicked) {
    return whereClicked.parent().children().eq(0).attr("id");
}

function divWithImage(whereClicked) {
    return whereClicked.siblings().eq(0);
}


class CardioStimulator { 
    
    static get smallHeartSize() {return 50;}
    static get bigHeartSize() {return 100;}  
    static get fullHeartImage() {return "images/fullHeart.png";}
    static get hollowHeartImage() {return "images/hollowHeart.png";}
    
    static toggleLike() {
        let heart = $(this);
        let productId = idOfClickedProduct(heart);
        let likedNow = wl.toggleProduct(productId);
        
        CardioStimulator.blink( divWithImage(heart), 500);
        CardioStimulator.beat(heart);
        let image = likedNow ? CardioStimulator.fullHeartImage : CardioStimulator.hollowHeartImage
        CardioStimulator.setImage(heart, image);
    }
    
    static beat(heart) {
        heart.animate({width: CardioStimulator.bigHeartSize}, 500);
        heart.animate({width: CardioStimulator.smallHeartSize}, 500);    
    }
    
    static setImage(heart, newImage){
        heart.attr("src", newImage);
    }   
    
    static blink(element, time) {
        console.log(element);
        element.animate({left: "1000px", opacity:.1}, time)
               .animate({left: "1000px", opacity:1}, time);
    }
}