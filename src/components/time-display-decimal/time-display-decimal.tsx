import { Component, Host, h, Prop } from "@stencil/core";
import { DecimalDetail } from "../time-emitter/types";

@Component({
  tag: "time-display-decimal",
  styleUrl: "time-display-decimal.css",
  shadow: true,
})
export class TimeDisplayDecimal {
  @Prop() timeValue: string;
  @Prop() timeKey: keyof DecimalDetail;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
