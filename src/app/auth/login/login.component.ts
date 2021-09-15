import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  })

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    /*const userData = {
      username: "admin@admin.com",
      password: "admin123"
    };*/
  }

  onlogin(){
    const formValue = this.loginForm.value;
    console.log(formValue);

    this.authService.login(formValue).subscribe(res => {
      console.log(res)
      if (res) {
        this.router.navigate(['/inicio']);
      }
    })
  }

}
