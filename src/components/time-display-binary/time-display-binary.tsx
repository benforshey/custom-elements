import { Component, Host, h, Prop } from "@stencil/core";
import { BinaryCodedDecimalDetail } from "../time-emitter/types";

@Component({
  tag: "time-display-binary",
  styleUrl: "time-display-binary.css",
  shadow: true,
})
export class TimeDisplayBinary {
  @Prop() timeValue: string[];
  @Prop() timeKey: keyof BinaryCodedDecimalDetail;

  render() {
    return (
      <Host>
        {this.timeValue?.map((binaryColumn) => {
          const iterator = binaryColumn.split("");

          return (
            <span class="column">
              {iterator.map((digit) => {
                return (
                  <svg
                    aria-hidden="true"
                    slot="icon"
                    viewBox="0 0 100 100"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      style={{
                        fill:
                          digit === "1"
                            ? "var(--circle--on)"
                            : "var(--circle--off)",
                      }}
                    />
                  </svg>
                );
              })}
            </span>
          );
        })}
      </Host>
    );
  }
}
