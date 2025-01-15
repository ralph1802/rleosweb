import { Component } from '@angular/core';
import { OpenButtonComponent } from './components/open-button/open-button.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { AnchorLinkComponent } from '../../shared/components/anchor-link/anchor-link.component';
import { LanguageToggleNavbarComponent } from "../../shared/components/language-toggle-navbar/language-toggle-navbar.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [OpenButtonComponent,
    CloseButtonComponent,
    CommonModule,
    AnchorLinkComponent,
    TranslatePipe,
    LanguageToggleNavbarComponent],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(public translateService: TranslateService) {}
}
