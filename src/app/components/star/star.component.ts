import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input()
  title:string = '';
  @Input()
  customColor: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
