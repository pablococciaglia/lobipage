import { Component, input } from '@angular/core';

@Component({
  selector: 'alert-success',
  imports: [],
  templateUrl: './alert-success.html',
})
export class AlertSuccess {
  text = input.required<string>();
}
