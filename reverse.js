//This program returnes reverse of the given string.

const reverse = (str) => {
  const lastIndex = str.length - 1;
   const iter = (index, acc) => {
     if (index > lastIndex) {
       return acc;
     }
     return iter (index + 1, acc = `${str[index]}${acc}`)
   };
   return iter(0, '');
 };
};
