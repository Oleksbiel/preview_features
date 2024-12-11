import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CoreModule } from '@web/core';

@Component({
  standalone: true,
  imports: [CoreModule],
  selector: 'signal-preview',
  templateUrl: './signal.component.html',
})
export class SignalPreviewComponent implements OnInit {
  counter = signal<number>(0);
  doubleCounter = computed(() => this.counter() * 2);

  someMessage: string;

  constructor() {
    effect(() => {
      this.someMessage = `Counter is ${this.counter()}`;
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.counter.set(10);
    }, 3000);
  }

  onIncrement() {
    this.counter.update((value) => value + 1);
  }
  onDecrement() {
    this.counter.update((value) => value - 1);
  }
}
