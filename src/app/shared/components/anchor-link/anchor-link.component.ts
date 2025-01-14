import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-anchor-link',
  imports: [RouterLink, RouterModule],
  standalone: true,
  templateUrl: './anchor-link.component.html',
  styleUrls: ['./anchor-link.component.scss'],
})
export class AnchorLinkComponent {
  @Input() text: string = '';
  @Input() href: string = '';
}
