function solution(s, n) {
  // 알파벳 패턴 배열
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // 시저 암호화 함수
  const caesarCipher = (char, pattern) => {
    const index = pattern.indexOf(char);
    if (index !== -1) {
      const newIndex = (index + n) % pattern.length;
      return pattern[newIndex];
    }
    return char;
  };

  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[a-z]/.test(char)) {
      // 소문자 알파벳
      result += caesarCipher(char, alphabet);
    } else {
      result += caesarCipher(char, upperAlphabet);
    }
  }

  return result;
}