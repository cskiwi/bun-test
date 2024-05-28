import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { derivedAsync } from 'ngxtension/derived-async';

@Component({
  standalone: true,
  imports: [RouterModule, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly httpClient = inject(HttpClient);
  movie = derivedAsync(() => this.httpClient.get(`/api/backend-test`));
}
