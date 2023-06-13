import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoImg: string = "https://st2.depositphotos.com/1364916/6359/v/600/depositphotos_63590137-stock-illustration-blue-book-logo-vector.jpg"
  logoText: string = "Lending Library"
}
