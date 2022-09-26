
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
let serviseСhoice = ''
let itemChoice = servisItemlist.value
serviselist.addEventListener('change', function (){
    serviseСhoice = serviselist.value
    initSliders()
});

servisItemlist.addEventListener('change', function(){
    itemChoice = servisItemlist.value
    initSliders()
} )



function initSliders() {
    if (document.querySelector('.mySwiper')) { 
        async function getSliderProducts() {
            
            const file = '..json/list_master.json';
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
                alert('Error')
            }
        }
    
        function loadSliderProducts(data) {
            
            const sliderBody = document.querySelector('.master_list');
            sliderBody.innerHTML = '';

            data.forEach(item => {
                const servis = Object.keys(item.servis[0])[0]
                const servisItem =Object.values(item.servis[0])[0]

                if((serviselist.value == servis || serviselist.value == "start" ) && (servisItem.includes(itemChoice) || servisItemlist.value == "start"))  {

                    const imgFoto = item.imges;
                    const idMaster = item.id
                    const imgesFoto =  document.createElement('div')

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
        }
        )
        const itemsFirsName = document.querySelectorAll(".first_name")
        itemsFirsName.forEach(item => {
            console.log(item.textContent)
        })
        console.log(itemsFirsName)
    
        }
        getSliderProducts();
    }}

initSliders()

