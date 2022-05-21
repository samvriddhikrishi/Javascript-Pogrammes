
Write a program to reverse the given string without effecting the position of special character.
-------------------------------------------------------------------------------------------------

      let str1 = 'ab&ba';
      let str2 = str1.split('').reverse();
      let output = [];
      let index;
      let val;

      function isAlphabet(char) {
          return char >= 'a' && char <= 'z';
      }

      for (let i = 0; i < str1.length; i++) {
          if (!isAlphabet(str1[i])) {
              index = i;
              val = str1[i];
          }
      }

      function reverseString(str3) {
          for (var i = 0; i < str3.length; i++) {
              if (i === index) {
                  if (isAlphabet(str3[i])) {
                      output.push(str3[i]);
                      output.push(val);
                  } else output.push(val);
              } else if (isAlphabet(str3[i])) {
                  output.push(str3[i]);
              }
          }
          return output.join('');
      }

      console.log(reverseString(str2));

