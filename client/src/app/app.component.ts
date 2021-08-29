import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UVolunteer';
  users:any;
  constructor(private http: HttpClient){
  }
  getUsers(){
    this.http.get('https://localhost:5001/api/User').subscribe(result=>{
      this.users = result;
  },error=>{
    console.log(error);
  })}

  ngOnInit(){
this.getUsers();
    }
    }

