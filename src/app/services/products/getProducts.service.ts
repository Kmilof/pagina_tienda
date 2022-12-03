import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { map } from 'rxjs/operators';
import { Product } from 'src/app/data/interfaces/iproduct.metadata';


@Injectable({
    providedIn: 'root'
})
export class GetProductsService{

    //declarar la variable privada productsCollection de tipo Product
    private productsCollection: AngularFirestoreCollection<Product>

    //llama a la base de datos y guarda la coleccion de products en la variable productsCollection
    constructor(private db:AngularFirestore){
        this.productsCollection=db.collection('products');
    }

    //recorre la coleccion de productos y la retorna
    getProducts(){
        return this.productsCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())));
    }

    //toma como parametro una variable de tipo Product y retorna una promesa
    createProduct(newProduct:Product,url:string){
        return new Promise(async(resolve,reject)=>{
            //le asigna un id al parametro Product y lo sube a productsCollection en la base de datos
            try{
                const id=this.db.createId();
                newProduct.id=id;
                newProduct.image=url;
                const answer=await this.productsCollection.doc(id).set(newProduct);
                resolve(answer);
            }
            catch(error){
                reject(error);
            }
        })
    }

    //toma como parametro una variable de tipo string (id del producto deseado) y retorna una promesa
    deleteProduct(idProduct:string){
        return new Promise(async(resolve,reject)=>{
          //borra el producto de la coleccion que corresponde al id del parametro
          try{
            const answer=await this.productsCollection.doc(idProduct).delete();
            resolve(answer)
          }
          //muestra error
          catch(error){
            reject(error)
          }
        })
    }

    //toma como parametro una variable de tipo string del producto deseado
    //toma como parametro una variable de tipo Product
    //retorna una promesa
    editProduct(idProduct:string,newDates:Product){
        //sobreescribe al producto de la colección respecto al id ingresado como parametro con los datos de
        //el Product ingresado como parametro
        return this.productsCollection.doc(idProduct).update(newDates);
    }


}


