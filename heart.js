function idOfClickedProduct(whereClicked) {
    return whereClicked.parent().children().eq(0).attr("id");
}


class CardioStimulator { 
    
    static get smallHeartSize() {return 50;}
    static get bigHeartSize() {return 100;}  
    static get fullHeartImage() {return "images/fullHeart.png";}
    static get hollowHeartImage() {return "images/hollowHeart.png";}
    
    static toggleLike() {
        let heart = $(this);
        let productId = idOfClickedProduct(heart);
        let likedNow = wl.toggleProduct(productId)
        CardioStimulator.beat(heart);
        if (likedNow) {
            CardioStimulator.setImage(heart, CardioStimulator.fullHeartImage);
        }
        else {
            CardioStimulator.setImage(heart, CardioStimulator.hollowHeartImage);
        }
    }
    
    static beat(heart) {
        heart.animate({width: CardioStimulator.bigHeartSize}, 500);
        heart.animate({width: CardioStimulator.smallHeartSize}, 500);    
    }
    
    static setImage(heart, newImage){
        heart.attr("src", newImage);
    };   
}