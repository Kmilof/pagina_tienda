import { Component, OnInit } from '@angular/core';
import { Product } from '../data/interfaces/iproduct.metadata';
import { GetProductsService } from '../services/products/getProducts.service';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  male=true;
  female=true;
  kids=true;
  tshirts=true;
  pants=true;
  shoes=true;
  prueba=true;
  filterGender=false;
  filterType=false;
  colorMale='primary';
  colorFemale='primary';
  colorKids='primary';
  colorTShirts='primary';
  colorPants='primary';
  colorShoes='primary';
  colorGender='primary';
  colorType='primary';
  titleMale='Ocultar Productos Masculinos';
  titleFemale='Ocultar Productos Femeninos';
  titleKids='Ocultar Productos Infantiles';
  titleTShirts='Ocultar Camisetas';
  titlePants='Ocultar Pantalones';
  titleShoes='Ocultar Zapatos';
  

  showFilter(id:string){
    if(id=='gender'){
      if(this.filterGender==false){
        return ((this.colorGender='danger')&&(this.colorType='primary')
        &&(this.colorMale='primary')&&(this.titleMale='Ocultar Productos Masculinos')&&(this.male=true)
        &&(this.colorFemale='primary')&&(this.titleFemale='Ocultar Productos Femeninos')&&(this.female=true)
        &&(this.colorKids='primary')&&(this.titleKids='Ocultar Productos Infantiles')&&(this.kids=true)
        &&(this.filterGender=true)&&(this.filterType=false))
      }else{
        return ((this.colorGender='primary')&&(this.filterGender=false)
        &&(this.colorMale='danger')&&(this.titleMale='Mostrar Productos Masculinos')&&(this.male=false)
        &&(this.colorFemale='danger')&&(this.titleFemale='Mostrar Productos Femeninos')&&(this.female=false)
        &&(this.colorKids='danger')&&(this.titleKids='Mostrar Productos Infantiles')&&(this.kids=false))
      }
    }else{
      if(id=='type'){
        if(this.filterType==false){
          return ((this.colorType='danger')&&(this.colorGender='primary')
          &&(this.colorTShirts='primary')&&(this.titleTShirts='Ocultar Camisetas')&&(this.tshirts=true)
          &&(this.colorPants='primary')&&(this.titlePants='Ocultar Pantalones')&&(this.pants=true)
          &&(this.colorShoes='primary')&&(this.titleShoes='Ocultar Zapatos')&&(this.shoes=true)
          &&(this.filterType=true)&&(this.filterGender=false))
        }else{
          return ((this.colorType='primary')&&(this.filterType=false)
          &&(this.colorTShirts='danger')&&(this.titleTShirts='Mostrar Camisetas')&&(this.tshirts=false)
          &&(this.colorPants='danger')&&(this.titlePants='Mostrar Pantalones')&&(this.pants=false)
          &&(this.colorShoes='danger')&&(this.titleShoes='Mostrar Zapatos')&&(this.shoes=false))
        }
      }
    }
    return false
  }

  

  showSuportView(id:string){
    if(id=='gender'){
      if(this.colorGender=='danger'){
        return (this.prueba=false)
      }else{
        return (this.prueba=true)
      }
    }else{
      if(id=='type'){
        if(this.colorType=='danger'){
          return (this.prueba=false)
        }else{
          return (this.prueba=true)
        }
      }
    }
    return false
  }

  showProductByGender(id:string){
    if(id=='male'){
      if(this.colorMale=='primary'){
        return ((this.colorMale='danger')&&(this.titleMale='Mostrar Productos Masculinos')&&(this.male=false))
      }else{
        return ((this.colorMale='primary')&&(this.titleMale='Ocultar Productos Masculinos')&&(this.male=true))
      }
    }else{
      if(id=='female'){
        if(this.colorFemale=='primary'){
          return ((this.colorFemale='danger')&&(this.titleFemale='Mostrar Productos Masculinos')&&(this.female=false))
        }else{
          return ((this.colorFemale='primary')&&(this.titleFemale='Ocultar Productos Femeninos')&&(this.female=true))
        }
      }else{
        if(id=='kids'){
          if(this.colorKids=='primary'){
            return ((this.colorKids='danger')&&(this.titleKids='Mostrar Productos Infantiles')&&(this.kids=false))
          }else{
            return ((this.colorKids='primary')&&(this.titleKids='Ocultar Productos Infantiles')&&(this.kids=true))
          }
        }
      }
    }
    return false
  }

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
  
  //crea el array products de tipo Product
  products:Product[];

  //guarda en la variable products la colección que retorna el servicio productsService con la funcion getProducts()
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(product=>{
      this.products=product;
    })
  }

}


