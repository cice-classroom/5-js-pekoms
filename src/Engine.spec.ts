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
})