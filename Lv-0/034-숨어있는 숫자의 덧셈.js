function solution(my_string) {
    const numbers = my_string.match(/\d+/g);
    
    if (!numbers) {
      return 0; 
    }
    
    const sum = numbers.map(Number).reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
  