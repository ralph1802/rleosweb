import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../../../shared/components/primary-button/primary-button.component';
import { TranslatePipe } from '../../../../core/pipes/translate.pipe';
import { SecundaryButtonComponent } from '../../../../shared/components/secundary-button/secundary-button.component';
import { TranslateService } from '../../../../core/services/translate.service';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [PrimaryButtonComponent,
            TranslatePipe,
            SecundaryButtonComponent,],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  constructor(public translateService: TranslateService) {}

    onDownloadCv() {
      console.log('Download CV clicked!');
    }

    onViewPortfolio() {
      console.log('View Portfolio clicked!');
    }
}
