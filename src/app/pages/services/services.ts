import { Component } from '@angular/core';
import { Title } from '../../components/title/title';
import { servicesTexts } from './texts';

@Component({
  selector: 'app-services',
  imports: [Title],
  templateUrl: './services.html',
})
export class Services {
  servicesTexts = servicesTexts;
  colorChange(idx: number) {
    switch (idx % 3) {
      case 0:
        return 'bg-(--my-color1)/50';
      case 1:
        return 'bg-(--my-color2)/50';
      case 2:
        return 'bg-(--my-color3)/50';

      default:
        return 'bg-(--my-color1)/50';
    }
  }
}
