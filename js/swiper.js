
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    WatchOverflow: true,
    spaceBetween: 20,
    observeSlideChildren: true,
    observer: true,
    observeParents:true,

});



  //swaper item master
const serviselist = document.getElementById("categories",false)
const servisItemlist = document.getElementById("nameServiseList")
const itemsFirsName = document.querySelectorAll(".first_name")
const nameList = document.getElementById("nameList")

let serviseСhoice = ''
let itemChoice = servisItemlist.value
let itemname = nameList.value
serviselist.addEventListener('change', function (){
    serviseСhoice = serviselist.value
    initSliders()
});

servisItemlist.addEventListener('change', function(){
    itemChoice = servisItemlist.value
    initSliders()
});

nameList.addEventListener('change', function(){
    itemname = nameList.value;
    initSlidersEnditems()

})



function initSliders() {
    if (document.querySelector('.mySwiper')) { 
        async function getSliderProducts() {
            
            const file = 'json/listmaster.json';
            let response = await fetch(file, {
                method: 'GET'
            });
            if(response.ok) {
                let result = await response.json();
                // swiper.init()
                // swiper1.init()
                loadSliderProducts(result);
                
                ;
            } else {
                throw new Error(`!!!!!!!!!!! ${err}`)
            }
        }
    
        function loadSliderProducts(data) {
            
            const sliderBody = document.querySelector('.master_list');
            sliderBody.innerHTML = '';

            data.forEach(item => {
                const servis = Object.keys(item.servis[0])[0]
                const servisItem =Object.values(item.servis[0])[0]
                const imgFoto = item.imges;
                const idMaster = item.id
                const imgesFoto =  document.createElement('div')
                const nameMaster = item.firstName


                if((serviselist.value == servis || serviselist.value == "start" ) && (servisItem.includes(itemChoice) || servisItemlist.value == "start") && (nameList.value == "start" || nameList.value == nameMaster) )  {
                    imgFoto.forEach(item =>{
                    imgesFoto.textContent += `<div class="swiper-slide"><img src="imeges/masters/${idMaster}/${item}" alt="nails"></div>`})
                    sliderBody.innerHTML += `
                    <div class="swiper-slide item_master">
                    <div class="slaider_item">
                        <img src="imeges/masters/${idMaster}/${item.img}" alt="foto_master">
                        <div class="items_content">
                            <div>
                                <h2 class="first_name">
                                    ${item.firstName} ${item.lastName}
                                </h2>
                                <p class="typye_work">
                                    ${item.speciality}
                                </p>
                            </div>
                            <ul class="service_info">
                                <li>${item.skill[0]}</li>
                                <li>${item.skill[1]}</li>
                                <li>${item.skill[2]}</li>
                            </ul>
                        </div>
                        <div class="title">${item.aboutMe} </div>
                        <div class="swiper mySwiper2 wrap_swiper2 ">
                                        <div class="swiper-wrapper imges_item ">
                                            ${imgesFoto.textContent}                            
                                    </div>
                            <div class="swiper-pagination " id="elem"></div>
                            </div>
                        </div>
                        <div class="imges_item">   
                    </div>
                </div>` 
                }  
                
                var swiper1 = new Swiper(".mySwiper2", {
                    slidesPerView: 4,
                    spaceBetween: 13,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                    grabCursor: true,
                    observeSlideChildren: true,
                    observer: true,
                    observeParents:true,
                });    
                
                if( (nameList.value === 'start' && servisItemlist.value === "start") || (serviselist.value == servis && servisItem.includes(itemChoice)  ) ){
                    var itemsFirsName = document.querySelectorAll(".first_name")
                    nameList.innerHTML = `<option value="start" >select from the list</option>`
                    itemsFirsName.forEach(item => {
                        nameList.innerHTML += `<option value=${item.innerHTML}>${item.innerHTML}</option>`
                    })
                    nameList.firstElementChild.setAttribute("disabled", "disabled")        
            
                }
            })
        }
        getSliderProducts();
    }}

initSliders()


function initSlidersEnditems() {
    if (document.querySelector('.mySwiper')) { 
        async function getSliderProducts() {
            
            const file = 'json/listmaster.json';
            let response = await fetch(file, {
                method: 'GET'
            });
            if(response.ok) {
                let result = await response.json();
                // swiper.init()
                // swiper1.init()
                loadSliderProducts(result);
                
                ;
            } else {
                throw new Error(`!!!!!!!!!!! ${err}`)
            }
        }
    
        function loadSliderProducts(data) {
            
            const sliderBody = document.querySelector('.master_list');
            sliderBody.innerHTML = '';

            data.forEach(item => {
                const servis = Object.keys(item.servis[0])[0]
                const servisItem =Object.values(item.servis[0])[0]
                const imgFoto = item.imges;
                const idMaster = item.id
                const imgesFoto =  document.createElement('div')
                const nameMaster = item.firstName


                if((serviselist.value == servis || serviselist.value == "start" ) && (servisItem.includes(itemChoice) || servisItemlist.value == "start") && (nameList.value == "start" || nameList.value == nameMaster) )  {
                    imgFoto.forEach(item =>{
                    imgesFoto.textContent += `<div class="swiper-slide"><img src="imeges/masters/${idMaster}/${item}" alt="nails"></div>`})
                    sliderBody.innerHTML += `
                    <div class="swiper-slide item_master">
                    <div class="slaider_item">
                        <img src="imeges/masters/${idMaster}/${item.img}" alt="foto_master">
                        <div class="items_content">
                            <div>
                                <h2 class="first_name">
                                    ${item.firstName} ${item.lastName}
                                </h2>
                                <p class="typye_work">
                                    ${item.speciality}
                                </p>
                            </div>
                            <ul class="service_info">
                                <li>${item.skill[0]}</li>
                                <li>${item.skill[1]}</li>
                                <li>${item.skill[2]}</li>
                            </ul>
                        </div>
                        <div class="title">${item.aboutMe} </div>
                        <div class="swiper mySwiper2 wrap_swiper2 ">
                                        <div class="swiper-wrapper imges_item ">
                                            ${imgesFoto.textContent}                            
                                    </div>
                            <div class="swiper-pagination " id="elem"></div>
                            </div>
                        </div>
                        <div class="imges_item">   
                    </div>
                </div>` 
                }  
                
                var swiper1 = new Swiper(".mySwiper2", {
                    slidesPerView: 4,
                    spaceBetween: 13,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                    grabCursor: true,
                    observeSlideChildren: true,
                    observer: true,
                    observeParents:true,
                });    
                
                if( (nameList.value === 'start' && servisItemlist.value === "start") ){
                    var itemsFirsName = document.querySelectorAll(".first_name")
                    nameList.innerHTML = `<option value="start" >select from the list</option>`
                    itemsFirsName.forEach(item => {
                        nameList.innerHTML += `<option value=${item.innerHTML}>${item.innerHTML}</option>`
                    })
                    nameList.firstElementChild.setAttribute("disabled", "disabled")        
            
                }
            })
        }
        getSliderProducts();
    }}

initSliders()