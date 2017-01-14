
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {

	init: function () {
		
		var connection = mongoose.connect('mongodb://ds163718.mlab.com:63718/heroku_36wc3k78', function(err) {
			if (err) {
				logger.error('Mongodb connection error: ' + err);
			};
		});
		
		//User
		var userSchema = require('./models/User');
		userSchema.index({ "lastKnownPosition": "2dsphere" });
		GLOBAL['User'] = mongoose.model('User', userSchema);
		
		//Match
		var matchSchema = require('./models/Match');
		GLOBAL['Match'] = mongoose.model('Match', matchSchema);

        //Messae
        var messageSchema = require('./models/Message');
        GLOBAL['Message'] = mongoose.model('Message', messageSchema);

        var chatSchema = require('./models/Chat');
        GLOBAL['Chat'] = mongoose.model('Chat', chatSchema);
	}
}

