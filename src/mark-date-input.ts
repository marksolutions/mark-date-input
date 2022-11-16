import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("mark-date-input")
export class MarkDateInput extends LitElement {
  static styles?: CSSResultGroup | undefined = [css``];

  @query("input")
  input!: HTMLElement;

  /**
   * The input control's value.
   */
  @property({ type: String })
  value: string = "";

  render() {
    return html` <input /> `;
  }
}
