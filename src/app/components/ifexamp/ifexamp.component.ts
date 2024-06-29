import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifexamp',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ifexamp.component.html',
  styleUrl: './ifexamp.component.scss'
})
export class IfexampComponent {
  isEnable:string='India';

  isLogin:boolean=false;

  isSelect:boolean=true;

  login() {
    this.isLogin=true;
  }

  logout() {
    this.isLogin=false;
  }
  onchange(val:any){
this.isSelect=val;
  }

  num1:number=30;
  num2:number=30;
}
