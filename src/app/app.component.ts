import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroupPreviewComponent } from './components/form-group/form-group.component';
import { NgForPreviewComponent } from './components/ng-for/ng-for.component';
import { SignalPreviewComponent } from './components/signal/signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormGroupPreviewComponent, NgForPreviewComponent, SignalPreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
