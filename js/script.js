

const servislist = async () =>{
    const serviselist = document.getElementById("categories")
    const dataServise = await getListServis();
    var arrServiseList = []

    dataServise.map((item) => {
        const arrItem = Object.keys(item)
        arrServiseList.push(arrItem)
        return  arrServiseList
    });
    serviselist.innerHTML = `<option value="start" >select from the list</option>`
    arrServiseList.flat().forEach( (index, elem) =>{
        serviselist.innerHTML+= `<option value="${index}"> ${index} </option>`
    })
    serviselist.firstElementChild.setAttribute("disabled", "disabled")
} 

servislist();


const servis = document.getElementById("categories")

const nameServise  = async () =>{
    const dataServise = await getListServis();
    const nameServiseList = document.getElementById('nameServiseList')
    dataServise.map((item) =>{
        const items = (Object.keys(item))[0]

        if ( items == servis.value){
            const itemsNameServis = item[servis.value]
            nameServiseList.innerHTML = `<option value="start" >select from the list</option>`
            itemsNameServis.forEach( (index, elem) =>{
                nameServiseList.innerHTML += `<option value="${index}"> ${index} </option>`
            })
        }
        nameServiseList.firstElementChild.setAttribute("disabled", "disabled")
    })

}


servis.addEventListener('change', nameServise, true)







