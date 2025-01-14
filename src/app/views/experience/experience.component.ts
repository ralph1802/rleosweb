import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../shared/components/primary-button/primary-button.component';
import { TranslateService } from '../../core/services/translate.service';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { TargetExperienceComponent } from './components/target-experience/target-experience.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [PrimaryButtonComponent, TranslatePipe, TargetExperienceComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  constructor(public translateService: TranslateService) {}

  onDownloadCv() {
    console.log('Download CV clicked!');
  }
}
