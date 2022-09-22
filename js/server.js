const UNIVER_API =
    'json/services.json';

const getResource = async(url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`!!!!!!!!!!! ${err}`)
    }
}

const getListServis = async () => {
    const data = await getResource(`${UNIVER_API}`);

    return data;
}


//getListUniver();
// var fs = require('fs')
// const { arrayBuffer } = require('stream/consumers')
// var services = fs.readFileSync('json/services.json')
// var objServis =JSON.parse(data)
// var objCategories = Object.values(data)
// const categories = []
// objCategories.forEach(function(item){
//     categories.push(Object.keys(item))
// })

// var a = document.getElementById('categories')
