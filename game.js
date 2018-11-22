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
     * Global image arrays
     * imageArrayOne is a lower bound image array for the first 10 cards
     * imageArrayTwo is a higher bound image array for the last 10 cards
     */
    var imageArrayOne = ['train.png', 'plane.png', 'flower.png', 'cow.png',
        'car.png', 'boat.png', 'snake.jpg', 'rocket.jpg', 'dreamySnakes.jpg',
        'chicken.jpg'];
    var imageArrayTwo = imageArrayOne.slice();
    shuffle(imageArrayOne);
    shuffle(imageArrayTwo);

    /**
     * Clickevent handler
     */
    // noinspection JSDeprecatedSymbols
    $("table img").click(function () {
        if ((parseInt($(this).attr('alt'))) > 9){
            $(this).attr('src',
                imageArrayTwo[(
                    parseInt($(this).attr(
                        'alt')) -10)]);
        } else {
            $(this).attr('src', imageArrayOne[parseInt(
                $(this).attr('alt')
            )]);
        }
    });

    /** TODO: Use an array of img src
     * index 0 is card 1 etc..
     * TODO: create img image on click function
     * fadeOut/explode
     * hide img
     * change img src via variable array
     * fade in img
     */
});

// ===========================DEBUG CODE=============================
/*
    $("table img").attr("id", function (index) {
        var id = "heading" + (index + 1);
        $(this).attr('src', imageArrayOne[index]);
        imageArrayOne.push($(this).attr("src"));
    });
    */