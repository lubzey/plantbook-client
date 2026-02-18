import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSeedling, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'home',
  imports: [FontAwesomeModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  faSeedling: IconDefinition = faSeedling;
}

