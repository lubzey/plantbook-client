import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faBoxOpen,
  faFile,
  faGear,
  faBars,
  faWarehouse,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface SidebarItem {
  routeLink: string;
  icon: IconDefinition;
  label: string;
}

@Component({
  selector: 'sidebar',
  imports: [RouterModule, CommonModule, FontAwesomeModule],
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
      routeLink: 'dashboard',
      icon: faHouse,
      label: 'Dashboard',
    },
    {
      routeLink: 'species',
      icon: faBoxOpen,
      label: 'Species',
    },
    {
      routeLink: 'varieties',
      icon: faFile,
      label: 'Varieties',
    },
    {
      routeLink: 'nurseries',
      icon: faGear,
      label: 'Nurseries',
    },
    {
      routeLink: 'gardens',
      icon: faWarehouse,
      label: 'Gardens',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
}
