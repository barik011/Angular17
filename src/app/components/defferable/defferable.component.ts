import { Component } from '@angular/core';
import { PostdataService } from '../../services/postdata.service';

@Component({
  selector: 'app-defferable',
  standalone: true,
  imports: [],
  templateUrl: './defferable.component.html',
  styleUrl: './defferable.component.scss'
})
export class DefferableComponent {
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
