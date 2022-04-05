const username = 'Pradnya'
const user = {
    username,
    location: 'Pune'
}

console.log(user)

const product ={
    name:'Red Notebook',
    quantity:10,
    brand: 'Classmate',
    rating:undefined
}

//Object destructuring
// const {name,quantity} = product
// console.log(name)
// console.log(quantity)

//object destructuring with different name and also providing default values
// const {name:productname,quantity:productquantity,rating=5} = product//


// console.log(productname)
// console.log(productquantity)
// console.log(rating)


const transaction = (type,{name,quantity})=>{//Inline destructuring of object
    console.log(type+ ' '+name+' '+quantity)
}

transaction('order',product)