import { Component } from '@angular/core';
import { PostdataService } from '../../services/postdata.service';

@Component({
  selector: 'app-deffer',
  standalone: true,
  imports: [],
  templateUrl: './deffer.component.html',
  styleUrl: './deffer.component.scss'
})
export class DefferComponent {
  prodData:any[]=[];

    constructor(private productServices:PostdataService){
    }

    ngOnInit(){
       this.productServices.getProductData().subscribe({
        next:(res:any[])=>{
          this.prodData=res;
          console.log(this.prodData);
        },
        error(error){
          console.log(error);
        }
       })
    } 
}
