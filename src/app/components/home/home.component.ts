import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'start angular'
  customColorFromHome:string = 'white';
  constructor() { }

  ngOnInit(): void {
  }

}
