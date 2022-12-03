import { Component, OnInit } from '@angular/core';
import { Product } from '../data/interfaces/iproduct.metadata';
import { GetProductsService } from '../services/products/getProducts.service';


@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})

export class MaleComponent implements OnInit {
  
  tshirts=true;
  pants=true;
  shoes=true;
  prueba=true;
  colorTShirts='primary';
  colorPants='primary';
  colorShoes='primary';
  colorType='primary';
  titleTShirts='Ocultar Camisetas';
  titlePants='Ocultar Pantalones';
  titleShoes='Ocultar Zapatos';


  showProductByType(id:string){
    if(id=='tshirts'){
      if(this.colorTShirts=='primary'){
        return ((this.colorTShirts='danger')&&(this.titleTShirts='Mostrar Camisetas')&&(this.tshirts=false))
      }else{
        return ((this.colorTShirts='primary')&&(this.titleTShirts='Ocultar Camisetas')&&(this.tshirts=true))
      }
    }else{
      if(id=='pants'){
        if(this.colorPants=='primary'){
          return ((this.colorPants='danger')&&(this.titlePants='Mostrar Pantalones')&&(this.pants=false))
        }else{
          return ((this.colorPants='primary')&&(this.titlePants='Ocultar Pantalones')&&(this.pants=true))
        }
      }else{
        if(id=='shoes'){
          if(this.colorShoes=='primary'){
            return ((this.colorShoes='danger')&&(this.titleShoes='Mostrar Zapatos')&&(this.shoes=false))
          }else{
            return ((this.colorShoes='primary')&&(this.titleShoes='Ocultar Zapatos')&&(this.shoes=true))
          }
        }
      }
    }
    return false
  }

  //llama al servicio GetProductsService y lo guarda en la variable privada productsService
  constructor(private productsService:GetProductsService) { }
  
  //crea el array pokemons de tipo Pokemon
  products:Product[];

  //guarda en la variable pokemons la colección que retorna el servicio productsService con la funcion getProducts()
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(product=>{
      this.products=product;
    })
  }

}

