class WagonPusher {

    constructor() {
        this.goal = $("#wagonGoal");
    }

    wagonClicked() {

    }

    static get wagonImage() {
        return "images/wagon2.png";
    }

    static makeWagon() {
        return $("<img/>", {
            src: WagonPusher.wagonImage,
            class: "wagon"
        });
    }
    
    static offsetWagon(wagon, offsetPos){
         wagon.offset({top: offsetPos.top, left:offsetPos.left});
    }

    static removeWagon(wagon) {
        wagon.detach();
    }


    static wagonMove() { //TODO: wagon must move from the place were he is drawn
        let clickedEl = $(this);
        let offsetPos = clickedEl.offset();  //relative to body element
        console.log(offsetPos);
        ProductShowCase.blinkProduct(clickedEl);
        let id = idOfClickedProduct(clickedEl);
        let wagon = WagonPusher.makeWagon(offsetPos);
        WagonPusher.offsetWagon(wagon, offsetPos);
        wagon.css("position, fixed");
        $("body").append(wagon);
        console.log(wagon);
        wagon.animate({
                left: goalCoord[0],
                top: goalCoord[1],
                opacity: 0.3,
                width: '200px'
            },
            1500,
            () => WagonPusher.finishAnsSendTheBill(id, wagon)
        );
    }

    static finishAnsSendTheBill(id, wagon) {
        this.removeWagon(wagon);
        shopCard.addToCard(id);
    }

}
