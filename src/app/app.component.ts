import { Component, ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  secret = '6LeMTnAUAAAAAL-4tAWNedcXAj7mqToWYQ39ONPE';
  server = 'https://localhost:44316/Api/Auth/ReCaptchaVerifyUser';

  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  constructor(private http:HttpClient) { }

  handleCorrectCaptcha($event) {
    let token = this.captcha.getResponse();
    console.dir(token);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    debugger;
    return this.http.post(this.server, { response: token }, options).toPromise()
      .then(data => {
        console.dir(data);
      })
      .catch(error => {
        console.dir(error);
      });
    }
  }