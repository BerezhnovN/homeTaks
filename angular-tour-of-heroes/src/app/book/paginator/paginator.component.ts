import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    let url = window.location.href
    console.log(url.slice(url.length - 1))
  }

  onActive(page: number): string {
    let url = window.location.href
    return Number(url.slice(url.length - 1)) == page ? 'active' : 'notactive'
  }
}
