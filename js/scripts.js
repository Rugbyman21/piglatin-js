var pigLatin = function(word) {

  var vowels = ["a", "e", "i", "o", "u"];
  var split1 = word.split('');
  var firstLetter = split1[0]

  if (vowels.indexOf(firstLetter) !== -1) {

     split1.push('ay');
     split1 = split1.join('');
     return split1;
  }
};


// var split = word[0];
// var word = 'apple';
