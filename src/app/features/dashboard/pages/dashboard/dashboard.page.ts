import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSeedling, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dashboard',
  imports: [FontAwesomeModule],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  faSeedling: IconDefinition = faSeedling;
}
