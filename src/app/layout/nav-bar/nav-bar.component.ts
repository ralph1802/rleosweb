import { Component } from '@angular/core';
import { AnchorLinkComponent } from "../../shared/components/anchor-link/anchor-link.component";
import { ImageLinkComponent } from "../../shared/components/image-link/image-link.component";
import { LanguageToggleNavbarComponent } from "../../shared/components/language-toggle-navbar/language-toggle-navbar.component";
import { TranslatePipe } from "../../core/pipes/translate.pipe";
import { TranslateService } from '../../core/services/translate.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    AnchorLinkComponent,
    ImageLinkComponent,
    LanguageToggleNavbarComponent,
    TranslatePipe
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public translateService: TranslateService) {}
}
