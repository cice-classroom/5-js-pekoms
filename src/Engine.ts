import { LitElement, html, property, customElement, css } from 'lit-element'
@customElement('engine-component')
export class Engine extends LitElement {
  @property() name = 'World'

  static get styles() {
    return css`
      .gameDisplay {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        color: black;
      }
      .gameBoard {
        display: flex;
        justify-content: center;
      }
      .wrapper {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-gap: 10px;
        background-color: #fff;
        color: #444;
      }

      .box {
        background-color: #444;
        color: #fff;
        border-radius: 5px;
        padding: 20px;
        font-size: 150%;
        text-align: center;
      }
      #reset {
        background-color: red;
        color: white;
        border-radius: 5px;
        padding: 20px;
        font-size: 100%;
        text-align: center;
      }
    `
  }

  render() {
    return html`
      <div class="gameDisplay">
        <h2>TIC TAC TOE GAME</h2>
        <div id="subTitle">
          <h2 id="player1">Player X:</h2>
          <h2 id="player2">Player O:</h2>
        </div>

        <div class="gameBoard">
          <div class="wrapper">
            <button id="1" class="box" @click="${this.markBox}"></button>
            <button id="2" class="box"></button>
            <button id="3" class="box"></button>
            <button id="4" class="box"></button>
            <button id="5" class="box"></button>
            <button id="6" class="box"></button>
            <button id="7" class="box"></button>
            <button id="8" class="box"></button>
            <button id="9" class="box"></button>
            <button id="reset" class="box">Reset</button>
          </div>
        </div>
      </div>
    `
  }

  markBox() {
    console.log('casilla marcada')
  }
}
