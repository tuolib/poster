import { Component } from '@angular/core';
import { Router } from '@angular/router';

// 引入服务
import { SignService } from '../../services/sign.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name = '';
  mobile = '';
  email = '';
  tips = '';
  successWord = '';

  constructor(private services: SignService, private router: Router) {}
  signUp(): void {
    if (this.trim(this.name) === '') {
      this.tips = 'name is required.';
      return;
    }
    if (this.trim(this.mobile) === '') {
      this.tips = 'mobile is required.';
      return;
    }
    if (this.trim(this.email) === '') {
      this.tips = 'email is required.';
      return;
    }
    this.tips = '';
    this.successWord = '';
    const data = {
      name: this.name,
      mobile: this.mobile,
      email: this.email
    };
    this.services.signUp(data).subscribe(
      res => {
        console.log(res);
        if (res.success === 1) {
          console.log(1);
          this.successWord = res.respMsg;
        } else {
          console.log(2);
          this.tips = res.respMsg;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  trim(str: string): string {
    const reg = /^\s+|\s+$/g;
    return str.replace(reg, '');
  }
}
