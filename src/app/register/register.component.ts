import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  	this.registerForm = this.formBuilder.group({
  		username:['',[Validators.required,Validators.minLength(6)]],
  		email:['',Validators.required],
  		password:['',Validators.required]
  	})
  }

  get validation(){
  	return this.registerForm.controls;
  }

  onRegister(){
  	console.log(this.registerForm.controls)
  }

}
