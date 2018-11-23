$(document).ready(function () {

    /**
     * Randomizer array shuffle
     * Takes in an array and shuffles the index positions using
     * Math.random to prevent predictable outputs and
     * returns a re-ordered array.
     * @param array
     * @returns {array}
     */
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * Global variables
     * imageArrayOne is a lower bound image array for the first 10 cards
     * imageArrayTwo is a higher bound image array for the last 10 cards
     */
    var imageArrayOne = ['train.png', 'plane.png', 'flower.png', 'cow.png',
        'car.png', 'boat.png', 'snake.jpg', 'rocket.jpg', 'dreamySnakes.jpg',
        'chicken.jpg'];
    var imageArrayTwo = imageArrayOne.slice();
    var comparisonVarOne = "";
    var cardPositionOne;
    var comparisonVarTwo = "";
    var cardPositionTwo;
    var counter = 10;

    shuffle(imageArrayOne);
    shuffle(imageArrayTwo);

    function comparison(clickInstance){
        if (comparisonVarOne === ""){
            cardPositionOne = clickInstance;
            comparisonVarOne = cardPositionOne.attr('src');
        }
        else {
            cardPositionTwo = clickInstance;
            comparisonVarTwo = cardPositionTwo.attr('src');
            if (comparisonVarOne === comparisonVarTwo &&
                cardPositionOne.attr('alt') !== cardPositionTwo.attr('alt') &&
                comparisonVarOne !== 'transparent.png'){
                cleanUp(1)
            } else {
                setTimeout(function(){cleanUp(0)}, 700);
            }
        }
    }

    function cleanUp(number){
        if (number === 0) {
            cardPositionOne.attr('src', 'cardBack.png');
            cardPositionTwo.attr('src', 'cardBack.png');
        }
        if (number === 1) {
            var one = cardPositionOne;
            var two = cardPositionTwo;
            cardPositionOne.toggle('fold');
            setTimeout(function(){one.attr('src', 'transparent.png');
                one.show()}, 2000);
            cardPositionTwo.fadeOut();
            setTimeout(function(){two.attr('src', 'transparent.png');
                two.show()}, 2000);
        }
        comparisonVarOne = "";
        comparisonVarTwo = "";
        counter -= number;
        if (counter === 0){
            alert("You saved homeland!");
        }
    } // end clean up function

    /**
     * Clickevent handler
     */
    // noinspection JSDeprecatedSymbols
    $("table img").click(function () {
        var clickInstance = $(this);
        if (clickInstance.attr('src') !== 'transparent.png'){
            if ((parseInt(clickInstance.attr('alt'))) > 9){
                clickInstance.attr('src',
                    imageArrayTwo[(
                        parseInt(clickInstance.attr(
                            'alt')) -10)]);
                comparison(clickInstance);
            } else {
                clickInstance.attr('src', imageArrayOne[parseInt(
                    clickInstance.attr('alt')
                )]);
                comparison(clickInstance);
            }
    }}); // end click handler
}); // end ready
