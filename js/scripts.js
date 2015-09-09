var pigLatin = function(word) {
  var consonants = ['b','c','d','f', 'g','h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y',
  'z'];

  var vowels = ["a", "e", "i", "o", "u"];
  var split1 = word.split('');
  var firstLetter = split1[0];

  if (vowels.indexOf(firstLetter) !== -1) {

     split1.slice(1)
     split1.push('ay');
     split1 = split1.join('');

     return split1;

   };
};
  // if (consonants.indexOf(firstLetter) !== -1) {
  //
  //   split1.push(firstletter);
  //   split1 = split1.push('ay');
  //   return split1;
  // };





// var split = word[0];
// var word = 'apple';
