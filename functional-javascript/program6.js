 
	
 function countWords(inputWords) {
    
     return inputWords.reduce((val, word) => {
	//console.log(val);
        val[word]= ++val[word] || 1;

        return val;
    },{});
}

  module.exports = countWords

	



