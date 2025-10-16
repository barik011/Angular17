import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-examp',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ngclass-examp.component.html',
  styleUrl: './ngclass-examp.component.scss'
})
export class NgClassExampComponent {
  title:string="NG Class Example"
  isEnable:string='India';
  employees=[
    {
      id:'001',
      name:'Govind Kumar',
      address:'Bihar',
      country:'India'
  },
  {
    id:'002',
    name:'Sohail Khan',
    address:'Lahore',
    country:'Pakistan'
},
{
  id:'003',
  name:'Jone',
  address:'London',
  country:'UK'
},
{
  id:'004',
  name:'Vinood',
  address:'Dharan',
  country:'Nepal'
}
]

// bdColor(bgColor:any){
//   switch(bgColor){
//     case 'India': 
//     return 'bg-primary';

//     case 'Nepal': 
//     return 'bg-secondry';

//     case 'Pakistan': 
//     return 'bg-danger';

//     case 'UK': 
//     return 'bg-success';
//   }

//}
}
