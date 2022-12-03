import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/iproduct.metadata';



@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() data: Product = {
    id:'',
    image: '',
    name: '',
    description: '',
    price: 0,
    type: '',
    news: false,
    tshirt: false,
    pant: false,
    shoe: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
