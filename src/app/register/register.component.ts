import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm:FormGroup
	submitted:boolean

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  	this.submitted = false
  	this.registerForm = this.formBuilder.group({
  		firstname:['',Validators.required],
  		lastname:['',Validators.required],
  		username:['',[Validators.required,Validators.minLength(6)]],
  		email:['',[Validators.required,Validators.email]],
  		password:['',[Validators.required,Validators.minLength(8)]],
  		cpassword:['',Validators.required]
  	},{
  		validator:this.passmatch('password','cpassword')
  	})
  }

  get validation(){
  	return this.registerForm.controls;
  }

  passmatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        let control = formGroup.controls[controlName];
        let matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

  onRegister(){
  	this.submitted = true
  	if(this.registerForm.invalid){
  		return;
  	}

  	let value = JSON.stringify(this.registerForm.value)

  	alert('sucecss' + value)
  }

}
