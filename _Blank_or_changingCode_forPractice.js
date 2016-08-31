// For-In-Loop_fireTheCannons

var a = {
		'Mike': 'aye',
		'Joe': 'aye',
		'Johnson': 'aye',
		'Peter': 'aye'
	},
	b = {
		'Mike': 'aye',
		'Joe': 'nay',
		'Johnson': 'aye',
		'Peter': 'aye'
	};



const cannonsReady = ( gunners ) => {
	for ( let res in gunners ) {
		if ( !gunners.hasOwnProperty( res ) ) { continue; }
		if ( gunners[ res ] === 'nay' ) {
			return 'Shiver me timbers!';
		}
	}
	return 'Fire!';
};


const cannonsReady = ( gunners ) => {
	return Object.values( gunners ).some( m => m === 'nay' ) ? 'Shiver me timbers!' : 'Fire!';
};


const cannonsReady = a => Object.keys( a ).every( g => a[ g ] === "aye" ) ? "Fire!" : "Shiver me timbers!";


const cannonsReady = ( gunners ) => {
	console.log( gunners );
	var arr = Object.keys( gunners ),
		count = 0;
	for ( var i = 0; i < arr.length; i++ )
		if ( gunners[ arr[ i ] ] == 'aye' ) count++;

	return count == arr.length ? 'Fire!' : 'Shiver me timbers!';
}
