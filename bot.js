var ntwitter = require('ntwitter');
var auth = require('./auth');
var requestify = require('requestify');
var sentences = [
" Test", 
" Test"];

var bot = new ntwitter(auth);
var callback = function handleError(error) {
   if (error) {
   console.error('response status:', error.statusCode);
   console.error('data:', error.data);
  }
};

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function startStreaming() {
    bot.stream('statuses/filter', { track: 'word' }, function(stream) {
        console.log('Listening for Tweets...');
        stream.on('data', function(tweet) {
            if (tweet.text.match('word')) {
              var id_sentence = getRandomArbitrary(0, 8);
              console.log(id_sentence);
              console.log(sentences[id_sentence]);
              bot.updateStatus('@' + tweet.user.screen_name + sentences[id_sentence] ,
                    {in_reply_to_status_id: tweet.id_str}, callback);
            }
        });
    });
}

startStreaming();