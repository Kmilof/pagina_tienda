import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../data/interfaces/iproduct.metadata';
import { GetProductsService } from '../services/products/getProducts.service';
import { StorageService } from '../services/storage/storage.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //llama al servicio GetPokemonsService y lo guarda en la variable privada pokemonsService
  constructor(private productsService:GetProductsService, private storageService:StorageService) { }

  //crea el array pokemons de tipo Pokemon
  products:Product[];

  //crea la variable image de tipo string
  image:string;

  //crea la variable nameImage de tipo string, para identificar a la imagen
  nameImage:string;

  //guarda en la variable pokemons la colección que retorna el servicio pokemonsService con la funcion getPokemons()
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(product=>{
      this.products=product;
    })
  }

  //crea la variable modalVisible de tipo boolean y la inicia en false
  modalVisible=false;

  //crea la variable textButton de tipo string
  textButton:string;

  //crea la variable pokemonSelected de tipo Pokemon
  productSelected:Product;

  //crea la variable editVisible de tipo boolean y la inicia en true
  editVisible=true;

  //crea la variable addVisible de tipo boolean y la inicia en true
  addVisible=true;

  //crea la variable newPokemon y la asigna el FormGroup
  newProduct=new FormGroup({
    name:new FormControl('',Validators.required),
    description:new FormControl(''),
    price:new FormControl(0,Validators.required),
    type:new FormControl('',Validators.required),
    news:new FormControl(false),
    tshirt:new FormControl(false),
    pant:new FormControl(false),
    shoe:new FormControl(false)
  })

  //muestra el dialog
  showModal(){
    this.image=''
    //cambia el boolean de modalVisible
    this.modalVisible=!this.modalVisible;
    //le asigna el string a textButton
    this.textButton='Agregar Producto';
    //cambia editVisibela a false
    this.editVisible=false;
    //cambia addVisible a true
    this.addVisible=true;
    //resetea los FormControll
    this.newProduct.reset()
  }

  loadImage(event:any){
    let archive=event.target.files[0];
    let reader=new FileReader();
    if(archive!=undefined){
      reader.readAsDataURL(archive)
      reader.onloadend=()=>{
        let url=reader.result
        if(url!=null){
          this.nameImage=archive.name;
          this.image=url.toString();
        }
      }
    }
  }

  //agrega pokemon
  addProduct(){
    //prueba si el FormGroup de newPokemon es valido
    if(this.newProduct.valid){
      //crea el objeto newPokemon de tipo Pokemon y le asigna los valores del parametro
      let newProduct:Product={
        name:this.newProduct.value.name!,
        description:this.newProduct.value.description!,
        price:this.newProduct.value.price!,
        type:this.newProduct.value.type!,
        news:this.newProduct.value.news!,
        tshirt:this.newProduct.value.tshirt!,
        pant:this.newProduct.value.pant!,
        shoe:this.newProduct.value.shoe!,
        image:"",
        id:""
      }
      if(newProduct.news==null){
        newProduct.news=false;
      }
      //sube el objeto newPokemon a la colección de la base de datos por medio del servicio pokemonsService 
      //con la funcion createPokemon()
      //this.pokemonsService.createPokemon(newPokemon,this.image).then(pokemon=>{alert('Pokemon Agregado')})
      //.catch(error=>{alert('Error')+error})
      this.storageService.uploadImage(this.nameImage,this.image).
      then(async res=>{
        this.storageService.obtainImage(res)
        .then(async url=>{
          await this.productsService.createProduct(newProduct,url).
          then(product=>{
            alert('Producto Agregado')
          })
          .catch(error=>{
            alert('Error = '+error)
          })
        })
      })
    }else{
      //muestra error
      alert('Error')
    }
    //cambia el boolean de modalVisible
    this.modalVisible=!this.modalVisible
    //resetea los FormControll
    this.newProduct.reset()
  }

  //crea la variable deleteVisible de tipo boolean y la inicia en true
  deleteVisible=false;

  //crea la variable idSelected de tipo string
  idSelected:string;
  
  //muestra el dialog de delete y retorna el idSelected
  showDelete(product:Product){
    this.productSelected=product
    //le asigna el id del pokemon deseado al parametro idPokemon
    this.idSelected=product.id
    //cambia el boolean de deleteVisible
    this.deleteVisible=!this.deleteVisible
    return this.idSelected
  }

  //oculta el dialog de delete
  showConfirm(){
    this.deleteVisible=!this.deleteVisible
  }

  //borra pokemon
  deleteProduct(){
    //por medio de su id, busca el pokemon deseado en la colección de la base de datos por medio del servicio 
    //pokemonsService y con la función deletePokemon() lo elimina de la base de datos
    this.productsService.deleteProduct(this.idSelected).then(product=>{
      this.storageService.deleteImage(this.productSelected.image)
      alert('Producto Eliminado')})
    //muestra error
    .catch(error=>{alert('Error')+error})
  }

  //muestra el dialog de edit
  showEdit(product:Product){
    this.image=''
    //crea el objeto pokemonSelected del tipo Pokemon y le asigna los valores del parametro pokemon
    this.productSelected=product
    this.newProduct.setValue({
      name:product.name,
      description:product.description!,
      price:product.price,
      type:product.type,
      news:product.news,
      tshirt:product.tshirt,
      pant:product.pant,
      shoe:product.shoe
    })
    //cambia el boolean de modalVisible
    this.modalVisible=!this.modalVisible;
    //cambia el boolean de editVisible a false
    this.editVisible=true;
    //cambia el boolean de addVisible a false
    this.addVisible=false;
    //le asigna el string a textButton
    this.textButton='Actualizar Producto';
  }

  //edita pokemon
  updateProduct(){
    //crea el objeto newDates de tipo Pokemon y le asigna los valores de newPokemon
    let newDates:Product={
      name:this.newProduct.value.name!,
      description:this.newProduct.value.description!,
      price:this.newProduct.value.price!,
      type:this.newProduct.value.type!,
      news:this.newProduct.value.news!,
      tshirt:this.newProduct.value.tshirt!,
      pant:this.newProduct.value.pant!,
      shoe:this.newProduct.value.shoe!,
      image:'',
      id:this.productSelected.id
    }
    //por medio de su id, busca el pokemon deseado en la colección de la base de datos por medio del servicio 
    //pokemonsService con la función editPokemons() lo edita de la base de datos
    if(this.image!=''){
      newDates.image = this.productSelected.image
      this.productsService.editProduct(newDates.id,newDates).
        then(product=>{
          alert('Producto Agregado')
        })
        .catch(error=>{
          alert('Error = '+error)
        })
    }else{
      this.storageService.deleteImage(this.productSelected.image)
      this.storageService.uploadImage(this.nameImage,this.image).
      then(async res=>{
        this.storageService.obtainImage(res)
        .then(async url=>{
          newDates.image=url;
          await this.productsService.editProduct(newDates.id,newDates).
          then(product=>{
            alert('Producto Agregado')
          })
          .catch(error=>{
            alert('Error = '+error)
          })
        })
      })
    }
    this.modalVisible=!this.modalVisible;
  }

}