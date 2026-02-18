import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'species-details',
  imports: [],
  templateUrl: './species-details.page.html',
  styleUrl: './species-details.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesDetailsPage { }
