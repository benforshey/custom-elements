import { Component, Event, Host, h, Prop, EventEmitter } from '@stencil/core';
import { calcTime } from './time-emitter.worker';
import { TimeEmitterDetail } from './types';

/** Makes use of Temporal polyfill (https://tc39.es/proposal-temporal/docs/index.html), so don't use this in a production environment. */
@Component({
  tag: 'time-emitter',
  styleUrl: 'time-emitter.css',
  shadow: true,
})
export class TimeEmitter {
  #intervalId: number;

  @Prop() updateInterval: number = null;

  @Event({ bubbles: false, cancelable: false, composed: true })
  timeEmitterUpdate: EventEmitter<TimeEmitterDetail>;

  async componentDidLoad() {
    if (!!this.updateInterval) {
      this.#intervalId = window.setInterval(
        async () => this.timeEmitterUpdate.emit(await calcTime()),
        this.updateInterval,
      );
    }

    this.timeEmitterUpdate.emit(await calcTime());
  }

  disconnectedCallback() {
    window.clearInterval(this.#intervalId);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
