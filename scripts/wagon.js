class Wagon {
    
    constructor(wagon) {
        this.wagon = wagon;
    }
    
    wagonClicked() {
        
    }
    
    static makeWagon () {
        return $("<img/>", {src: wagonImage , class: "wagon"});
    }
    
    static removeWagon(wagon) {
        wagon.detach();
    }


    wagonMove(clickedEl) { //TODO: wagon must move from the place were he is drawn
        let id = idOfClickedProduct(clickedEl);
        let wagon = makeWagon();
        $("nav").append(wagon);
        wagon.animate({left: goalCoord[0], top: goalCoord[1], opacity: 0.3, width: '200px' }, 
                      1500, 
                      () => finishAnimation(id, wagon)
                     );  
    }
        
}