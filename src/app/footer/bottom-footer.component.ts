import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-bottom-footer',
  template: `
    {{title}}
    <p class="text-muted">{{displayDate | date: 'dd/MM/yyyy HH:mm:ss'}}</p>
  `,
  styles: []
})
export class BottomFooterComponent implements OnInit {
private displayDate;  
title:string;
  constructor() {
    setInterval(() => {
          return this.displayDate = new Date();
      }, 1000);
   }

  ngOnInit() {
    this.title = 'Gary Guy Allin'
  }

}
