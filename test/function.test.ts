import { rareFirstLetter } from "../src/function";
import { longText, longText2, shortText } from "./strings";


describe('test rareFirstLetter function', () => {
  it("should return 'm' for rareFirstLetter(longtext)", () => {
    expect(rareFirstLetter(longText)).toBe('m')
  })

  it("should return 'g' for rareFirstLetter(longtext2)", () => {
    expect(rareFirstLetter(longText2)).toBe('g')
  })

  it("should return 'h' for rareFirstLetter(shortText)", () => {
    expect(rareFirstLetter(shortText)).toBe('h')
  })
})