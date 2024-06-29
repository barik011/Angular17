import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switchexamp',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './switchexamp.component.html',
  styleUrl: './switchexamp.component.scss'
})
export class SwitchexampComponent {
  rating:number=2;
  // name:string='';
}
