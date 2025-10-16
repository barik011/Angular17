import { Component } from '@angular/core';

@Component({
  selector: 'app-property-examp',
  standalone: true,
  imports: [],
  templateUrl: './property-examp.component.html',
  styleUrl: './property-examp.component.scss'
})
export class PropertyExampComponent {
  title:string="Property Binding and Interpolation Example"

  name = 'Govind Kumar';
  imgPath1 = './assets/bg-img1.jpg';
  imgPath2 = './assets/product-img3.jpg';
}
