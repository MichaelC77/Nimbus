$(document).ready(function () {

    $("#signUpForm").validate({

        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            postalCode: {
                required: true,
                range: []
            },
            email_1: {
                required: true,
                email: true
            },
            email_2: {
                required: true,
                equalTo: "#email_1"
            },
        },
        messages: {
            firstName: {
            }
        }
    }) // end validation


});

$("#signUpForm").submit(function(e) {
    e.preventDefault();
}).validate({
        rules: {
            firstName: "required",
            lastName: "required",
            email: {
                required: true,
                email: true
            },
            email2: {
                required: true,
                email: true
            }

        }
    })