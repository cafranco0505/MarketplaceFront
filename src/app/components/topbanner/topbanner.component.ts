import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.css']
})
export class TopbannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (<any>$('.carousel')).carousel();
  }

}
