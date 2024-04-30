
let captcha = false;

function beforesubmit(event){
    if(captcha){
        let outputDate = document.querySelector('.outputdate');
        let inputDate = document.querySelector('.inputdate');
        
        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
        outputDate.value = formattedDate;
        
    }
    else{
        alert("Please Check the reCaptcha in order to submit.")
        event.preventDefault();
    }
    }


    function timestamp() { 
        var response = document.getElementById("g-recaptcha-response"); 
        if (response == null || response.value.trim() == "") {
            var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
        } 
    } setInterval(timestamp, 500);

    
    function captchasuccess(){
        
            captcha = true;
        
    }