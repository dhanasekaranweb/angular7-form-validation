import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm:FormGroup
	submitted:boolean

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  	this.submitted = false
  	this.loginForm = this.formBuilder.group({
  		username:['',Validators.required],
  		password:['',Validators.required]
  	})
  }

  get validation(){
  	return this.loginForm.controls;
  }

  onSubmit(){
  	this.submitted = true
  	if(this.loginForm.invalid){
  		return;
  	}

  	let value = JSON.stringify(this.loginForm.value)

  	alert('sucecss' + value)
  }
}
