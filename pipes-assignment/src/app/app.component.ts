import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { CensorPhonePipe } from './censor-phone.pipe';
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, CensorPhonePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'pipes-assignment';
  obs$!: Observable<User[]>;
  constructor(private http: HttpClient) {
    this.obs$ = this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.obs$.subscribe((data) => console.log(data));
  }
}
