var fs = require('fs')
const { arrayBuffer } = require('stream/consumers')
var services = fs.readFileSync('json/services.json')
var objServis =JSON.parse(services)
var objCategories = Object.values(objServis)
const categories = []
objCategories.forEach(function(item){
    categories.push(Object.keys(item))
})

var a = document.getElementById('categories')

consolo.log(a)
