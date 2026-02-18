import { Component, OnInit, signal, PLATFORM_ID, inject, ChangeDetectionStrategy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faSeedling,
  faTrowel,
  faBars,
  faDiagramProject,
  faCartShopping,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface SidebarItem {
  routeLink: string;
  icon: IconDefinition;
  label: string;  
}

@Component({
  selector: 'sidebar',
  imports: [
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  isLeftSidebarCollapsed = signal<boolean>(false);

  // Icons for the header
  faBars = faBars;

  items: SidebarItem[] = [
    {
      routeLink: '',
      icon: faHouse,
      label: 'Home',
    },
    {
      routeLink: 'species',
      icon: faSeedling,
      label: 'Species',
    },
    {
      routeLink: 'varieties',
      icon: faDiagramProject,
      label: 'Varieties',
    },
    {
      routeLink: 'gardens',
      icon: faTrowel,
      label: 'Gardens',
    },
    {
      routeLink: 'nurseries',
      icon: faCartShopping,
      label: 'Nurseries',
    },
  ];

  ngOnInit(): void {
    if (this.isBrowser) {
      // Set initial collapsed state based on screen width
      this.isLeftSidebarCollapsed.set(window.innerWidth < 768);
    }
  }

  toggleCollapse(): void {
    this.isLeftSidebarCollapsed.set(!this.isLeftSidebarCollapsed());
  }
}
