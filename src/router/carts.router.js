const {Router} = require ('express');

const router = Router();

const fs = require('fs')

let carts = [];

router.post('/', (req, res) => {
    
    class ProductManager {
        constructor(filename) {
            this.filename = filename
        }
    
        addProducts = async(products) => {
            let id
            if (users.length === 0) id = 1
            else id = users[users.length-1].id + 1 
            carts.push({id, products})
            fs.writeFileSync(this.filename, JSON.stringify(users, null, 2))
        }
    }
    
    async function addCart() {
        const manager = new ProductManager('carts.json')
        await manager.addProducts('cart1=[]')
        await manager.addProducts('cart2=[]')
    }
    
    addCart()
    
})

router.get('/:cid', (req, res)=>{
    
})

module.exports = router