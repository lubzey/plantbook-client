import { Component, OnInit, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0);

  onResize() {
    if (this.isBrowser) {
      this.screenWidth.set(window.innerWidth);
      if (this.screenWidth() < 768) {
        this.isLeftSidebarCollapsed.set(true);
      }
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.screenWidth.set(window.innerWidth);
      this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
