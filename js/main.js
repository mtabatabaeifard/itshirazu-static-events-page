const regMethod = document.getElementById('regMethod');
const amount = document.getElementById('amount');
const payBtn = document.getElementById('pay-button');

regMethod.addEventListener('change',(e) => {
    if(e.target.value === "ثبت نام ویژه دانشجویان دانشگاه شیراز"){
        amount.innerText = "50,000 تومان";
        payBtn.setAttribute('href', 'https://zarinp.al/553230');
    }else if(e.target.value === "ثبت نام ویژه عموم"){
        amount.innerText = "60,000 تومان";
        payBtn.setAttribute('href', 'https://zarinp.al/553232');
    }
    else{
        toastr.options.closeMethod = "fadeOut";
        toastr.options.closeDuration = 300;
        toastr.options.rtl = true;
        toastr.options.positionClass = "toast-top-left";
        toastr.options.progressBar = true;
        toastr.error(" نوع ثبت نام خود را انتخاب کنید.");
        amount.innerText = " نوع ثبت نام خود را انتخاب کنید ";
    }
})

