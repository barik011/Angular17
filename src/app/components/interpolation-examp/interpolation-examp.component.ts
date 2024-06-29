import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-examp',
  standalone: true,
  imports: [],
  templateUrl: './interpolation-examp.component.html',
  styleUrl: './interpolation-examp.component.scss'
})
export class InterpolationExampComponent {
  name = 'Govind Kumar';

  num1 = 10;
  num2 = 20;
  num3 = 30;


  empData:any = 
  {
  id:'001',
  name:'Mohan Kumar',
  address:'Bihar',
  Mobile:'999999999'
}


col=3;
// empData: any;


}
