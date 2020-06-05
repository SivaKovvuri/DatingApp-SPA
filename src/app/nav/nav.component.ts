import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  ngOnInit() {}

  login() {
    console.log('Nav Component');
    console.log(this.model);
  }
}
