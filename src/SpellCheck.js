export default class SpellCheck {
  constructor(input) {
    this.dictionary = ["a", "dog", "that", "has", "hat"]
    this.output = ""
    this.input = input.split(" ")
  }

  checkWord() {
    var outputString = ""
    this.input.forEach(word => {
      if (this.dictionary.includes(word)) {
        outputString += word + ' ';
      } else {
        outputString += "~" + word + "~" + ' ';
      }
    });

    this.output = outputString.trim();
    
  }

}