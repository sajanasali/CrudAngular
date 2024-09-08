import { Component, OnInit } from '@angular/core';
import { item } from '../Model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
datas!:any;
constructor(private service:DataService,private router:Router){}
ngOnInit(): void {
  this.getData()
}

getData(){
  console.log("get data")
  this.service.getData().subscribe((res:any)=>{
    console.log(res)
    this.datas=res 
    
  })
}
deletItem(id:string){
  console.log("delert itemmm")
  this.service.deleteItem(id).subscribe((res)=>{
    console.log(res)
  })
}
editItem(id:string){
this.router.navigate(['/edit',id])
}
}
