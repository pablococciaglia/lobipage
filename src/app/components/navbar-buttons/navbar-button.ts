import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar-button',
  imports: [RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './navbar-button.html',
})
export class NavbarButton {
  path = input.required<string>();
  label = input.required<string>();
  fontBold = input<boolean>(false);
}
