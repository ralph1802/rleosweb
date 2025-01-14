import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-link',
  standalone: true,
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.scss'],
})
export class ImageLinkComponent {
  @Input() src: string = '';
  @Input() href: string = '#';
  @Input() target: string = '_self';
  @Input() rel: string = 'noopener noreferrer';
}
