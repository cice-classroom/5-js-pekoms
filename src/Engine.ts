import { LitElement, html, property, customElement, css } from 'lit-element'
@customElement('engine-component')
export class Engine extends LitElement {
  @property() name = 'World'
  currentPlayer:string
  casilla:Array<number>
  casillaValue:Array<string>


  constructor() {
    super();
    this.currentPlayer = 'X';
    this.casilla = [0,1,2,3,4,5,6,7,8];
    this.casillaValue = ['','','','','','','','','',]; 
  }

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
          <h2 id="player1">Player X:${this.currentPlayer}</h2>
          <h2 id="player2">Player O:</h2>
        </div>

        <div class="gameBoard">
          <div class="wrapper">
            <button id="${this.casilla[0]}" class="box" @click="${()=>this.markBox(this.casilla[0])}">${this.casillaValue[0]}</button>
            <button id="${this.casilla[1]}" class="box" @click="${()=>this.markBox(this.casilla[1])}">${this.casillaValue[1]}</button>
            <button id="${this.casilla[2]}" class="box" @click="${()=>this.markBox(this.casilla[2])}">${this.casillaValue[2]}</button>
            <button id="${this.casilla[3]}" class="box" @click="${()=>this.markBox(this.casilla[3])}">${this.casillaValue[3]}</button>
            <button id="${this.casilla[4]}" class="box" @click="${()=>this.markBox(this.casilla[4])}">${this.casillaValue[4]}</button>
            <button id="${this.casilla[5]}" class="box" @click="${()=>this.markBox(this.casilla[5])}">${this.casillaValue[5]}</button>
            <button id="${this.casilla[6]}" class="box" @click="${()=>this.markBox(this.casilla[6])}">${this.casillaValue[6]}</button>
            <button id="${this.casilla[7]}" class="box" @click="${()=>this.markBox(this.casilla[7])}">${this.casillaValue[7]}</button>
            <button id="${this.casilla[8]}" class="box" @click="${()=>this.markBox(this.casilla[8])}">${this.casillaValue[8]}</button>
            <button id="reset" class="box">Reset</button>
          </div>
        </div>
      </div>
    `
  }

  markBox(value:number) {
    try {
      const aux =this.shadowRoot!.getElementById(this.casilla[value].toString())!
      switch(value)
      {
        case 0:aux.innerHTML=this.currentPlayer;
                this.casillaValue[value]=this.currentPlayer;
          break;
        case 1:aux.innerHTML=this.currentPlayer;
                this.casillaValue[value]=this.currentPlayer;
          break;
        case 2:aux.innerHTML=this.currentPlayer;
               this.casillaValue[value]=this.currentPlayer;
          break;
        case 3:aux.innerHTML=this.currentPlayer;
               this.casillaValue[value]=this.currentPlayer;
          break;
        case 4:aux.innerHTML=this.currentPlayer;
               this.casillaValue[value]=this.currentPlayer;
          break;
        case 5:aux.innerHTML=this.currentPlayer;
               this.casillaValue[value]=this.currentPlayer;
          break;
        case 6:aux.innerHTML=this.currentPlayer;
               this.casillaValue[value]=this.currentPlayer;
          break;
        case 7:aux.innerHTML=this.currentPlayer;
               this.casillaValue[value]=this.currentPlayer;
          break;
        case 8:aux.innerHTML=this.currentPlayer;
               this.casillaValue[value]=this.currentPlayer;
          break;
      }
      
      this.checkWinner(value);
      this.changeCurrentPlayer(this.currentPlayer);
    } catch (error) {
      console.log(error.toString());
    }
   
  }

  changeCurrentPlayer(value:string)
  {
    if(value=="X")
    {
      this.currentPlayer="Y"
    }
    else{
      this.currentPlayer="X"
    }
  }

  checkWinner(value:number)
  {
    switch(value)
    {
      case 0: if((this.casillaValue[0]==this.currentPlayer && this.casillaValue[1]==this.currentPlayer && this.casillaValue[2]==this.currentPlayer)
                 || (this.casillaValue[0]==this.currentPlayer && this.casillaValue[3]==this.currentPlayer && this.casillaValue[6]==this.currentPlayer)
                 || (this.casillaValue[0]==this.currentPlayer && this.casillaValue[4]==this.currentPlayer && this.casillaValue[8]==this.currentPlayer))
                 {
                  console.log("Player "+ this.currentPlayer + " Won");
                 }

        break;
      case 1: if((this.casillaValue[0]==this.currentPlayer && this.casillaValue[1]==this.currentPlayer && this.casillaValue[2]==this.currentPlayer)
                || (this.casillaValue[1]==this.currentPlayer && this.casillaValue[4]==this.currentPlayer && this.casillaValue[7]==this.currentPlayer))
                {
                console.log("Player "+ this.currentPlayer + " Won");
                }
        break;
      case 2: if((this.casillaValue[0]==this.currentPlayer && this.casillaValue[1]==this.currentPlayer && this.casillaValue[2]==this.currentPlayer)
                || (this.casillaValue[2]==this.currentPlayer && this.casillaValue[5]==this.currentPlayer && this.casillaValue[8]==this.currentPlayer)
                || (this.casillaValue[2]==this.currentPlayer && this.casillaValue[4]==this.currentPlayer && this.casillaValue[6]==this.currentPlayer))
                {
                  console.log("Player "+ this.currentPlayer + " Won");
                }
        break;
      case 3: if((this.casillaValue[0]==this.currentPlayer && this.casillaValue[3]==this.currentPlayer && this.casillaValue[6]==this.currentPlayer)
              || (this.casillaValue[3]==this.currentPlayer && this.casillaValue[4]==this.currentPlayer && this.casillaValue[5]==this.currentPlayer))
              {
                console.log("Player "+ this.currentPlayer + " Won");
              }
        break;
      case 4: if((this.casillaValue[4]==this.currentPlayer && this.casillaValue[1]==this.currentPlayer && this.casillaValue[7]==this.currentPlayer)
              || (this.casillaValue[3]==this.currentPlayer && this.casillaValue[4]==this.currentPlayer && this.casillaValue[5]==this.currentPlayer)
              || (this.casillaValue[4]==this.currentPlayer && this.casillaValue[0]==this.currentPlayer && this.casillaValue[8]==this.currentPlayer)
              || (this.casillaValue[4]==this.currentPlayer && this.casillaValue[2]==this.currentPlayer && this.casillaValue[6]==this.currentPlayer))
              {
                console.log("Player "+ this.currentPlayer + " Won");
              }
        break;
      case 5: if((this.casillaValue[5]==this.currentPlayer && this.casillaValue[2]==this.currentPlayer && this.casillaValue[8]==this.currentPlayer)
                || (this.casillaValue[5]==this.currentPlayer && this.casillaValue[4]==this.currentPlayer && this.casillaValue[3]==this.currentPlayer)
                )
                {
                  console.log("Player "+ this.currentPlayer + " Won");
                }
        break;
      case 6: if((this.casillaValue[6]==this.currentPlayer && this.casillaValue[3]==this.currentPlayer && this.casillaValue[0]==this.currentPlayer)
                || (this.casillaValue[6]==this.currentPlayer && this.casillaValue[7]==this.currentPlayer && this.casillaValue[8]==this.currentPlayer)
                || (this.casillaValue[4]==this.currentPlayer && this.casillaValue[2]==this.currentPlayer && this.casillaValue[6]==this.currentPlayer))
                {
                  console.log("Player "+ this.currentPlayer + " Won");
                }
        break;
      case 7: if((this.casillaValue[7]==this.currentPlayer && this.casillaValue[4]==this.currentPlayer && this.casillaValue[1]==this.currentPlayer)
                || (this.casillaValue[6]==this.currentPlayer && this.casillaValue[7]==this.currentPlayer && this.casillaValue[8]==this.currentPlayer))
                {
                  console.log("Player "+ this.currentPlayer + " Won");
                }
          break;
      case 8: if((this.casillaValue[8]==this.currentPlayer && this.casillaValue[5]==this.currentPlayer && this.casillaValue[2]==this.currentPlayer)
                || (this.casillaValue[8]==this.currentPlayer && this.casillaValue[4]==this.currentPlayer && this.casillaValue[0]==this.currentPlayer)
                || (this.casillaValue[8]==this.currentPlayer && this.casillaValue[7]==this.currentPlayer && this.casillaValue[6]==this.currentPlayer))
                {
                  console.log("Player "+ this.currentPlayer + " Won");
                }
          break;
    }
  }
}
