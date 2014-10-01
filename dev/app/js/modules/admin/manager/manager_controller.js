DukeApp.module("Admin.Manager", function(Manager, DukeApp, Backbone, Marionette, $, _){
	Manager.Controller = {
		init:function() {
			var that = this;

			DukeApp.utils.setCurrentView("admin-teacher-view", Manager.Controller);
			DukeApp.utils.loadCommonViews();

			//get data
			var classesPromise = DukeApp.request("all:class:entities"),
				classTemplatePromise = DukeApp.request("all:classTemplates:entities"),
				teacherPromise = DukeApp.request("all:user:teacherModel:entities"),
				studentPromise = DukeApp.request("all:user:studentModel:entities"),
				guestPromise = DukeApp.request("all:user:guestModel:entities");		
				
			$.when(classesPromise, classTemplatePromise, teacherPromise, studentPromise, guestPromise).done(function(cResults, ctResults, tResults, sResults, gResults) {
				Manager.Controller.data = {}; 
				Manager.Controller.data.classes = cResults;
				Manager.Controller.data.classTemplates = ctResults;
				Manager.Controller.data.teachers = tResults;
				Manager.Controller.data.students = sResults;
				Manager.Controller.data.guests = gResults;

				that.loadDisplay();
			});
			
		},

		loadDisplay:function() {
			var layout = new Manager.LayoutView();
			
			DukeApp.content.show(layout);
			layout.header.show(DukeApp.commonViews.header);
			DukeApp.commonViews.header.setUserName(DukeApp.utils.getCurrentUsername());

			Manager.Controller.layout = layout;

			this.handleMenuClick("classes");

			Manager.Controller.layout.on("managerView:createClass", this.handleCreateClass);
			Manager.Controller.layout.on("managerView:addTeacher", this.handleCreateTeacher);
			Manager.Controller.layout.on("managerView:deleteTeacher", this.handleDeleteTeacher);
			Manager.Controller.layout.on("managerView:editTeacher", this.handleEditTeacher);
			
			Manager.Controller.layout.on("managerView:addStudent", this.handleCreateStudent);
			Manager.Controller.layout.on("managerView:deleteStudent", this.handleDeleteStudent);
			Manager.Controller.layout.on("managerView:editStudent", this.handleEditStudent);

			Manager.Controller.layout.on("managerView:addGuest", this.handleCreateGuest);
			Manager.Controller.layout.on("managerView:deleteGuest", this.handleDeleteGuest);
			Manager.Controller.layout.on("managerView:editGuest", this.handleEditGuest);


			Manager.Controller.layout.on("managerView:deleteClass", this.handleDeleteClass);
			Manager.Controller.layout.on("managerView:changeSelectedClass", this.handleChangeClass);
			Manager.Controller.layout.on("managerView:editClassList", this.handleEditClass);
			Manager.Controller.layout.on("managerView:changeDefaultClass", this.handleDefaultClass);



			layout.on("managerView:clickLink", this.handleMenuClick);
		},

		handleMenuClick:function(type) {
			var contentViewMap = {
					"classes": Manager.EditClassesView,
					"teachers": Manager.EditTeachersView,
					"students": Manager.EditStudentsView,
					"guests": Manager.EditGuestsView
				},
				layout = Manager.Controller.layout,
				ManageModelTable = Backbone.Model.extend({}),
				manageModel = new ManageModelTable(Manager.Controller.data),
				contentView = new contentViewMap[type]({
					model:manageModel
				});

			Manager.Controller.content = contentView;

			layout.content.show(contentView);
		},

		//class methods
		handleCreateClass:function(obj) {
			if (obj.name === "") {
				Manager.Controller.layout.handleMessage({msg:"Please enter a name for your class."});
			} else if (obj.classTemplate === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select a class template."});
			} else if (obj.teacherTemplate === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an instructor for the class."});
			} else {
				DukeApp.request("create:class:entities", obj).done(function(){
					alert(obj.name + " has been created.");
					location.reload();
					this.handleMenuClick("classes");
				});
			}
		},

		handleDeleteClass:function(obj) {
			if (!confirm("Are you sure you want to delete class " + obj.classIndex + "?"))
				return;

			if (obj.classIndex === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select a class."});
			} else {
				DukeApp.request("delete:class:entities", obj).done(function(){
					alert("Deleted Current Class");
					location.reload();
					this.handleMenuClick("classes");
				});
			}
		},

		handleChangeClass:function(obj) {
			DukeApp.request("classByIndex:entities", obj).done(function(classObj){
				Manager.Controller.currentClass = classObj;
				Manager.Controller.content.updateClassData(classObj);
			});
		},

		handleDefaultClass:function(obj){
			var endpoint = "set:defaultclass:" + obj.type + ":entities";
			
			DukeApp.request(endpoint, obj).done(function(classObj){
				Manager.Controller.layout.handleMessage({msg:obj.type + " " + obj.index + " default is set to class " + obj.classIndex});
				location.reload();
				this.handleMenuClick("classes");
			});
		},

		handleEditClass:function(obj) {
			var eventTrigger = obj.action + ":class:" + obj.type + ":entities";
			
			obj = _.extend(obj, {classIndex:Manager.Controller.currentClass.index});

			DukeApp.request(eventTrigger, obj).done(function(classObj) {
				Manager.Controller.layout.handleMessage({msg:obj.action + "ed a " + obj.type + " to the current class"});
				location.reload();
				this.handleMenuClick("classes");
				this.handleChangeClass(Manager.Controller.currentClass);
			});
		},

		//teacher methods
		handleCreateTeacher:function(obj) {
			if (!obj.firstname) {
				Manager.Controller.layout.handleMessage({msg:"Please enter a first name."});
			} else if (!obj.lastname) {
				Manager.Controller.layout.handleMessage({msg:"Please select a last name."});
			} else if (!obj.email) {
				Manager.Controller.layout.handleMessage({msg:"Please select a email."});
			} else if (!obj.username) {
				Manager.Controller.layout.handleMessage({msg:"Please select a username."});
			} else if (!obj.password) {
				Manager.Controller.layout.handleMessage({msg:"Please select a password."});
			} else if (obj.classIndex === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an initial class for the teacher."});
			} else {
				DukeApp.request("create:user:teacher:entities", obj).done(function(success, e){
					if (success) {
						Manager.Controller.layout.handleMessage({msg:"Created Teacher"});
						location.reload();
						this.handleMenuClick("teachers");	
					} else {
						Manager.Controller.layout.handleMessage({msg:e.message});	
					}
					
				});
			}
		},

		handleDeleteTeacher:function(obj) {
			if (!confirm("Are you sure you want to delete teacher " + obj.index + "?"))
				return;

			DukeApp.request("delete:user:teacher:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Deleted Teacher"});
				location.reload();
				this.handleMenuClick("teachers");
			});
		},

		handleEditTeacher:function(obj) {
			DukeApp.request("edit:user:teacher:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Edited Teacher " + obj.teacherIndex});
			});
		},

		//student methods
		handleCreateStudent:function(obj) {
			if (!obj.firstname) {
				Manager.Controller.layout.handleMessage({msg:"Please enter a first name."});
			} else if (!obj.lastname) {
				Manager.Controller.layout.handleMessage({msg:"Please select a last name."});
			} else if (!obj.email) {
				Manager.Controller.layout.handleMessage({msg:"Please select a email."});
			} else if (!obj.username) {
				Manager.Controller.layout.handleMessage({msg:"Please select a username."});
			} else if (!obj.password) {
				Manager.Controller.layout.handleMessage({msg:"Please select a password."});
			} else if (obj.classIndex === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an initial class for the student."});
			} else {
				
				DukeApp.request("create:user:student:entities", obj).done(function(success, e) {
					if (success) {
						Manager.Controller.layout.handleMessage({msg:"Created Student"});
						location.reload();
						this.handleMenuClick("student");	
					} else {
						Manager.Controller.layout.handleMessage({msg:e.message});	
					}
					
				});
			}
		},

		handleDeleteStudent:function(obj) {			
			if (!confirm("Are you sure you want to delete student " + obj.index + "?"))
				return;

			DukeApp.request("delete:user:student:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Deleted Student"});
				location.reload();
				this.handleMenuClick("students");
			});
		},

		handleEditStudent:function(obj) {
			DukeApp.request("edit:user:student:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Edited Teacher " + obj.studentIndex});
				location.reload();
				this.handleMenuClick("students");
			});
		},

		//student methods
		handleCreateGuest:function(obj) {
			if (!obj.email) {
				Manager.Controller.layout.handleMessage({msg:"Please select a email."});
			} else if (!obj.username) {
				Manager.Controller.layout.handleMessage({msg:"Please select a username."});
			} else if (!obj.password) {
				Manager.Controller.layout.handleMessage({msg:"Please select a password."});
			} else if (obj.classIndex === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an viewible class for the guest."});
			} else {
				
				DukeApp.request("create:user:guest:entities", obj).done(function(success, e) {
					if (success) {
						Manager.Controller.layout.handleMessage({msg:"Created Guest"});
						location.reload();
						this.handleMenuClick("guests");	
					} else {
						Manager.Controller.layout.handleMessage({msg:e.message});	
					}
					
				});
			}
		},

		handleDeleteGuest:function(obj) {			
			if (!confirm("Are you sure you want to delete guest " + obj.index + "?"))
				return;

			DukeApp.request("delete:user:guest:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Deleted Guest"});
				location.reload();
				this.handleMenuClick("guests");
			});
		},

		handleEditGuest:function(obj) {
			DukeApp.request("edit:user:guest:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Edited Guest " + obj.guestIndex});
				location.reload();
				this.handleMenuClick("guests");
			});
		}
	};
});