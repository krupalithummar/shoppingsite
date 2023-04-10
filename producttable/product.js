const mongoose = require('mongoose');

const products = [];
class Product {
    
    constructor(id, title, price, imageURL, description) {
        this.id = id;
        this.title = title;
        this.price = new Number(price);
        this.imageURL = imageURL;
        this.description = description;
       // this.address = this.address;
    }
    save() {
        this.id = Math.floor(Math.random() * 100000);
        products.push(this);
    }
    static findAll() {
        return products;
    }
    static findById(prodId) {
        return products.filter(p => p.id == prodId);
    }

    //static findByName(prodname){
    //}
    delete(){
       //const data = product.findall()
    }
    static findByName(productId){
        const Data = productId.findOneandDelete({
            email : req.body.email,
            password : req.body.password
        })
        try{
            if(!validator){
                resizeBy.status(201).send(Data)

            }
        }catch(error){
            resizeBy.send(error.message);

        }
        
      //  return products.filter(validate => validate.id == productId);
    }

   // https://github.com/krupalithummar

    update() {
        const editProductIndex = products.findIndex(p => p.id == this.id);
        products[editProductIndex] = this;
    }

    static deleteById(prodId) {
        const deleteProductIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProductIndex, 1);
    }

}

module.exports = {
    Product,
    //Cart
}
