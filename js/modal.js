const sabmit1 = document.querySelector('#sabmit1');
var bgModal = document.querySelector('.bg');
var modaFirst = document.querySelector('.modal_first');
var sabmitLest = document.getElementById('submit_lest');
var modalLest = document.querySelector('.modal_lest');
var sabmitEnd = document.querySelector('#submit_end');
const errorSabmit = document.querySelector('.error_sabmit')
const userName = document.querySelector('#username')
const userPhoneNumber = document.querySelector('#phone') 
const eroorSabmitUser = document.querySelector('.error_user')


sabmit1.addEventListener('click', function(event){
    event.preventDefault();
    var  dataSabmint = datePicked.innerHTML;

    if(serviselist.value !== 'start' && servisItemlist.value !== 'start' && nameList.value !== 'start' && dataSabmint !== '' && dataSabmint !== 'choose another<br>date'){
        bgModal.classList.add('active');
        modaFirst.classList.add('active'); 
        errorSabmit.classList.remove('active');
        serviselist.previousElementSibling.classList.remove('color_error')
        servisItemlist.previousElementSibling.classList.remove('color_error')
        nameList.previousElementSibling.classList.remove('color_error')



    } else{
        errorSabmit.classList.add('active');
        if(dataSabmint == '' || dataSabmint == 'choose another<br>date'){
            datePicked.innerHTML = 'choose another<br>date';
            datePicked.classList.add('err_date');
        }
        if(serviselist.value == 'start'){
            serviselist.previousElementSibling.classList.add('color_error')
        }else{
            serviselist.previousElementSibling.classList.remove('color_error')
        }
        if(servisItemlist.value == 'start'){
            servisItemlist.previousElementSibling.classList.add('color_error')
        }else{
            servisItemlist.previousElementSibling.classList.remove('color_error')
        }
        if(nameList.value == 'start'){
            nameList.previousElementSibling.classList.add('color_error')
        }else{
            nameList.previousElementSibling.classList.remove('color_error')
        }



    }

})

sabmitLest.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(userName.value)
    if (userName.value !== '' && userPhoneNumber.value !== ''){
        modaFirst.classList.remove('active');
        modalLest.classList.add('active')    
    }
    else{
        eroorSabmitUser.classList.add('active')
        if(userName.value == ''){
            userName.previousElementSibling.previousElementSibling.classList.add('color_error');
        }else{
            userName.previousElementSibling.previousElementSibling.classList.remove('color_error');
        }
        if(userPhoneNumber.value == ''){
            userPhoneNumber.previousElementSibling.previousElementSibling.classList.add('color_error');
        } else{
            userPhoneNumber.previousElementSibling.previousElementSibling.classList.remove('color_error');
        }

    }x
})

sabmitEnd.addEventListener('click',(event) => {
    event.preventDefault();
    modalLest.classList.remove('active');
    bgModal.classList.remove('active');
    location.reload();
})




