import { Component, Element, Host, h, Listen, State } from "@stencil/core";
import { TimeEmitterDetail } from "../time-emitter/types";

@Component({
  tag: "time-display",
  styleUrl: "time-display.css",
  shadow: true,
})
export class TimeDisplay {
  #children: HTMLElement[] = [];

  @Element() element: HTMLTimeDisplayElement;

  @State() timeString: string;

  @Listen("timeEmitterUpdate", {
    capture: true,
    passive: true,
    target: "document",
  })
  handleTimeChange({
    detail: { decimal, binaryCodedDecimal },
  }: {
    detail: TimeEmitterDetail;
  }) {
    this.timeString = `${decimal.hours}:${decimal.minutes}:${decimal.seconds}`;

    this.#children.map(
      (child: HTMLTimeDisplayBinaryElement | HTMLTimeDisplayDecimalElement) => {
        switch (child.nodeName) {
          case "TIME-DISPLAY-BINARY":
            child["timeValue"] = binaryCodedDecimal[child["timeKey"]];
            break;

          case "TIME-DISPLAY-DECIMAL":
          default:
            child["timeValue"] = decimal[child["timeKey"]];
            break;
        }
      }
    );
  }

  handleSlotchange() {
    this.#children = Array.from(this.element.children) as HTMLElement[];
  }

  render() {
    return (
      <Host>
        <time dateTime={this.timeString}>
          <slot onSlotchange={() => this.handleSlotchange()}></slot>
        </time>
      </Host>
    );
  }
}
