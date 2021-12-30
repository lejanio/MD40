import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = [
    {
      path: 'users',
      title: 'Lietotāji',
    },
    {
      path: 'planner',
      title: 'Plānotājs',
    },
    {
      path: 'about',
      title: 'Par',
    },
  ]

  ngOnInit(): void {
  }

}
