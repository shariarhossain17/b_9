function antiPalindrome(s) {
  let n = s.length;
  let m = {};

  for (let i = 0; i < s.length; i++) {
    if (!m.hasOwnProperty(s[i])) {
      m[s[i]] = 1;
    } else {
      m[s[i]]++;
    }
  }

  let odd = 0;
  let even = 0;

  for (let key in m) {
    if (m.hasOwnProperty(key)) {
      if (m[key] % 2 !== 0) {
        odd++;
      } else {
        even++;
      }
    }
  }

  let semi = true;

  if ((n % 2 && odd > 1) || (n % 2 === 0 && odd)) {
    semi = false;
  }

  if (!semi) {
    console.log(0);
  } else {
    if (n % 2 === 0 || (n % 2 && Object.keys(m).length >= 2)) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}

antiPalindrome("abb");
