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