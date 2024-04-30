function beforesubmit(){
    let outputDate = document.querySelector('.outputdate');
    let inputDate = document.querySelector('.inputdate');
    console.log(inputDate.value)
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;
    console.log(outputDate);
    }


    function timestamp() { 
        var response = document.getElementById("g-recaptcha-response"); 
        if (response == null || response.value.trim() == "") {
            var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
        } 
    } setInterval(timestamp, 500);