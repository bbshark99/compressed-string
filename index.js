function BetterCompression(s) {
    const numbers = s.match(/\d+/g).map(Number);    
    const characters = s.replace(/[0-9]/g, '').split('');    
    const fields = {};
	
    characters.forEach((ch, index) => {      
      fields[ch] = fields[ch] === undefined ? 
		  			parseInt(numbers[index]) : 
	  				fields[ch] + parseInt(numbers[index]);
    });    
	
    return Object.keys(fields)
				.sort()
				.map(key => `${key}${fields[key]}`)
				.join('');
}

BetterCompression('a2d3b2a5c3a2');
