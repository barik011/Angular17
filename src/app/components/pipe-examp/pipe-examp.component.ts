// import { LowerCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomePipePipe } from '../../pipes/custome-pipe.pipe';

@Component({
  selector: 'app-pipe-examp',
  standalone: true,
  imports: [CommonModule,CustomePipePipe],
  templateUrl: './pipe-examp.component.html',
  styleUrl: './pipe-examp.component.scss'
})
export class PipeExampComponent {
    title: string = "lorem ipsum dolor sit amet consectetur adipiscing elit";

    num1: number = 10.564258;

    num2:number= 543.2;

    numberPer: number = 7.5;

    student={
        name:'Govind Kumar',
        address:'Bihar',
        mobile:'999999999'
    }

    employees: any[] = [
        { id: 1, name: 'Mohan', address: 'Delhi' },
        { id: 2, name: 'Ram', address: 'Mumbai' },
        { id: 3, name: 'Krishna', address: 'Chennai' },
        { id: 4, name: 'Ravi', address: 'Kolkata' },  ]

        today: Date = new Date();

        amount: number = 658;
}
