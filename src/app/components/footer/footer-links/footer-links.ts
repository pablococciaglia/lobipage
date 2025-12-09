import { Component, input } from '@angular/core';

@Component({
  selector: 'footer-links',
  imports: [],
  templateUrl: './footer-links.html',
})
export class FooterLinks {
  href = input.required<string>();
}
