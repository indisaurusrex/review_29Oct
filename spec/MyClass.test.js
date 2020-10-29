import MyClass from "../src/MyClass";


describe('#MyClass', () => {
  test('it has a name', () => {
    let myClass = new MyClass("India")
    expect(myClass.name).toBe("India")
  })
});