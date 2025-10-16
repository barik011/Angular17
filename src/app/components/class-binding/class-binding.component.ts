import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  standalone: true,
  imports: [],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.scss'
})
export class ClassBindingComponent {
  title:string="Class Binding Example";
  dynamicClass = 'bgColorClass-2 fontSizeClass-3 fontWeightClass-2';

  isValid:boolean = true;
}
