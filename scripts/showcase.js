function idOfClickedProduct(whereClicked) {
    return whereClicked.parent().children(".imageHolder").attr("id");
}

class ProductShowCase {

    static get blinkTime() {
        return 500;
    }

    static imageHolder(whereClicked) {
        return whereClicked.siblings(".imageHolder");
    }

    static blinkProduct(whereClicked) {
        let imageHolder = ProductShowCase.imageHolder(whereClicked);
        imageHolder.animate({
                opacity: .1
            }, ProductShowCase.blinkTime)
            .animate({
                opacity: 1
            }, ProductShowCase.blinkTime);
    }

    static showFullDescription() { //TODO: show full description
        let id = idOfClickedProduct($(this));
        let full_descr = productsDict[id]["full_descr"];
        console.log(id, full_descr);
        alert(`${full_descr}`)
    }

}
