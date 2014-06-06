Charrlemagne
==============================================

Charrlemagne is a super annoying Twitter bot using **STREAMING API**

You need Node.js to play with it and NPM.

## Installation

	npm install
	
## Twitter Account

Create a new twitter account and create an app. You can find a good tutorial here to do it: http://iag.me/socialmedia/how-to-create-a-twitter-app-in-8-easy-steps/

Your app has to be with `Read and Write`permissions to work.

## Usage

Create a `auth.js`file at the root folder with the following code
	
	module.exports = {
  		consumer_key: 'YOUR_CONSUMER_KEY',
  		consumer_secret: 'YOUR_CONSUMER_SECRET',
  		access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  		access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
	};
	
Choose which word you want to track in `bot.js`

	function startStreaming() {
    	bot.stream('statuses/filter', { track: ‘YOUR_WORD’ }, function(stream) {
        	console.log('Listening for Tweets...');
        	stream.on('data', function(tweet) {
            	if (tweet.text.match('YOUR_WORD')) {
              	var id_sentence = getRandomArbitrary(0, 8);
              	console.log(id_sentence);
              	console.log(sentences[id_sentence]);
              	bot.updateStatus('@' + tweet.user.screen_name + sentences[id_sentence] ,
                	    {in_reply_to_status_id: tweet.id_str}, callback);
            	}
        	});
    	});	
	}
	
Choose your answers

	var sentences = [
  	" ANSWER1", 
  	" ANSWER2", 
  	" ANSWERN++"
  	];

Launch the app in terminal with `foreman start`

Let's play with it !
