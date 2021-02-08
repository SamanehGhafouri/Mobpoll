import {Component} from '@angular/core';
import {Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {

  current_url_path: string;

  constructor(private router: Router) {

    let route_event_filter = filter((e): e is RouterEvent => e instanceof RouterEvent)
    router.events.subscribe((val) => {
      router.events.pipe(route_event_filter).subscribe((e: RouterEvent) => {
        this.current_url_path = e.url;
      });
    })
  }

  onClick(url_path: string) {
    if (this.current_url_path == url_path) {
      return 'currently-selected';
    } else {
      return 'active';
    }
  }
}
