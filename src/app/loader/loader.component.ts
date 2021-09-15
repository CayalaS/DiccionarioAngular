import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  carga = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.carga = true;
      } else if (e instanceof NavigationEnd) {
        this.carga = false;
      } 
    })
  }

}
