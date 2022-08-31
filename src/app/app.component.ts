import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type Dog = {
  id: number;
  name: string;
  age: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs() {
    this.http.get('http://localhost:3000/dogs').subscribe((value) => {
      const dogs = value as Dog[];

      this.dogs = dogs;
    });
  }
}
