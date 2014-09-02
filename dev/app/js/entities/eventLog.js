DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.FrameTemplate = Backbone.Model.extend({});

	var frameTemplates;

	var makeTemplateObjectById = function(id) {
		var m = frameTemplates.at(id);
		return({name: m.get('name'), glyph: m.get('glyph')});
	};

	var saveEventLog = function(data, def) {
		var EventLogTable = Parse.Object.extend("EventLog"),
			eventLog = new EventLogTable();

		eventLog.save(data, {
			success:function(eventLog){
				def.resolve({success:true});
			},
			error:function(eventLog, error){
				def.resolve({success:false});
			}
		});
	};

	var API = {
		setEventLog: function(data) {
			var def = $.Deferred();
				EventLogTable = Parse.Object.extend("EventLog");

			if (!data.allowRepeat) {
				var query = new Parse.Query(EventLogTable);
				query.equalTo("contentId", 		data.contentId);
				query.equalTo("contentStatus", 	data.contentStatus);
				query.equalTo("studentId", 		data.studentId);
				query.equalTo("eventType", 		data.eventType);

				query.find(function(results){
					if (results.length > 0) {
						def.resolve({success:false, warning:"noRepeat"});
						return;
					} else {
						saveEventLog(data, def);
					}
				});
			} else {
				saveEventLog(data, def);
			}
			return def.promise();
		}
	};

	DukeApp.reqres.setHandler("eventLog:entities", function(data){
		return API.setEventLog(data);
	});
});