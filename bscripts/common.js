/* page refresh on orientation change === START */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* page refresh on orientation change === END */





/* thanks popup === start */
function thanksShowHide(val)
{
    if(val =="show")
    {
        $("#earlyAccessThanks").fadeIn(500);
        $("body").css('overflow','hidden');
    }
    else if(val =="hide")
    {
        $("#earlyAccessThanks").fadeOut(500);
        $("body").css('overflow','scroll');
    }
    else
    {
        // nothing
    }
}
/* thanks popup === END */

/* form popup === start */
function formShowHide(val)
{
    if(val =="show")
    {
        $("#earlyAccessForm").fadeIn(500);
        $("body").css('overflow','hidden');
    }
    else if(val =="hide")
    {
        $("#earlyAccessForm").fadeOut(500);
        $("body").css('overflow','scroll');
    }
    else
    {
        // nothing
    }
}
/* form popup  === END */

/* validation === start */
function formValidation()
{
    // debugger;
    var emailReg = /( )|(^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$)/;
    $(".formfieldError, .formboxerror").hide().html('');
    if($("#fullname").val() == '')
    {
        $("#fullname_errormsg").show().html('Please enter your name');
        return false;
    }
    else if($("#emailaddress").val() == '')
    {
        $("#emailaddress_errormsg").show().html('Please enter your email id');
        return false;
    }
    else if ($("#emailaddress").val() != "" && !emailReg.test($("#emailaddress").val())) 
    {
        $("#emailaddress_errormsg").show().html('Please enter valid email id');
        return false;
    }
    else if($("#industry").val() == '')
    {
        $("#industry_errormsg").show().html('Please enter industry name');
        return false;
    }
    else if($("#designation").val() == '')
    {
        $("#designation_errormsg").show().html('Please enter your designation');
        return false;
    }
    else if(!$("#justhidis").prop('checked') && !$("#qinsights").prop('checked') && !$("#qwizard").prop('checked') && !$("#all").prop('checked'))
    {
        $("#formbox_error").show().html('Please select any one');
    }
    else 
    {
        var todayDT = new Date();
        var date = todayDT.getFullYear()+'-'+(todayDT.getMonth()+1)+'-'+todayDT.getDate();
        var time= todayDT.getHours() + ":" + todayDT.getMinutes() + ":" + todayDT.getSeconds();
        var dateTime = date+' '+ time;
        $("#datetime").val(dateTime);
        // $("#type").val("business");

            // var value =  $('.formbox input[type=checkbox]:checked').map(function() { return this.value; }).get().join(',');
            let form = document.querySelector("form");
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                $("#pageloader").show();
                formShowHide('hide');
                let data = new FormData(form);
                fetch('https://script.google.com/macros/s/AKfycbymLNENaAyUdXIGqypfo4wmpX620pG140TZXhoh2Grkw-5E2xFufvmGDefsQ7mEevMY/exec',{
                         mode: "no-cors",
                        method: "POST",
                        body: data
                    })
                    .then(res => res.text())
                    .then(data => {
                        $("#pageloader").hide();  
                        thanksShowHide('show');
                    })
                    .catch(error => console.error('Error!', error.message))
            });   
            $(".formfieldError, .formboxerror").hide().html('');
            return true;
    }
}
/* validation === end */

 
// only number validation === start
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
// only number validation === end

// only Letter validation === start
function isLetter(e) 
{
    var regex = new RegExp("^[a-zA-Z ]+$");
    var strigChar = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(strigChar)) {
        return true;
    }
    return false
}
// only Letter validation === end



$('.talentslideRow1, .talentslideRow2').slick({
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    centerPadding: '15',
    cssEase: 'linear',
    slidesToShow:4,
    slidesToScroll:1,
    variableWidth: false,
    adaptiveHeight:false,
    infinite: true,
    initialSlide:0,
    arrows: false,
    buttons: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    accessibility: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive:
            [ 
                {
                    breakpoint: 1255,
                    settings: { slidesToShow:3 }
                },
                {
                    breakpoint: 1023,
                    settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 479,
                    settings: { centerPadding: '10', slidesToShow:1 }
                } 
            ]
  });
   
 


 