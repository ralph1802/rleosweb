import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { TranslateService } from '../../core/services/translate.service';
import { ImageLinkComponent } from '../../shared/components/image-link/image-link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, ImageLinkComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public translateService: TranslateService) {}
}
