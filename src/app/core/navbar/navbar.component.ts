import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public title = "SGT";

  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngOnInit(): void {

  }

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  public navigateHome(){
    this.router.navigate(['/pages/home']);
  }

  public navigateUserList(){
    this.router.navigate(['/pages/users/list']);
  }

  public navigateTaskList(){
    this.router.navigate(['/pages/tasks/list']);
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
