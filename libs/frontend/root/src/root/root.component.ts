import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DEVICE } from '@app/frontend-utils';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  isHandset = inject(DEVICE);
}
