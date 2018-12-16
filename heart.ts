class CardioStimulator {

    static get smallHeartSize() {
        return 50;
    }
    static get bigHeartSize() {
        return 75;
    }
    static get beatTime() {
        return 300;
    }
    static get fullHeartImage() {
        return "images/fullHeart.png";
    }
    static get hollowHeartImage() {
        return "images/hollowHeart.png";
    }

    static toggleLike() {
        let heart = $(this);
        let productId = idOfClickedProduct(heart);
        let likedNow = wl.toggleProduct(productId);
        ProductShowCase.blinkProduct(heart);
        CardioStimulator.beat(heart);
        let image = likedNow ? CardioStimulator.fullHeartImage : CardioStimulator.hollowHeartImage
        CardioStimulator.setImage(heart, image);
    }

    static beat(heart) {
        heart.animate({
            width: CardioStimulator.bigHeartSize
        }, this.beatTime);
        heart.animate({
            width: CardioStimulator.smallHeartSize
        }, this.beatTime);
    }

    static setImage(heart, newImage) {
        heart.attr("src", newImage);
    }

}
