
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})
export class FirstCompComponent {
  private apiUrl = 'http://localhost:3000/api/list';
  flag1:boolean=false;
newTasks:any='';
newId: number = 0;  
datas:any;
constructor(private httpClient:HttpClient){

}
ngOnInit(){

}

  addTask=new FormGroup(
    {
      task:new FormControl(''),
      eta: new FormControl(''),
      remarks:new FormControl(''),
    
    }
  )
 
  getTasks(){
   
try{
  this.httpClient.get<any[]>(this.apiUrl).subscribe({
next:(data)=>{
  this.datas=data;
  this.flag1=!this.flag1;
},
error:(err)=>{
  console.log("there is a error:",err)
},
  })
}
catch(error){
  console.error('Unexpected error:', error);

} }


closeTask(){
  this.flag1=false;
}
  
add():void{
  console.log('post api is hit')
  const newTask = {
    task: this.addTask.value.task,
    eta: this.addTask.value.eta,
    remarks: this.addTask.value.remarks,
  };
 
try{
  this.httpClient.post(this.apiUrl, newTask).subscribe({
    next:(response)=>{
      console.log('Task added successfully:', response);
      alert('Task added successfully!');
      this.addTask.reset(); 
      this.getTasks(); 
    },
    error:(err)=>{
      console.log(err);
    },
  })
}
catch(error){
  console.error('Unexpected error:', error);
}
}
}