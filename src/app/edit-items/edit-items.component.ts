import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { item } from '../Model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrl: './edit-items.component.css'
})
export class EditItemsComponent implements OnInit {
constructor(private service:DataService,private route:ActivatedRoute,private router:Router){}
itemId:string|null='';
itemData:any;
editForm:FormGroup=new FormGroup({})
itemd!:item;
 ngOnInit(): void {
   this.itemId=this.route.snapshot.paramMap.get('id')
   console.log(this.itemId,"iddddddddd")

   if(this.itemId){
  
    this.getItem(this.itemId)
   }
 }
  

  

  getItem(id:string){
   
    this.service.getItem(id).subscribe((res)=>{
      this.itemData=res
  console.log(res)
    })
  }
  UpdateItem():void{
   debugger;
   if(this.itemId){
    this.service.updateItem(this.itemId,this.itemData).subscribe((res)=>{
      console.log(res)
    })
   }
  this.router.navigate(['/'])
 
  }
}
