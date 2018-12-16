var CardioStimulator = /** @class */ (function () {
    function CardioStimulator() {
    }
    Object.defineProperty(CardioStimulator, "smallHeartSize", {
        get: function () {
            return 50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioStimulator, "bigHeartSize", {
        get: function () {
            return 75;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioStimulator, "beatTime", {
        get: function () {
            return 300;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioStimulator, "fullHeartImage", {
        get: function () {
            return "images/fullHeart.png";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardioStimulator, "hollowHeartImage", {
        get: function () {
            return "images/hollowHeart.png";
        },
        enumerable: true,
        configurable: true
    });
    CardioStimulator.toggleLike = function () {
        var heart = $(this);
        var productId = idOfClickedProduct(heart);
        var likedNow = true; // wl.toggleProduct(productId);
        ProductShowCase.blinkProduct(heart);
        CardioStimulator.beat(heart);
        var image = likedNow ? CardioStimulator.fullHeartImage : CardioStimulator.hollowHeartImage;
        CardioStimulator.setImage(heart, image);
    };
    CardioStimulator.beat = function (heart) {
        heart.animate({
            width: CardioStimulator.bigHeartSize
        }, this.beatTime);
        heart.animate({
            width: CardioStimulator.smallHeartSize
        }, this.beatTime);
    };
    CardioStimulator.setImage = function (heart, newImage) {
        heart.attr("src", newImage);
    };
    return CardioStimulator;
}());
