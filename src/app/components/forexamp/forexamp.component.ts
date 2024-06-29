import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forexamp',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './forexamp.component.html',
  styleUrl: './forexamp.component.scss'
})
export class ForexampComponent {
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
}
