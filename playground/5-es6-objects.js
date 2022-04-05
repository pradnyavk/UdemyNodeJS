const username = 'Pradnya'
const user = {
    username,
    location: 'Pune'
}

console.log(user)

const product ={
    name:'Red Notebook',
    quantity:10,
    brand: 'Classmate'
}

// const {name,quantity} = product
// console.log(name)
// console.log(quantity)

const {name:productname,quantity:productquantity} = product

console.log(productname)
console.log(productquantity)