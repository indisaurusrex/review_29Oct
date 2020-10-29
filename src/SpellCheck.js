export default class SpellCheck {
  constructor(input) {
    this.dictionary = ["a", "dog", "that", "has", "hat"]
    this.output = ""
    this.input = input
  }

  checkWord() {
    if(this.dictionary.includes(this.input)){
      this.output += this.input;
    }else{
      this.output += "~" + this.input + "~";
    }
  }

}