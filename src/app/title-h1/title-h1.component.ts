import { Component, Input, OnInit } from '@angular/core';
import { ITitleH1 } from './ititle-h1.metadata';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.css']
})
export class TitleH1Component implements OnInit {
  
  @Input() data: ITitleH1 = {
    text: '',
    type: 'primary'
  }
  // @Input() text = '';
  // @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';


  
  constructor() { }

  ngOnInit(): void {
  }

}
