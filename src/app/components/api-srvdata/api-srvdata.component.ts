import { Component } from '@angular/core';
import { PostdataService } from '../../services/postdata.service';
import { Postdata } from '../../interface/postdata';
@Component({
  selector: 'app-api-srvdata',
  standalone: true,
  imports: [],
  templateUrl: './api-srvdata.component.html',
  styleUrl: './api-srvdata.component.scss'
})
export class ApiSrvdataComponent {
  data: any;

  getPostdata:Postdata[]=[];
  constructor(private postdataService: PostdataService) { 
    this.data = this.postdataService.getData()
}

  ngOnInit(){
    // this.postdataService.getPostData().subscribe((data: any) => {
    //   this.getPostdata = data
    // })
    this.postdataService.getPostData().subscribe({
      next:(resp:Postdata[])=>{
        this.getPostdata = resp;
      },
      error:(error:Error)=>{
        console.log(error);
      }
    })
}
}