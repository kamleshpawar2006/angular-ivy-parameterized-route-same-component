import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-temp',
  templateUrl: './dropdown-temp.component.html',
  styleUrls: ['./dropdown-temp.component.css'],
})
export class DropdownTempComponent implements OnInit {
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    console.log('ji');
  }

  dropdownchange(event) {
    this.router.navigate(['dropdown', event.target.value]);
  }
}
