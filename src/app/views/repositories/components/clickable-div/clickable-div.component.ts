import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clickable-div',
  standalone: true,
  imports: [],
  templateUrl: './clickable-div.component.html',
  styleUrl: './clickable-div.component.scss'
})
export class ClickableDivComponent {
  @Input() url: string = '';
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  redirectToUrl() {
    if (this.url) {
      window.location.href = this.url;
    }
  }
}
