import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {
login() {
  this.router.navigateByUrl("/login")

}

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
