import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
title:string;
  constructor() { }

  ngOnInit() {
    this.title='Footer Text'
  }

}
