
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.redirect('/checkout');
};

/*
* This function is executed if http://localhost:3000/checkout is called
*/
exports.checkout = function(req, res){
	var paymentToken = generateToken( "", function(statusCode, result){ 
		res.render('checkout', { 
			token: result.transaction.token
		});
	})
};

/*
* This function is executed if http://localhost:3000/result is called
*/
exports.result = function(req, res){
	var paymentResult = generateResult( req.query.token, function(statusCode, result){
		var message = "not yet implemented";
		if( result.errorMessage )
			message = result.errorMessage;
		else if( result.transaction.processing.result == 'ACK' )
			message = "Your payment was successful";
		else if( result.transaction.processing.result == 'NOK' )
			message = "Your payment was rejected due to " + result.transaction.processing.return.message;
		
		res.render('result', {		
			message: message
		});
	}); 
};

var generateToken = function(options, onResult){
	
	//callback function, replace { "transaction": { "token": "not yet implemented" } } by variable chunk
	//hint: JSON.parse();
	onResult("400", { "transaction": { "token": "not yet implemented" } });
};

var generateResult = function(token, onResult){
	
	//callback function, replace { "transaction": { "processing": {"result": "not yet implemented" } } } by variable chunk
	//hint: JSON.parse();
	onResult( "400", { "errorMessage": "not yet implemented" } );
};
