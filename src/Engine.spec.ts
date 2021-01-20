import { Engine } from './Engine'

describe('Engine', () => {
    it('should start with an empty board', () => {
        const engine = new Engine()

        const actual = engine.casillaValue;

        expect(actual).toEqual([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ])
    })

    it('Alternates current X player', () => {
        const engine = new Engine()

        const actual = engine.changeCurrentPlayer("X");
        const currentPlayer = engine.currentPlayer;

        expect(currentPlayer).toBe("Y")
    })

    it('Alternates current Y player', () => {
        const engine = new Engine()

        const actual = engine.changeCurrentPlayer("Y");
        const currentPlayer = engine.currentPlayer;

        expect(currentPlayer).toBe("X")
    })

    it('Set an X in the box 0', () => {
        const engine = new Engine()

        const actual = engine.markBox(0);
        const valueBox0 = engine.casillaValue[0];

        expect(valueBox0).toBe("X")
    })

    it('Set an X in the box 5', () => {
        const engine = new Engine()

        const actual = engine.markBox(5);
        const valueBox0 = engine.casillaValue[5];

        expect(valueBox0).toBe("X")
    })
})

