import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cuebana';
  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  visibility:boolean=false;

  ngOnInit(){
    this.router.events.pipe(
    filter(events=>events instanceof NavigationEnd),
    map(evt =>this.activatedRoute),
    map(route => {
      while(route.firstChild) {
      route = route.firstChild;
    }
    return route;
    }))
    .pipe(
    filter(route => route.outlet === 'primary'),
    mergeMap(route => route.data))
    .subscribe(x=>x['menu']===true ?this.visibility=true:this.visibility=false)
    }
}


