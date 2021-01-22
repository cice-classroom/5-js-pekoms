import { customElement, property, LitElement, html } from 'lit-element'
import './Engine.ts'

@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message: string = 'TIC TAC TOE'

  render() {
    return html` <engine-component></engine-component> `
  }
}
