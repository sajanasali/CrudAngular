import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators,FormBuilder} from '@angular/forms';
import { item } from '../Model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrl: './create-items.component.css'
})
export class CreateItemsComponent implements OnInit {

 
constructor(private fb:FormBuilder,private service:DataService){}
createForm:FormGroup=new FormGroup({})

ngOnInit() {
this.createForm=this.fb.group({
  name:this.fb.control('',Validators.required),
  description:this.fb.control('',Validators.required)
})

}

  



onSubmit(){
  console.log("form submitting")
if(this.createForm.valid){
   const items:item={
    name:this.createForm.value.name as string,
    description:this.createForm.value.description as string
   }
   console.log(items,"itemsssssssss")
   this.service.createItem(items).subscribe((res)=>{
    console.log(res)
  })
}
}


}
