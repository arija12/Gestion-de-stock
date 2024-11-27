import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {




inscrire() {
this.router.navigateByUrl("/inscrire")

}
dash(){
  this.router.navigateByUrl("/dash")

}


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
