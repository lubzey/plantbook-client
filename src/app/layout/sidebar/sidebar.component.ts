import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
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
  faBoxOpen,
  faTrowel,
  faFile,
  faGear,
  faBars,
  faWarehouse,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();

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
      icon: faCartShopping, // faGear,
      label: 'Nurseries',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
}
