import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { CustomvalidatorsService } from '../services/customvalidators.service';
import { LoginserviceService } from '../services/loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
 
  constructor(private fb:FormBuilder,private customValidator: CustomvalidatorsService,private logservice:LoginserviceService){}
  loginForm=new FormGroup({
   
      email1:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])
    })
 

 
  
  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    let data=this.loginForm.value;
    if (this.loginForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.loginForm.value);
      this.logservice.sendData(data) .subscribe(data=>{
        console.log(data, "from backend")
      })
    }
  }
  

  /*submit(){
   
  
  
    let data =this.loginForm.value;
    if(this.loginForm.valid){
    alert("Login Successful")
  }
  else
  {
     alert("Login Failed")
  }
    console.log("hai")
    //console.log(this.email);
    //console.log(this.password);
    console.log("form data ts file",data)

 }*/
 
}
