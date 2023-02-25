function calcWordFrequencies() {
    const input = prompt("Enter a list of words separated by spaces:");
    
    // Split the input string into an array of words
    const words = input.trim().split(/\s+/);
  
    // Create a frequency map for the words
    const frequencyMap = new Map();
    for (const word of words) {
      const count = frequencyMap.get(word) || 0;
      frequencyMap.set(word, count + 1);
    }
  
    // Output the words and their frequencies to the console
    for (const [word, frequency] of frequencyMap) {
      console.log(`${word} ${frequency}`);
    }
  }
  