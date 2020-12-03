import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted:boolean=false;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.onsubmit();
  }
  onsubmit(){
    this.isSubmitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        } else{
          let email=this.loginForm.value.email;
          let password = this.loginForm.value.password;
          
          if(email=="superadmin@mrmsbeautysalon.com" && password=="LXFkwJP5"){
            this.router.navigate(['/admin-list']);
          } else{
            alert('please enter valid')
          }
        }

  }
}
