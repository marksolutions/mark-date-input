import { html, LitElement } from "lit";
import "../src/mark-date-input";

export class MarkDateInputDemo extends LitElement {
  render() {
    return html`<mark-date-input></mark-date-input>`
  }
}

customElements.define('mark-date-input-demo', MarkDateInputDemo)