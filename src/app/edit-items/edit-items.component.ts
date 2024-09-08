import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrl: './edit-items.component.css'
})
export class EditItemsComponent implements OnInit {
constructor(private service:DataService,private route:ActivatedRoute){}
itemId:string|null='';
itemData:any;
editForm:FormGroup=new FormGroup({})
 ngOnInit(): void {
   this.itemId=this.route.snapshot.paramMap.get('id')
   console.log(this.itemId,"iddddddddd")

   if(this.itemId){
    this.getItem(this.itemId)
   }
 }
  

  

  getItem(id:string){
    console.log("edit itemmmmm")
    this.service.getItem(id).subscribe((res)=>{
      this.itemData=res
  console.log(res)
    })
  }
}
