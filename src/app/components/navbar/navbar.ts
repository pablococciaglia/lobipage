import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialNetworkButtons } from '../social-network-buttons/social-network-buttons';
import { appRoutes } from '../../interfaces/routes.interface';
import { NavbarButton } from '../navbar-buttons/navbar-button';

@Component({
  selector: 'app-navbar',
  imports: [NavbarButton, RouterLink, SocialNetworkButtons],
  templateUrl: './navbar.html',
})
export class Navbar {
  appRoutes = appRoutes;
}
