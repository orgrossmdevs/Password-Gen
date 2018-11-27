    function randomPassword(length) {
        alert("Password Generated! Click OK to continue! ")
        var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
        var pass = "";
        for (var x = 0; x < length; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
    }
    
    function generate() {
        myform.row_password.value = randomPassword(myform.length.value);
    }
