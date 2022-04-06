import { Component } from '@angular/core';
import {HostServiceService} from "./host-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = 'Tour of Heroes';

  constructor(public host: HostServiceService) {
  }
  a : string | null = null;
  ngOnInit(): void {
      this.a = this.host.url;
  }

}


