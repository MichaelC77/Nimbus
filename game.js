$(document).ready(function () {

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    var myArray = ['1','2','3','4','5','6','7','8','9'];
    console.log(shuffle(myArray));

    /** TODO: Use an array of img src
     * randomize shuffle array
     * index 0 is card 1 etc..
     * TODO: create img image on click function
     * fadeOut/explode
     * hide img
     * change img src via variable array
     * fade in img
     */
});