const sabmit1 = document.querySelector('#sabmit1');
var bgModal = document.querySelector('.bg');
var modaFirst = document.querySelector('.modal_first');
var sabmitLest = document.getElementById('submit_lest');
var modalLest = document.querySelector('.modal_lest');
var sabmitEnd = document.querySelector('#submit_end');
const errorSabmit = document.querySelector('.error_sabmit')


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
    modaFirst.classList.remove('active');
    modalLest.classList.add('active')
})

sabmitEnd.addEventListener('click',(event) => {
    event.preventDefault();
    modalLest.classList.remove('active')
    bgModal.classList.remove('active');
})




