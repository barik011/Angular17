import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-examp',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ng-style-examp.component.html',
  styleUrl: './ng-style-examp.component.scss'
})
export class NgStyleExampComponent {
  employees=[
    {
      id:'001',
      name:'Arun',
      department:'Instrument',
      location:'Delhi'
  },
  {
    id:'002',
    name:'Mumtaz Ali',
    department:'Computer',
    location:'Patna'
},
{
  id:'003',
  name:'Kamal Dev',
  department:'ITI',
  location:'Kolkata'
},
{
  id:'004',
  name:'Varun',
  department:'Machnical',
  location:'Noida'
}
]

getColor(locate:any){
  switch(locate){
    case 'Delhi': 
    return 'blue';

    case 'Noida': 
    return 'red';

    case 'Kolkata': 
    return 'pink';

    case 'Patna': 
    return 'green';

    default: 
    return 'black';
  }
  return null;
}
}
