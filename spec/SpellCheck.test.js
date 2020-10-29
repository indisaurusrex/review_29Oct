import SpellCheck from "../src/SpellCheck"

describe("#SpellCheck", () => {
  it("returns the string it is given without any mistakes", () => {
    let speller = new SpellCheck("a")
    speller.checkWord();
    expect(speller.output).toBe("a")
  })
  it("returns the word with tildes if its spelt wrong", () => {
    let speller = new SpellCheck("dgo")
    speller.checkWord();
    expect(speller.output).toBe("~dgo~")
  })
})