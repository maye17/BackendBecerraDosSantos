const fs= require('fs');

// Clase product Manager

class ProductManager {
    constructor(path){
        this.path=path;
        this.products=[];
        this.id =1;

        async function valueArchive() {
            if(!fs.existsSync('products.json')){
                 fs.writeFile("products.json","[]")
            } 
        
            let productContent =  fs.readFile("products.json", "utf-8");
            let products = JSON.parse(productContent);  
          }
    }

    
    addProduct (product){
        let valueCode = this.products.find((article)=> article.code === product.code);
        
        if(!valueCode){
            if(product.title && product.description && product.price && product.thumbnail && product.code){
              let newProduct={...product, id: this.id}
                let newProducts ={}
                newProducts = [...this.products, newProduct]  
                this.id ++;
                this.product++;
                        
                 let productString = JSON.stringify(newProducts,null,2);
                 fs.promises.writeFile("products.json", productString); 
                 
                 return 'product  added in my list'     
                
            } else {
               
                return 'Fields missing'
            }            
        }else {
            return 'This code already exists'
        }
    }

        getProducts(id){

           let readProduct = this.products.find ((read) => read.id === id);
           if(!readProduct){

                return"Not found"

                }else {
                    return this.products
                }
            
            }
     }


const product ={

    title:'Camisa De Hombre Slim Fit',
    description: 'Camisa De Hombre Slim Fit, Cuello camisero abotonado, Ajustado, Punta de puntilla de algodón premium, Botones de nácar, Insignia de cocodrilo verde en el pecho, Cotton (100%)',
    price:40.000,
    thumbnail:'https://www.lacoste.com/ar/lacoste/hombre/ropa/camisas/camisa-de-hombre-slim-fit/3666165451391.html?color=T01&gclid=Cj0KCQjwlumhBhClARIsABO6p-ymC4l5Hce_68x4PHdV9xwh8p-e3thi08rWS37P4nOIvnhIQvMzfawaAhnEEALw_wcB',
    code:'lacoste233',
    stock: 200,

}

const product2 ={

    title:'Camisa De Hombre Slim Fit',
    description: 'Camisa De Hombre Slim Fit, Cuello camisero abotonado, Ajustado, Punta de puntilla de algodón premium, Botones de nácar, Insignia de cocodrilo verde en el pecho, Cotton (100%)',
    price:40.000,
    thumbnail:'https://www.lacoste.com/ar/lacoste/hombre/ropa/camisas/camisa-de-hombre-slim-fit/3666165451391.html?color=T01&gclid=Cj0KCQjwlumhBhClARIsABO6p-ymC4l5Hce_68x4PHdV9xwh8p-e3thi08rWS37P4nOIvnhIQvMzfawaAhnEEALw_wcB',
    code:'lacoste432',
    stock: 200,

}




const productsManager = new ProductManager();
console.log(productsManager.addProduct(product));
console.log(productsManager.addProduct(product2));

console.log(productsManager.getProducts(2));
