import SpellCheck from "../src/SpellCheck"

describe("#SpellCheck", () => {
  it("returns the string it is given without any mistakes", () => {
    let speller = new SpellCheck("a")
    expect(speller.output).toBe("a")
  })
})