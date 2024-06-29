import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  onAlert() {
    alert('Alert Box 1');
  }
  onAlert1() {
    alert('Alert Box 2');
  }
  name:string='';
  onChangeName(val:any) {
    this.name = val;
  }

  usrname:string='';
}
