import { Component } from '@angular/core';
import { ClickableDivComponent } from './components/clickable-div/clickable-div.component';
import { TranslateService } from '../../core/services/translate.service';
import { TranslatePipe } from '../../core/pipes/translate.pipe';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [ClickableDivComponent, TranslatePipe],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent {
  constructor(public translateService: TranslateService) {}
}
