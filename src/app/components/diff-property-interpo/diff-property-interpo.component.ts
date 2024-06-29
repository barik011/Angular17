import { Component } from '@angular/core';

@Component({
  selector: 'app-diff-property-interpo',
  standalone: true,
  imports: [],
  templateUrl: './diff-property-interpo.component.html',
  styleUrl: './diff-property-interpo.component.scss'
})
export class DiffPropertyInterpoComponent {

  name:string='Govind Kumar';

  isEnable:boolean=true;
  showHide(){
    this.isEnable=!this.isEnable;
  }
}
