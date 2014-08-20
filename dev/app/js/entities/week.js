DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.FrameTemplate = Backbone.Model.extend({});

	Entities.FrameTemplateCollection = Backbone.Collection.extend({
		model: Entities.FrameTemplate
	});

	Entities.FrameModel = Backbone.Model.extend({});
			
	Entities.FrameCollection = Backbone.Collection.extend({
		model: Entities.FrameModel
	});

	Entities.Week = Backbone.Model.extend({});

	Entities.WeekCollection = Backbone.Collection.extend({
		model:Entities.Week
	});
	
	Entities.Class = Backbone.Model.extend({});

	Entities.ClassCollection = Backbone.Collection.extend({
		model:Entities.Class
	});

	var frameTemplates, frames, weeks, classes;

	var makeTemplateObjectById = function(id) {
		var m = frameTemplates.at(id);
		return({name: m.get('name'), glyph: m.get('glyph')});
	};

	var makeTemplateObjectByName = function(name) {
		var m = frameTemplates.find(function(item) {
			return item.get('name') == name;
		});

		return({name: m.get('name'), glyph: m.get('glyph')});
	};

	var initializeFrameTemplates = function() {
		frameTemplates = new Entities.FrameTemplateCollection([
			{name:"overview", 			glyph:"eye3"},
			{name:"article", 			glyph:"book2"},
			{name:"articleLink", 		glyph:"book2"},
			{name:"links", 				glyph:"direction"},
			{name:"game", 				glyph:"gamepad"},
			{name:"video", 				glyph:"camera2"},
			{name:"videoLink", 			glyph:"camera2"},
			{name:"image", 				glyph:"picture"},
			{name:"comic", 				glyph:"batman"},
			{name:"activity", 			glyph:"lightning"},
			{name:"assignment", 		glyph:"file"},
			{name:"assignmentUpload", 	glyph:"file"},
			{name:"discussion", 		glyph:"comments"},
			{name:"lectureText", 		glyph:"presentation"},
			{name:"lectureAudio", 		glyph:"presentation"},
			{name:"lectureVideo", 		glyph:"presentation"},
			{name:"discussion", 		glyph:"comments"},
			{name:"quiz", 				glyph:"pencil"},
			{name:"journal", 			glyph:"wallet"},
			{name:"wrapup",				glyph:"pencil"}
		]);
	};

	var initializeFrames = function() {
		frames = [
			{"type":"overview", "week":0, "name":"overview",	"content":{
				"title":"week 1 Overview:",
				"subTitle":"The Differences Between the Chinese and American Education Systems. What is a “best-fit” school?",
				"overview":"Learn more about differences in educational systems",
				"objectives":[
					"Understand the semester one course goals, objectives, deliverables",
					"Understand the differences between the Chinese and U.S. education systems",
					"Understand the current college admission landscape for elite schools in the U.S.",
					"Understand the “best-fit” school concept"
				],
				"badges":["code", "cool", "foxy"]
			}},

			{"type":"video", "week":0, "name":"video",			"content":{
				"heading": 	"Introduction to the Class", 
				"video": 		"Duke_ConEd_Class0"
			}},

			{"type":"journal", "week":0, "name":"journal",		"content":{
				"heading": "Introduction to Journals",
				"instructions": "Throughout the semester you will:",
				"objectives":[
					"Be asked to think and reflect about the topics covered in this course and to write about them.",
					"Journal entries will be written on the computer and will be time stamped.",
					"You will  examine your journals and assess how well you are doing by using the rubric. Make certain you score your work.",
					"If you do not understand some of the words, please define the words in your journals. *Carefully review the rubric and make sure you understand all of it."
				]
			}},

			{"type":"image", "week":0, "name":"image",		"content":{
				"heading": "Journal Grading Rubric",
				"source": "../images/image_panels/rubricwrite2.gif"
			}},

			{"type":"activity", "week":0, "name":"activity",		"content":{
				"heading": "Instructor Overview of Class and Syllabus", 
				"instuctionsHeader": "Instructor introduces self and gives a broad overview of the two semester course:",
				"instructionList":[
					"Provide you with a better understanding of the differences between the U.S. and Chinese educational systems so that you can tailor your applications to the schools to which you are applying",
					"Provide you with a better understanding of who and what you are so that you can develop a list of of potential colleges and universities that are consistent with your educational goals and interests",
					"Improve your interview and essay writing skills and provide tips for better college applications"
				],
			}},

			{"type":"discussion", 	"week":0, "name":"discussion", 	"content":{
				"heading": "The Similarities and differences between the U.S. and Chinese educational systems:",
				"instructionTitle": "You will read and discuss the following questions with a partner:",
				"instructionList":[
					"Name three similarities and three differences between the Chinese and American education systems.",
					"Compare and contrast the ways in which Chinese and Americans  are assessed in school. For example how are  tests, homework,  and projects evaluated in both countries.",
					"Are “extra-curricular” activities the same in China as in the U.S.? How are they different?",
					"Compare and contrast how Chinese and Americans students  spend  time outside of school.",
					"Generally, what is the average class size in an American high school? How might this impact the way in which American you learn as compared to the way in which Chinese you learn?",
					"List three strengths of the Chinese educational system and three strengths of the American educational system."
				]
			}},
			

			{"type":"journal", 		"week":0, "name":"journal",	"content":{
				"instructions": "In your journal make notes answering the above questions fron the previous discussion", 
			}},

			{"type":"article", "week":0, "name":"article",		"content":{
				"id":0
			}},

			{"type":"videoLink", "week":0, "name":"video",			"content":{
				"heading": 	"Best Fit School", 
				"synopsis": 	"Show “What type of students “Fits in Best at Duke” and two other similar videos. You are  to answer these questions:",
				"instructionList": [
					"What characteristics do all of these students have in common?",
					"How are these students different?",
					"Are different schools looking for slightly different characteristics?"
				],
				"link": "https://lmty.cfnc.org/videos/what-types-of-you-fit-in-best-at-duke"
			}},

			{"type":"journal", 		"week":0, "name":"journal",	"content":{
				"heading": "Introduction to the school “best-fit” concept.",
				"instructionsList": [
					"Using your journals, you will write a brief explanation of what you think “best-fit school” means to you.",
					"What types of things do you think you should consider as you develop your school lists?",
					"What do you think schools consider when selecting you for admission?"
				]
			}},

			{"type":"articleLink",  "week":0, "name":"article", 	"content":{
				"heading": "Using the “My College Guide: Things to Consider When Choosing a College”",
				"instructions": "This article will help you to learn what are the main qualities you want to look for in choosing a college.",
				"link": "http://mycollegeguide.org/articles/7/105/apply%20to%20the%20right%20school"
			}},

			{"type":"journal", 		"week":0, "name":"journal",	"content":{
				"heading": "Things to Consider When Choosing a College",
				"instructions": "After reading about “My College Guide: Things to Consider When Choosing a College”",
				"instructionsList": [
					"Journal about what you think a best-fit college would be.",
					"You should not name schools but consider qualities like size, location, campus life, etc.",
					"You will reflect back on this entry at the end of the first semester."
				]
			}},

			{"type":"article", "week":0, "name":"article",		"content":{
				"id":1
			}},

			{"type":"assignment", "week":0, "name":"assignment",		"content":{
				"subHeading": "Mapping out your Career Path",
				"instructionList":[
					"Complete the CFNC Career Cluster Survey.",
					"You will use your journals to list your personal strengths and interests, preferred courses, activities, free time activities, community service activities, extracurricular activities",
					"You should also list the majors and careers paths in which you are most interested."
				],
			}},

			{"type":"comic", "week":0, "name":"comic",		"content":{
				"id": 0,
				"synopsis":"Introduction to Xin Xin"
			}},

			{"type":"activity", "week":0, "name":"activity",		"content":{
				"heading": "Introduction to Myers Briggs",
				"instuctionsHeader":"Read one or both of the following articles regard the Myers Briggs Personality test.",
				"instructionList":[
					"http://www.teamtechnology.co.uk/tt/t-articl/mb-simpl.htm",
					"http://www.teamtechnology.co.uk/personality/intro/"
				],
			}},

			{"type":"overview", "week":1, "name":"overview",	"content":{
				"title":"week 2 Overview:",
				"subHeading":"Knowing Yourself: WHO are you and WHAT are you? Identifying personal strengths and interests and developing a plan.",
				"overview":"Knowing yourself: Who are you and what are you equals knowing yourself. This lesson will help you to identifying your personal strengths and interests. WHO ARE YOU? What are your interests? What are your “likes?” WHAT ARE YOU? Helps you identify your academic and extra-curricular strengths.Knowing who and what you are will help you develop your high school plan for academics and extracurricular activities. After you develop your character profile, you will develop a plan for what you might want to study in high school and college.",
				"objectives":[
					"Take the MBTI to determine your individual personality profiles",
					"Make a list of your academic accomplishments and strengths and your extracurricular interests",
					"Use your MBTI results and academic and extracurricular interests to populate your profiles",
					"Use the career Cluster Survey (CFNC) to identify objectives for future study"
				]
			}},

			{"type":"video", "week":1, "name":"video",			"content":{
				"heading": 	"Myers-Briggs", 
				"video": 		"Duke_ConEd_Class1"
			}},

			{"type":"activity", "week":1, "name":"activity",		"content":{
				"heading": "A Review of Myers-Briggs", 
				"instuctionsHeader": "Review the reading assignment about the MBTI.  It is important you understand how the test will be administered and why you are taking the test.",
				"instructionList": [
					"Take the MBTI to determine your individual personality profiles",
					"Make a list of your academic accomplishments and strengths and your extracurricular interests",
					"Use your MBTI results and academic and extracurricular interests to populate your profiles",
					"Use the career Cluster Survey (CFNC) to identify objectives for future study"
				]

			}},

			{"type":"articleLink",  "week":1, "name":"article", 	"content":{
				"heading": "Take the Myers-Briggs Test",
				"instructions": "You will take the MBTI and review your test results and ask your instructor if you have any questions about the results.",
				"link": "http://www.16personalities.com/free-personality-test"
			}},

			{"type":"activity", "week":1, "name":"activity",		"content":{
				"heading": "Reflecting on Personality types",
				"instuctionsHeader": "You will read:",
				"instructionList":[
					"Read about your personality types.",
					"Reflect on what your personality traits mean in your real life.",
					"If you are an introvert, how can you chat more with people when you might prefer to remain silent?",
					"If you are an extrovert, how can you learn to listen more?",
					"Think of one or two activities that will challenge you to try new ways you might react in a social or academic setting."
				],
			}},

			{"type":"journal", 		"week":1, "name":"journal",	"content":{
				"instructions": "You will answer the following questions.", 
				"instructionList":[
					"What are three of your academic accomplishments?",
					"Have you taken any AP courses?",
					"Have you won any mathematics, science or English awards?",
					"Do you play a sport? Do you play an instrucment?",
					"Make a list  in your journal of your academic accomplishments and your extracurricular activities."
				]
			}},

			{"type":"links", "week":1, "name":"links",		"content":{
				"heading": "Populate Myers-Briggs Rating in Profile", 
				"instuctionsHeader": "You will populate your profiles using your MBTI results and the list of the academic accomplishments and extra-curricular interests.",
				"singleLinkhref":"/profile/student",
				"singleLinkHeading":"Click to proceed to heading"
			}},

			{"type":"links", "week":1, "name":"links",		"content":{
				"heading": "Register With CFNC",
				"instuctionsHeader": "You will register with CFNC and locate the Cluster Survey.",
				"singleLinkhref":"/profile/student",
				"singleLinkHeading":"Click to proceed to heading"
			}},

			{"type":"assignment", "week":1, "name":"assignment",		"content":{
				"subHeading": "Mapping out your Career Path",
				"instructionList":[
					"Complete the CFNC Career Cluster Survey.",
					"You will use your journals to list your personal strengths and interests, preferred courses, activities, free time activities, community service activities, extracurricular activities",
					"You should also list the majors and careers paths in which you are most interested."
				], 
			}},

			{"type":"article", "week":1, "name":"article",		"content":{
				"id":2
			}},

			{"type":"overview", "week":2, "name":"overview",	"content":{
				"title":"week 3 Overview:",
				"subTitle":"Getting to Know the U.S. and Colleges and Universities in the U.S.",
				"objectives":[
					"Explore the different geographic regions in the U.S. (Northeast, Southeast, Midwest, Southwest, West Coast) and locate major cities and urban centers",
					"Learn about the different cultures of the various in the U.S., e.g. weather, food, language, customs, activities",
					"Locate major research universities and top liberal arts colleges around the country; ideally, you will be able to identify and locate at least one college in each of the 50 states.",
					"Learn about the different cultures of the various parts of the U.S., e.g. weather, food, language, customs, activities",
					"Locate major research universities and top liberal arts colleges around the country; ideally, you will be able to identify and locate at least one college in each of the 50 states.",
					"Define the terms: liberal arts, college, university, public and private, religious affiliations, selectivity"
				]
			}},

			{"type":"video", "week":2, "name":"video",			"content":{
				"heading": 	"Colleges and Universities in the United States", 
				"video": 		"Duke_ConEd_Class2"
			}},

			{"type":"discussion", "week":2, "name":"discussion", 	"content":{
				"heading": "Learning More About US Colleges and Universities",
				"instructionTitle": "Instructor introduces the following Questions/Discussion starters",
				"instructionList":[
					"You have just spent the first two lessons discovering what makes U.S. colleges and universities vary.",
					"Now it is time to learn about how U.S. colleges and universities also have personalities of your own."
				]
			}},

			{"type":"image", "week":2, "name":"image",		"content":{
				"heading": "Journal Grading Rubric",
				"source": "../images/image_panels/rubricwrite2.gif",
				"caption": "This image shows that the U.S. is made up of many different states (50) and several regions (Northeast,  The South, The Midwest, and the West Coast). Do not be confused if you see these regions broken up into more than four parts.  These regions will just give you a general idea about the where the college you choose is located.  It will also help to determine the climate.  Although these regions do not have their own dialects (as they do in China), they do have distinct cultures and climates."
			}},

			{"type":"discussion", "week":2, "name":"discussion", 	"content":{
				"heading": "The Similarities and differences between the U.S. and Chinese educational systems:",
				"instructionTitle": "You will read and discuss the following questions with a partner:",
				"instructionList":[
					"With a partner or in groups discuss the geography of the US and learn the following:",
					"Explore the various regions in the U.S. .",
					"Learn about the different colleges and universities in those regions and how the climate varies.",
					"Learn about some differences in the types of schools you will be exploring. This may include how the geographical region affects the nature of the university atmosphere. For instance, in warmer climates more the the year is spent outside and the university social life may include pools and  more outdoor living."
				]
			}},

			{"type":"articleLink",  "week":2, "name":"article", 	"content":{
				"heading": "Geography of the United States",
				"instructions": "Play a geography game to learn the names of the various states and where they are located. After you learn the names and location of the states, click on the U. S. Regions link at the lower left hand side of the page to learn culture and history of each region. There are eight regions and the geography, politics and history of each region are quite different.",
				"link": "http://www.sheppardsoftware.com/web_games.htm"
			}},

			{"type":"discussion", "week":2, "name":"discussion", 	"content":{
				"instructionTitle": "Now that you have an idea of the geography and various regions of the U.S. let’s review what you’ve learned. Using a partner or in a group, answer the above questions. You will discuss the above questions in your groups.  After 20 minutes of discussion, the next 20 minutes will be spent with  the leader from each group or a few of the students orally reporting to the class their findings.",
				"instructionList":[
					"Which U.S. region did you find most interesting?",
					"In which region would you prefer not to live? Why?",
					"What kind of climate do you want?",
					"How was each region settled?",
					"How easy is it to get to and from China from each region?"
				]
			}},

			{"type":"quiz", "week":2, 	"name":"quiz", 	"content":{
			}},

			{"type":"activity", "week":2, "name":"activity",		"content":{
				"heading": "Instructor Overview of Class and Syllabus", 
				"instuctionsHeader": "Now that you have a general idea about  U.S. geography and regional cultures, you will begin to explore colleges and universities around the U.S. First, you need to acquaint  yourself with certain terms. In this part of the lesson, you will go on an internet scavenger hunt to define the following terms.",
				"instructionList":[
					"college",
					"university",
					"liberal arts",
					"public university",
					"private university",
					"religiously affiliated schools",
					"Bachelor of Arts",
					"Bachelor of Science",
					"selectivity"
				],
			}},

			{"type":"journal", 	"week":2, 	"name":"journal",	"content":{
				"instructions": "Write the defintions of the words in the previous activity here. This can be used as a resource: https://bigfuture.collegeboard.org/find-colleges/college-101/types-of-colleges-the-basics"
			}},

			{"type":"activity", "week":2, "name":"activity",		"content":{
				"heading": "Instructor Overview of Class and Syllabus", 
				"instuctionsHeader": "Now that you have a general idea about  U.S. geography and regional cultures, you will begin to explore colleges and universities around the U.S. First, you need to acquaint  yourself with certain terms. In this part of the lesson, you will go on an internet scavenger hunt to define the following terms.",
				"instructionList":[
					"Do an online scavenger hunt to find examples of the following types of colleges and universities in two of the eight geographic regions of the U.S. (New England, Mid-Atlantic, Southern, Great Lakes, Midwest, Southwest, Mountain and Pacific Coast).",
					"Find an example of the following types of schools in the Northeast/Mid-Atlantic:",
					"	a liberal arts college in a small college town",
					"	a large research university in or near a cit",
					"	a religiously affiliated college or university",
					"	a public college or university",
					"	a private college or university",
					"	a technical college or university",
					"	a design college (focusing on art and design)"
				],
			}},

			{"type":"journal", 	"week":2, 	"name":"journal",	"content":{
				"instructions": "Wrap up. In your journals,  list one school in each geographic region that you were unaware of and that you find interesting."
			}},

			{"type":"overview", "week":3, "name":"overview",	"content":{
				"title":"week 4 Overview:",
				"subTitle":"The College Search: Looking for the Right School for You, Including Great Schools You’ve Never Heard Of…",
				"overview":"Learn how to adjust easily and effectively to the first semester of college at an American college or university. You will also learn about the importance of scheduling your time wisely.",
				"objectives":[
					"Revisit your career cluster results and choose possible majors.",
					"Explore College Board’s Big Future and run it two or three different times.",
					"Develop a college list based on the results of College Board Big Future.",
					"Locate and mark your colleges on a map of the U.S."
				]
			}},

			{"type":"video", "week":3, "name":"video",			"content":{
				"heading": 	"Choosing the Right School for you", 
				"video": 		"Duke_ConEd_Class3"
			}},

			{"type":"discussion", "week":3, 	"name":"discussion", 	"content":{
				"instructionTitle": "Review of “best-fit” school concept.",
				"instructionList":[
					"Open your your journal to revisit your earlier definition of “best-fit” school.",
					"Has your understanding of best-fit changed?",
					"If so, you should revise your definition in your journal."
				]
			}},

			{"type":"discussion", "week":3, 	"name":"discussion", 	"content":{
				"header": "Choosing the “best-fit school",
				"instructionTitle": "The instructor breaks up the class into four or five groups.",
				"instructionList":[
					"Discuss what types of things you are worried about as you begin your college planning.",
					"For example, is there pressure to get into a “top” school?",
					"Decide who is the pressure coming from?",
					"If you do have some concerns, what can you do to make yourself more educated about these concerns and less anxious?"
				]
			}},

			{"type":"discussion", "week":3, 	"name":"discussion", 	"content":{
				"header": "Priorities for your college search",
				"instructionTitle": "Find a partner to discuss with your partner the following questions:",
				"instructionList":[
					"What are you excited about when you think about college?",
					"Examples might be making new friends, exploring new areas of interest.",
					"Discuss how these ideas can be used to guide the college search."
				]
			}},

			{"type":"videoLink","week":3,  "name":"video",			"content":{
				"heading": 	"Best Fit School", 
				"synopsis": 	"You watch one or two videos about things to consider when looking for a best-fit school.",
				"link": 		"https://bigfuture.collegeboard.org/get-started/video-gallery"
			}},

			{"type":"articleLink", "week":3,  "name":"article", 	"content":{
				"heading": "College Board Big Future",
				"instructions": "You will explore an amazing amount of material about colleges and universities in the U.S.",
				"link": "https://bigfuture.collegeboard.org/?navid=bf-cp"
			}},

			{"type":"assignment", "week":3, "name":"assignment",		"content":{
				"subHeading": "Creating your list of Colleges",
				"instuctionsHeader":"Go to College Board’s College Search page: <a href='https://bigfuture.collegeboard.org/college-search'>here</a>.",
				"instructionList":[
					"Go to College Board’s College Search page:",
					"This search should be done at least three times, refining your list of schools.",
					"At the end of the exercise, you should have a list of no fewer than 10 and no more than 15 schools."
				]
			}},

			{"type":"journal", 	"week":3, 	"name":"journal",	"content":{
				"instructions": "In your journals, you will:",
				"instructionList":[
					"Record your list of  ten possible schools",
					"Write at least two sentences for each of them explaining  why you think each school is a “best fit” for you."
				]				
			}},

			{"type":"assignment", "week":3, "name":"assignment",		"content":{
				"subHeading": "Creating your list of Colleges",
				"instuctionsHeader":"<p>Locate your schools on a map of the U.S. This can be done virtually or on paper.",
			}},

			{"type":"discussion", "week":3, 	"name":"discussion", 	"content":{
				"instructionTitle": "Wrap up: What have you learned about yourself and your college search? Instructor leads a discussion using the following questions:",
				"instructionList":[
					"What have you learned about developing a college list?",
					"Are you surprised by some of the schools on your college list?",
					"Are there schools on your list with which you are unfamiliar?",
					"What would you like to know more about as you learn more about the schools on your list?"
				]
			}},

			{"type":"assignment", 	"week":3, 	"name":"assignment",	"content":{
				"instructions": "Answer the discussion questions in your journals."
			}},
	
			{"type":"overview", "week":4, "name":"overview",	"content":{
				"title":"week 5 Overview:",
				"subTitle":"Learning about the Colleges on Your List",
				"overview":"Learn how to adjust easily and effectively to the first semester of college at an American college or university. You will also learn about the importance of scheduling your time wisely.",
				"objectives":[
					"Look carefully at several of the college websites of schools on your list.",
					"Identify where and how to access information on college websites. For example, you will learn about admission information: deadlines, testing requirements, application process, admission statistics, and the application process for international students.",
					"Answer several questions about your top two or three colleges.",
					"Become more familiar with the schools on your college list and learn how to access critical information on school websites."
				]
			}},

			{"type":"video", "week":4, "name":"video",			"content":{
				"heading": 	"Keeping Track of Your College Applications", 
				"video": 		"Duke_ConEd_Class4"
			}},

			{"type":"activity", "week":4, "name":"activity",		"content":{
				"heading": "Searching for School Websites", 
				"instuctionsHeader": "Find and bookmark the website for each school on your list of preferred colleges or universities."
			}},

			{"type":"activity", "week":4, "name":"activity",		"content":{
				"heading": "Searching for School Websites", 
				"instuctionsHeader": "Explore the website of your favorite college on your list by completing the following questions:",
				"instructionList":[
					"In what area of the country is your favorite college located?",
					"How large is your favorite college? Is this the size you are comfortable with?",
					"Does your favorite college have your major?",
					"Where does your favorite college rank in your major?",
					"Is it easy to get to your favorite college?  Try booking a flight from your hometown to your favorite college and see what the cost is and how easy is it to get to your favorite college.",
					"Repeat questions 1-5 for at least one to two other colleges on your list of colleges you are considering."
				]				
			}},

			{"type":"videoLink", "week":4, "name":"video",			"content":{
				"heading": 	"Best Fit School", 
				"synopsis": 	"This video describes how to choose a college which will suit your needs.",
				"link": 		"https://bigfuture.collegeboard.org/find-colleges/how-find-your-college-fit"
			}},

			{"type":"videoLink", "week":4, "name":"video",			"content":{
				"heading": 	"Best Fit School", 
				"synopsis": 	"Yang Lan, a journalist and entrepreneur who has been called \"the Oprah of China,\" offers insight into the next generation of young Chinese citizens — urban, connected (via microblogs) and alert to injustice. While you are trying to find the best-fit college you should also think further down the road about your future and what role you will play.",
				"link": 		"https://www.ted.com/talks/yang_lan"
			}},
			

			{"type":"discussion", "week":4, 	"name":"discussion", 	"content":{
				"instructionTitle": "Learn about colleges and how to access information on websites",
				"instructionList":[
					"Become more familiar with the schools on your college list.",
					"Learn how to access critical information on school websites."
				]
			}},

			{"type":"activity", "week":4, "name":"activity",		"content":{
				"heading": "Searching for School Websites", 
				"instuctionsHeader": "You will be directed to find and bookmark the website for each school on your list."
			}},

			{"type":"activity", "week":4, "name":"activity",		"content":{
				"heading": "Scavenger hunt Questionaire", 
				"instuctionsHeader": "You will explore the websites of the colleges on your list by completing a scavenger hunt questionnaire."
			}},

			{"type":"videoLink", "week":4, "name":"video",			"content":{
				"heading": 	"Best Fit School", 
				"synopsis": 	"This video describes how to choose a college which will suit your needs.",
				"link": 		"https://bigfuture.collegeboard.org/find-colleges/how-find-your-college-fit"
			}},

			{"type":"videoLink", "week":4, "name":"video",			"content":{
				"heading": 	"Words from Yang Lan", 
				"synopsis": 	"Yang Lan, a journalist and entrepreneur who's been called \"the Oprah of China,\" offers insight into the next generation of young Chinese citizens — urban, connected (via microblogs) and alert to injustice.",
				"link": 		"https://www.ted.com/talks/yang_lan"
			}},

			{"type":"journal", 	"week":4, 	"name":"journal",	"content":{
				"instructions": "In your journals, you will:",
				"instructionList":[
					"Reflect about your life in the future.",
					"Where do you think you will be ten years from now?",
					"Where will you live?",
					"What type of job do you think you will  have had?",
					"Will you be married?",
					"How many jobs do you think you will  have had?"
				]
			}},

			{"type":"article",  "week":4, "name":"article", 	"content":{
				"id":3
			}},

			{"type":"assignment", 	"week":4, 	"name":"assignment",	"content":{
				"subHeading":"College Admissions",
				"instructions": "<a href='http://www.nytimes.com/2010/04/14/education/14waitlist.html?pagewanted=all&_r=0'>Read an article</a> about the current landscape of college admissions and summarize it in your journals."
			}},

			{"type":"journal", 	"week":4, 	"name":"journal",	"content":{
				"instructions": "In your journal you will:",
				"instructionList":[
					"Begin to think about which colleges to which you would like to apply.",
					"Next to each school on your list, write at  least three reasons why you feel you would want to attend the school."
				]
			}},

			{"type":"overview", "week":5, "name":"overview",	"content":{
				"title":"week 6 Overview:",
				"subTitle":"Reality of College Admissions in the US",
				"objectives":[
					"Understand the concepts of “fit” vs. “name”.",
					"Understand what selective and highly selective means.",
					"Assess your own chances of admission at a variety of colleges.",
					"Learn the concepts of “foundation schools, “mid-range schools,” and “long shot schools,” and learn how to “shape” a college list",
					"Use the college list you created in past lessons, and you will research application numbers and acceptance rates for international students as well as other important admissions application data"
				]
			}},

			{"type":"video", "week":5, "name":"video",			"content":{
				"heading": 	"The Reality of College Admission in the United States",
				"video": 		"Duke_ConEd_Class5"
			}},

			{"type":"discussion", "week":5, 	"name":"discussion", 	"content":{
				"heading": "“Fit” vs “name” Brand",
				"instructionTitle": "You Will:",
				"instructionsList":[
					"Review the concept of “fit” vs “name” brand: colleges want to admit students that they feel are a good match for their school.",
					"Discuss some of   the realities of college admission.",
					"Learn about some great schools with which you may not be familiar by sharing information with your classmates.",
					"Share your summaries of the article you read for homework with your classmates by having a partner with whom you can discuss what you read."
				]
			}},

			{"type":"articleLink", "week":5,  "name":"article", 	"content":{
				"heading": "College Board Big Future",
				"instructions": "This article shows the trend for acceptances from 2005 to present.  It also includes some specific facts about various colleges.",
				"link": "https://bigfuture.collegeboard.org/?navid=bf-cp"
			}},

			{"type":"articleLink", "week":5,  "name":"article", 	"content":{
				"heading": "College Board Big Future",
				"instructions": "This provides another list of acceptance rates. Compare this list with the previous information you have.  Compare this list with the previous information you have learned.  Are they similar or different?",
				"link": "http://www.ivywise.com/admission_statistics.html"
			}},

			{"type":"assignment", "week":5, "name":"assignment",		"content":{
				"subHeading": "The College Admission Landscape",
				"instuctionsHeader":"Record in your journal  your findings from  your online research for admission rates for international students.",
				"instructionList":[
					"Compare what you have found during the class discussion and your research online.",
					"Learn the concepts of “foundation schools, “mid-range schools and “long- shot schools.",
					"Is the admission rate the same for international students and American students at American universities?",
					"From what countries are international students applying to U.S. colleges and universities?",
					"What are the top three countries which are sending students to the U.S. to study?",
					"How have admission rates for international students changed over the past ten years?",
					"What are the top three majors for undergraduate international students?",
					"Generally, are the admission requirements for international students different from the admission requirements for American students?"
				]
			}},

			{"type":"videoLink", "week":5, "name":"video",			"content":{
				"heading": 	"Best Fit School", 
				"synopsis": 	"You will watch a video from Big Future by the College Board: “How Should You Choose Colleges to Apply to?”",
				"link": 		"https://bigfuture.collegeboard.org/find-colleges/how-find-your-college-fit"
			}},

			{"type":"activity", "week":5, "name":"activity",		"content":{
				"heading": "Research international student admission rates.",
				"instuctionsHeader": "After your research on  international student admission rates and international student profiles at the schools on your lists create a spreadsheet to input the information you have found. Make certain you have at least 5 schools on your spreadsheet."
			}},

			{"type":"assignment", "week":5, "name":"assignment",		"content":{
				"subHeading": "Your Range of Choices",
				"instuctionsHeader":"Record in your journal  your findings from  your online research for admission rates for international students.",
				"instructionList":[
					"Put the schools on your list of schools you are interested in into the selective (“foundation”), very selective (“mid-range”) and highly selective (“reach or stretch”) categories.",
					"Record the list  in your journals. You may use the same  spreadsheet which you have created in the previous assignment."
				]
			}},

			{"type":"overview", "week":6, "name":"overview",	"content":{
				"title":"week 7 Overview:",
				"subTitle":"The College Admission Process",
				"objective":"How to simplify the College Admission Process and keep track of which colleges you select.",
				"objectives":[
					"Learn the value of an interview if the college allows one.",
					"Learn what mistakes not to make in a college interview.",
					"Learn how selective and highly selective colleges make admissions decisions.",
					"Review the components of a college application on both the common application versus the school-specific applications.  Some of these components include biographical information, academic transcript, personal statement (essay), extracurricular activities, standardized testing, interviews and “hooks” that will get your application noticed.",
					"Understand the difference between agents, educational consultants and college counselors and their roles.",
					"Understand how colleges identify “agent-prepared” applications."
				]
			}},
			
			{"type":"video", "week":6, "name":"video",			"content":{
				"heading": 	"The Reality of College Admission in the United States",
				"video": 		"Duke_ConEd_Class6"
			}},

			{"type":"activity", "week":6, "name":"activity",		"content":{
				"heading": "College Application types", 
				"instuctionsHeader": "Students will learn about the different types of college applications: Common Application, Universal Application, School Specific Applications, and Application supplements. Search online to find these applications and bookmark them. Here is the link for the Universal Application to help you get started: <a href='https://www.universalcollegeapp.com'>here</a>"
			}},

			{"type":"article",  "week":6, "name":"article", 	"content":{
				"id":4
			}},

			{"type":"articleLink", "week":6, "name":"video",			"content":{
				"heading": 	"Insights from a Harvard Graduate", 
				"synopsis": 	"Students will learn the mistakes that are often made during college interviews. Please note not all colleges will give interviews, but if they do it is best to make the effort to interview at the college if you have a chance to do so.",
				"link": 		"http://colleges.collegetoolkit.com/articles/harvardgrad/college_interview.aspx"
			}},

			{"type":"videoLink", "week":6, "name":"video",			"content":{
				"heading": 	"Behind the Scenes", 
				"synopsis": 	"Watch a video which shows how Amherst makes admission decisions.",
				"instructionList":[
					"Learn what is an admissions committee?",
					"Who is on an admission committee",
					"Who reads your application?",
					"How are decisions made?"
				],
				"link": 		"http://www.bing.com/videos/search?q=Brandies+You+tube+admission+committee&FOR"
			}},

			{"type":"videoLink", "week":6, "name":"video",			"content":{
				"heading": 	"Behind the Scenes", 
				"synopsis": 	"This is what  an admission committee looks like at a highly selective private college where admission is less than 30%.The backroom  process of admission: how the admission office and how admission committees work. Compare the two videos to see if the admission process is similar at both colleges.",
				"link": 		"http://www.bing.com/videos/search?q=Brandies+You+tube+admission+committee&FOR"
			}},

			{"type":"assignment", "week":6, "name":"assignment",		"content":{
				"subHeading": "Your Range of Choices",
				"instuctionsHeader":"Students complete all parts of the  Common Application except for the essays will be done at a later time. <a href='https://www.commonapp.org/Login'>link</a>",
			}},

			{"type":"videoLink", "week":6, "name":"video",			"content":{
				"heading": 	"What is a “hook?", 
				"link": 		"https://www.youtube.com/watch?v=9QfzmVmuGqQ."
			}},

			{"type":"assignment", "week":6, "name":"assignment",		"content":{
				"subHeading": "Defining a hook",
				"instuctionsHeader":"Students answer the following questions in their journal",
				"instructionList":[
					"Define the term “hook.”",
					"Give three examples of a “hook.”",
					"Write about what their “hooks” may be.",
					"If they do not have a hook, they should review their profile from week two to brainstorm how they might develop a hook."
				],
			}},

			{"type":"articleLink",  "week":6, "name":"article", 	"content":{
				"heading": "Agents, Consultants and Counselors",
				"instructions": "The differences between agents, educational consultants and college counselors.",
				"link": "http://world.time.com/2012/07/26/forged-transcripts-and-fake-essays-how-unscrupulous-agents-get-chinese-students-into-u-s-schools/"
			}},

			{"type":"journal", 	"week":6, 	"name":"journal",	"content":{
				"instructions": "In your journal you will:",
				"instructionList":[
					"Define the term “hook.”",
					"Give three examples of a “hook.”",
					"Write about what your “hooks” may be.",
					"If you do not have a hook, you should review your profile from week two to brainstorm how you might develop a hook."
				]
			}},

			{"type":"overview", "week":7, 	"name":"overview",	"content":{
				"title":"week 8 Overview:",
				"subTitle":"Using Your High School Years Wisely: How to Build Your Personal Resume",
				"overview":"In this lesson you will explore the variety of extra-curricular activities available to American high school students (athletics, student government, academic clubs, visual and performing arts, after-school jobs, community service) and learn the importance of leadership and persistence in these activities",
				"objectives":[
					"Explore the variety of extra-curricular activities available to American high school students (athletics, student government, academic clubs, visual and performing arts, after-school jobs, community service) and the importance of leadership and persistence in these activities.",
					"Understand the importance of extracurricular activities in the college admissions process",
					"Understand the concept of well-rounded vs targeted interests.",
					"Build a personal activities resume based on your interests."
				]
			}},

			{"type":"article",  "week":7, 	"name":"article", 	"content":{
				"id":5
			}},

			{"type":"article",  "week":7, 	"name":"article", 	"content":{
				"id":6
			}},

			{"type":"discussion", "week":7, 		"name":"discussion", 	"content":{
				"heading": "The Importance of Extra-Curricular Activities",
				"instructions": "Instructor begins by telling students that this lesson is about the importance of building a strong extra-curriculars resume for the college application process. With a partner explore the differences and similarities between extracurricular activities offered to high school students in China and in the U.S. "
			}},

			{"type":"journal", 	"week":7, 		"name":"journal",	"content":{
				"instructions": "In your journal, list at least four differences of how students in China, India and the U.S. use their time outside of school. Answer the following questions:",
				"instructionList":[
					"How do you spend your time outside of school?",
					"Do you participate in extra-curricular activities?",
					"Do you think American students define extra-curricular activities the same way you do?"
				]
			}},

			{"type":"article",  "week":7, 	"name":"article", 	"content":{
				"id":7
			}},

			{"type":"videoLink", "week":7, 	"name":"video",			"content":{
				"heading": "Words from the Deel of Yale",
				"synopsis": 	"Watch the Dean of Undergraduate Admission at Yale University talk about the role of high school activities in a college application.",
				"link": 		"https://bigfuture.collegeboard.org/get-started/outside-the-classroom/extracurriculars-matter-to-you-and-to-colleges"
			}},

			{"type":"article",  "week":7, 	"name":"article", 	"content":{
				"id":8
			}},

			{"type":"journal", 	"week":7, 		"name":"journal",	"content":{
				"instructions": "Answer the following questions in your journal:",
				"instructionList":[
					"List all of your extra-curricular activities. Think broadly and include activities that take place both in and outside of school, during the summer, include service oriented travel. Beside each activity, include the weeks per year that you are involved in the activity. Begin listing your activities at grade 9.",
					"Think broadly and include activities that take place both in and outside of school, during the summer, include service oriented travel.",
					"Beside each activity, include the weeks per year that you are involved in the activity.",
					"Begin listing your activities at grade 9.",
					"Are there extracurricular activity in which you excel?"
				]
			}},

			{"type":"assignment", "week":7, 	"name":"assignment",		"content":{
				"instuctionsHeader":"Complete the following form to build your own extra-curricular resume. <a href='http://www.bernardsboe.com/Guidance/CMFiles/Docs/Sample%20Student%20Activity%20Resume.pdf'>link</a>",
			}},

			{"type":"journal", 	"week":7, 		"name":"journal",	"content":{
				"instructions": "Complete your own extracurricular resume and save it in your journal.",
			}},

			{"type":"overview", "week":8, 	"name":"overview",	"content":{
				"title":"week 9 Overview:",
				"subTitle":"How to Write the Perfect College Essays",
				"overview":"You will write several essays and learn about what makes a good essay or poorly written essay.",
				"objectives":[
					"In this module, you will learn about the general types of college essays and how to distinguish yourself.",
				]
			}},

			{"type":"articleLink", "week":8, 	"name":"article", 	"content":{
				"heading": "You will read several college essays to determine what types of essays grab an admission officer’s attention.",
				"instructions": "Read the article to learn how colleges can tell if an essay is plagiarized and how important it is to do your own essay.",
				"link": "http://theivycoach.com/the-ivy-coach-blog/college-essays/plagiarized-college-essays/"
			}},

			{"type":"article",  "week":8, 	"name":"article", 	"content":{
				"id":9
			}},

			{"type":"articleLink",  "week":8, 	"name":"article", 	"content":{
				"heading": "Sample Essays",
				"instructions": "Read three or four of the sample college essays from the link below.",
				"link": "http://www.accepted.com/college/sampessay02.aspx"
			}},

			{"type":"articleLink", "week":8, 	 "name":"article", 	"content":{
				"heading": "There are several mistakes you can  make on your college essay. Learn about the most common mistakes here.",
				"instructions": "Read the following article and make a list in your journal of the most common mistakes you should avoid in a college essay.",
				"link": "http://theivycoach.com/the-ivy-coach-blog/tag/college-essay-mistakes/"
			}},

			{"type":"journal", 	"week":8, 		"name":"journal",	"content":{
				"instructions": "Based on the essays you just read, make a list of the attributes you think make a good essay."
			}},

			{"type":"articleLink", "week":8, 	 "name":"article", 	"content":{
				"heading": "The following article are five examples of high level college admission essays with admission officers comments on the essays.",
				"instructions": "Choose three out of the five following essays and carefully examine the admission committee comments to determine what makes the essays good.",
				"link": "http://www.internationalstudent.com/essay_writing/college_essay/"
			}},

			{"type":"overview", "week":9, 	"name":"overview",	"content":{
				"title":"week 10 Overview:",
				"subTitle":"College Application Essays: Pt. 2",
				"overview":"You will write sample college application essays and get feedback from a peer.",
				"objectives":[
					"Explore essay topics on the Common Application, write a college application essay. A peer will review your essay.",
					"Write a college application essay.",
					"A peer will review your essay."
				]
			}},

			{"type":"articleLink",  "week":9, 	"name":"article", 	"content":{
				"heading": "Essay Questions on the Common Application",
				"instructions": "Go to the Common Application and choose two of the essay prompts.",

				"link": "https://appsupport.commonapp.org/link/portal/33011/33013/Article/1694/2014-15-Common-Application-Essay-Prompts"
			}},

			{"type":"assignment", "week":9, 	"name":"assignment",		"content":{
				"instructionList":[
					"Before you begin to write your essay, brainstorm some ideas for your essays you have chosen from the Common Application essays.",
					"Think of topics that will not be covered in other parts of the application.",
					"The topic should compelling and unique to you.",
					"If it is amusing, that  is always an added plus."
				]
			}},

			{"type":"assignment", "week":9, 	"name":"assignment",		"content":{
				"instuctionsHeader":"Write two well-developed essays on the topics you chose from the Common Application. Limit each essay to 650 words.",
			}},

			{"type":"discussion", "week":9, 		"name":"discussion", 	"content":{
				"heading": "Peer review of essays",
				"instructions": "Instructor collects all of the essays and randomly distributes them. No student should be reviewing their own essays. Students will make written comments on the essays and after twenty minutes will pair up to give feedback. Students will do two pairings, one with the reviewer of their essays and one providing feedback for their peer.",
				"instructionList":[
					"Think about  constructive comments to give to your partner about the essays.",
					"After twenty minutes  you will  give  your partner  oral feedback. If you want to make notes about the feedback, you may also put the feedback into your journal and later share this feedback with your partner.",
					"Students will do two pairings. They will give a review to their partner, and they will receive a review of their essay from the partner."
				]
			}},
			
			{"type":"activity", "week":9, 	"name":"activity",		"content":{
				"instuctionsHeader": "Two students volunteer to read their essays to the class, which they feel are good examples of a well-written college essay."
			}},

			{"type":"overview", "week":10, 	"name":"overview",	"content":{
				"title":"week 11 Overview:",
				"subTitle":"Visiting College Campuses: How, When and Why to Plan Your School Tour",
				"overview":"Choose four out five of the following virtual college tours and look at different types of schools in different parts of the country.",
				"objectives":[
					"Understand how to prepare for a visit by completing the “College Tour Checklist.",
					"Take assigned virtual college tours",
					"Learn the best times to visit colleges and universities"
				]
			}},

			{"type":"articleLink",  "week":10,  "name":"article", 	"content":{
				"heading": "The College Tour Checklist",
				"instructions": "Review the following college tour checklist before we begin our virtual college tours. We understand that you cannot answer all of the questions on a virtual tour, but this will get you thinking about what you need to look for as you begin your college tours.",
				"link": "https://bigfuture.collegeboard.org/find-colleges/campus-visit-guide/campus-visit-checklist"
			}},

			{"type":"videoLink",  "week":10, "name":"video",			"content":{
				"heading": "The University of Michigan is a very large, liberal arts school located in the Midwest.",
				"synopsis": 	"Take your time looking through the virtual tour of the University of Michigan. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest. ",
				"link": 		"http://umich.edu/search.phpq/virtual%2520tour/"
			}},

			{"type":"videoLink",  "week":10, "name":"video",			"content":{
				"heading": "Wesleyan is a small, liberal arts university located in the Northeast.",
				"synopsis": 	"Take your time looking through the virtual tour of Wesleyan University. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				"link": 		"http://www.wesleyan.edu/admission/videotour/"
			}},

			{"type":"videoLink",  "week":10, "name":"video",			"content":{
				"heading": "North Carolina State University is a large University located in the Southeastern U.S. It specializes in engineering, design and textiles.",
				"synopsis": 	"Take your time looking through the virtual tour of the NCSU. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				"link": 		"http://www.ncsu.edu/about-nc-state/campus-tour/"
			}},

			{"type":"videoLink",  "week":10, "name":"video",			"content":{
				"heading": "The University of Colorado is a large, liberal arts university located in the Southeast. It is a collection of schools and colleges offering programs in specific subject area. You can choose from 13 colleges or school at the university.",
				"synopsis": 	"Take your time looking through the virtual tour of the University of Colorado. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				"link": 		"http://www.scu.edu/ugrad/virtualtour/index.cfm"
			}},


			{"type":"videoLink",  "week":10, "name":"video",			"content":{
				"heading": "Santa Clara University is a private institution in an urban setting located on the West Coast. The most popular major is business management and marketing. This school is considered selective.",
				"synopsis": 	"Take your time looking through the virtual tour of Santa Clara University. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				"link": 		"http://www.colorado.edu/about/visit"
			}},


			{"type":"videoLink",  "week":10, "name":"video",			"content":{
				"heading": "Mt. Holyoke College is a private, all-women’s institution locate in New England. It is the first of the “seven sister schools and is a member of Five College Consortium that includes Amherst College, Smith College, Hampshire College and the University of Massachusetts. ",
				"synopsis": 	"Make your time looking through the virtual tour of Mount Holyoke College. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				"link": 		"https://www.mtholyoke.edu/cic/tour/"
			}},

			{"type":"article",   "week":10, "name":"article", 	"content":{
				"id":10
			}},

			{"type":"journal", 	 "week":10, 	"name":"journal",	"content":{
				"instructions": "Answer the following questions in your journal:",
				"instructionList":[
					"What size college or university are you looking for?",
					"Which location in the U.S. do you prefer?",
					"Are you looking for a liberal arts and sciences college?",
					"Is financial aid a consideration in your selection of colleges?",
					"Are athletics or arts programs important to you?",
					"Is convenient travel to your native country important to you?"
				]
			}},

			{"type":"overview",  "week":11, "name":"overview",	"content":{
				"title":"week 12 Overview:",
				"subTitle":"The College Interview: How to Prepare and Practice",
				"overview":"Learn about college interviews and practice doing one with a peer.",
				"objectives":[
					"Complete the College Board Interview guide",
					"Review how interviews are used in the college admission process",
					"The do’s and don’ts of college interviewing",
					"Re-visit the Web sites of colleges on your list",
					"Do mock interviews with your designated partners",
					"Learn about college interviews and practice doing one with a peer."
				]
			}},

			{"type":"video", "week":11, "name":"video",			"content":{
				"heading": 	"Prepare and Practice for you College Interview",
				"video": 		"Duke_ConEd_Class12"
			}},

			{"type":"articleLink",  "week":11, "name":"article", 	"content":{
				"heading": "College Interviews: Practice and Strategies",
				"instructions": "Learn the basics about a college interviews. Answer the questions in your journal.",
				"link": "https://bigfuture.collegeboard.org/get-in/interviews/college-interviews-practice-questions-and-strategies"
			}},

			{"type":"journal", 	"week":11, 	"name":"journal",	"content":{
				"instructions": "Answer the questions on the link from College Board in your journal:",
				"instructionList":[
					"What size college or university are you looking for?",
					"Which location in the U.S. do you prefer?",
					"Are you looking for a liberal arts and sciences college?",
					"Is financial aid a consideration in your selection of colleges?",
					"Are athletics or arts programs important to you?",
					"Is convenient travel to your native country important to you?"
				]
			}},

			{"type":"article",  "week":11, "name":"article", 	"content":{
				"id":11
			}},

			{"type":"journal", 	"week":11, 	"name":"journal",	"content":{
				"instructions": "In your journal, prepare a list of questions that you will use to interview your classmates. You will be provided with a rubric to score your interviews of your classmates."
			}},

			{"type":"articleLink", "week":11,  "name":"article", 	"content":{
				"heading": "Perparing for the Interview",
				"instructions": "Determine what type of questions you need to prepare and what is interesting information about yourself which you can tell the interviewer.",
				"link": "http://www.cbsnews.com/news/can-you-answer-these-13-college-interview-questions/"
			}},
			
			{"type":"activity", "week":11, "name":"activity",		"content":{
				"heading": "Practicing the Interview",
				"instuctionsHeader": "Pair up  with two different classmates. You will do a mock interview  with each of your partners. After you have done your interview, switch and interview your partners . Use the questions which you read about earlier in the class to focus your interviews."
			}},

			{"type":"wrapup", "week":11, "name":"wrapup",		"content":{
				"synopsis": "Four students volunteer to perform two mock interviews in front of the class.",
				"takeaways": "Students reflect in their journals about what worked well for them in their interviews and what did not. They develop a personal list of interview do’s and don’ts."
			}},

			{"type":"overview", "week":12, "name":"overview",	"content":{
				"title":"week 13 Overview:",
				"subTitle":"The Role of Standardized testing in the College Admissions Process / Introduction to Case Studies",
				"overview":"In this module you will learn about the various tests that college and universities use to screen students for admission. You will develop a calendar for your test preparation that will help you to plan and prepare for your tests. At the end of this module, you will watch some real admission committees at work and make some admission decisions of your own.",
				"objectives":[
					"Learn the role of standardized test scores in the college admission process.",
					"Learn that “test-optional” colleges in the U.S. are not test optional for international students. We will discuss what tests you must take in order to apply to American colleges and universities.",
					"Learn the differences between the SAT and ACT, as well as SAT II: Subject Tests.",
					"Understand the prevalence of test prep courses and tutors in the US.",
					"Do mock interviews with your designated partners",
					"Develop a testing calendar to address the best times to take standardized college admissions tests."
				]
			}},

			{"type":"video", "week":12, "name":"video",			"content":{
				"heading": 	"The Role of Standardized Testing in the College Admission Process",
				"video": 		"Duke_ConEd_Class13"
			}},

			{"type":"articleLink",  "week":12, "name":"article", 	"content":{
				"heading": "College Interviews: Practice and Strategies",
				"synopsis": "Most four-year colleges consider applicants’ scores on college admission tests when deciding whom to accept. Test scores are just one part of your college application. College admission officers give the most weight and importance to your high school grades and whether you’re challenging yourself.",
				"instructions": "Read the following article about the role of tests scores in the college admission process.",
				"link": "https://bigfuture.collegeboard.org/get-in/testing/the-real-role-of-tests-in-your-college-application#"
			}},

			{"type":"links",  "week":12, "name":"links", 	"content":{
				"heading": "College Interviews: Practice and Strategies",
				"synopsis": "There are now many “test optional” colleges and universities in the U.S. However, the option not to submit tests scores does not apply to international students. The following links are some examples of colleges that are test-optional for American students but have different requirements for international students. As you can see, the test requirements are significantly different from school to school.",
				"instructions": "Look through the following admission sites and make some notes in your journal about what tests they require from international students.",
				"linkList":[
					{"name":"link 1", "link":"http://admissions.wfu.edu/apply/international.php#application"},
					{"name":"link 2", "link":"http://www.brandeis.edu/admissions/apply/international.html"},
					{"name":"link 3", "link":"http://admissions.pages.tcnj.edu/resources-for/international-applicants"},
					{"name":"link 4", "link":"http://admissions.tamu.edu/international/freshman/"},
				]
			}},
			
			{"type":"activity", "week":12, "name":"activity",		"content":{
				"heading": "International Student Admission",
				"instuctionsHeader": "Look at the international student admission pages for the school on your list. Record the test requirements for the schools to which you will be applying and record those requirements in your journal."
			}},

			{"type":"videoLink", "week":12, "name":"video",			"content":{
				"heading": 	"Video to Learn about the SAT",
				"synopsis": 	"The SAT is a globally recognized college admission test that lets you show colleges what you know and how well you can apply that knowledge. It tests your knowledge of reading, writing and math — subjects that are taught every day in high school classrooms. Most students take the SAT during their junior or senior year of high school, and almost all colleges and universities use the SAT to make admission decisions.",
				"link": 		"http://sat.collegeboard.org/about-tests/sat"
			}},

			{"type":"articleLink",  "week":12, "name":"article", 	"content":{
				"heading": "Which Test is right for you? ACT or SAT.",
				"synopsis": "Most international students take the SAT when preparing to apply to U.S. colleges. But the SAT is not the only test most colleges accept. Another test, the ACT, is also accepted. For international students, taking the ACT is not always easy, however.",
				"instructions": "Read the following articles and decide whether or not you think you would be a better candidate for the ACT or SAT. Make notes in your journal about test dates, locations and special support services available for international students. There are special rules for taking the ACT in each country. Make certain you investigate the rules for taking the ACT in your particular country and record the rules in your journal.",
				"link": "http://www.usnews.com/education/best-colleges/articles/2012/11/20/should-international-students-take-the-act"
			}},

			{"type":"videoLink", "week":12, "name":"video",			"content":{
				"heading": 	"Subject Tests",
				"synopsis": 	"Subject Tests are hour-long, content-based tests that allow you to showcase achievement in specific subject areas where you excel. These are the only national admission tests where you choose the tests that best showcase your achievements and interests.",
				"instructions": "View the following video to learn about the SAT II, which are also known as the subject test. Look at the schools on your list to determine if you want to or need to take the SAT II.",
				"link": 		"http://sat.collegeboard.org/about-tests/sat-subject-tests"
			}},

			{"type":"articleLink",  "week":12, "name":"article", 	"content":{
				"heading": "Create a College Board Account",
				"synopsis": "In order to complete the next two activities, you need to set up an account on the College Board Web site. It is called “My Organizer.”",
				"link": "https://account.collegeboard.org/iamweb/smartRegister?appId=247&DURL=http://sat.collegeboard.org/practice/sat-question-of-the-day"
			}},

			{"type":"articleLink",  "week":12, "name":"article", 	"content":{
				"heading": "The College Board offers an SAT study plan",
				"synopsis": "Answer the three questions on the College Board Web site to make your personalized study plan. Record your study plan in your journal.",
				"link": "http://sat.collegeboard.org/practice/sat-study-plan"
			}},

			{"type":"articleLink",  "week":12, "name":"article", 	"content":{
				"heading": "Question of the day",
				"synopsis": "To help students prepare for the SAT, The College Board offers practice questions each day.",
				"instructions": "Go to the following link and take the practice questions for the last 10 days.",
				"link": "http://sat.collegeboard.org/practice/sat-question-of-the-day"
			}},

			{"type":"articleLink", "week":12, "name":"article",		"content":{
				"instructionList":[
					"Choose the date you might want to take the International SAT.",
					"Following these dates are the dates for the ACT.",
					"Please note the following restrictions for taking the ACT"
				],
				"link":"http://sat.collegeboard.org/register/sat-international-dates"
			}},

			{"type":"articleLink", "week":12, "name":"article",		"content":{
				"instructions":"ACt registration dates",
				"link":"http://www.actstudent.org/regist/outside/"
			}},

			{"type":"overview", "week":13, "name":"overview",	"content":{
				"title":"week 14 Overview:",
				"subTitle":"Case Studies - The College Admission Committee",
				"overview":"How do colleges make their decisions about whom the admit? In this module you will learn about how college admission committees work. You will also form your own admission committee and make some difficult admission decision.",
				"objectives":[
					"Gain a better understanding of how admission committee decisions are made.",
					"View a video of how admission committees work.",
					"Form admissions committees.",
					"Make admission decisions as a committee"
				]
			}},

			{"type":"videoLink", "week":13,  "name":"video",			"content":{
				"heading": 	"How committees Work",
				"synopsis": 	"Learn how admission committees work at selective and highly selective colleges in the U.S.",
				"instructions": "View the following video to learn about the SAT II, which are also known as the subject test. Look at the schools on your list to determine if you want to or need to take the SAT II.",
				"link": 		"http://www.bing.com/videos/search?q=videos+for+college+admissions&FORM=VIRE3#view=detail&mid=6C59D32A7602A23A87AC6C59D32A7602A23A87AC"
			}},
			
			{"type":"activity", "week":13,  "name":"activity",		"content":{
				"heading": "International Student Admission",
				"instructionList": [
					"Divide into groups of five to form “admission committees” for fictitious “Prestigious U.”",
					"You will be given five case studies to review. ",
					"After you have individually read all five case studies, you will get together into your “admission committee” to discuss each case study. ",
					"Create a spreadsheet to keep track of what traits you think are important for admission.",
					"Set up a ranking system from 1 to 5 to determine how you rank each of the students",
					"If you choose to do so, you may also use the CS evaluation worksheet found on the link below.",
					"Each one of you will “present” one case study each to your admission committee until all the cases have been presented.",
					"Admission to “Prestigious” University should be offered to two of the five students only.",
					"You can find your case studies <a href='http://www.admissions.upenn.edu/apply/admissions-case-studies-program'>here</a>"
				]
			}},

			{"type":"overview", "week":14, "name":"overview",	"content":{
				"title":"week 15 Overview:",
				"subTitle":"Common Myths and Wrap Up",
				"overview":"In this lesson you will learn about the top ten myths about applying to college in the U.S. and hone the list of colleges to which you will apply.",
				"objectives":[
					"Report the results of your admission committee meeting to the class.",
					"Review the Top Ten Common Myths about the college application process in the US.",
					"Complete a list of your top ten take-aways.",
					"Hone your college list"
				]
			}},

			{"type":"video", "week":14, "name":"video",			"content":{
				"heading": 	"Wrap-Up Multimedia College Prep",
				"video": 		"Duke_ConEd_Class15"
			}},

			{"type":"discussion", "week":14, "name":"discussion", 	"content":{
				"heading": "Case Studies Admission Decisions",
				"instructions": "Instructor collects all of the essays and randomly distributes them. No student should be reviewing their own essays. Students will make written comments on the essays and after twenty minutes will pair up to give feedback. Students will do two pairings, one with the reviewer of their essays and one providing feedback for their peer.",
				"instructionList":[
					"Each group will chose one student from your “admission committee” to explain the committee’s admission decisions.",
					"A class representative compiles the result of the decision. ",
					"How consistent were the admission committee decisions?",
					"Was there a general agreement within the committees about who should be selected?",
					"Or were there differences of opinion about who should be selected?",
					"Which case studies prompted the most discussion?"
				]
			}},

			{"type":"articleLink", "week":14, "name":"article",		"content":{
				"instructions":"Read about the Ten Common Myths about applying to college in the US.",
				"link":"http://mycollegeguide.org/articles/11/189"
			}},

			{"type":"journal", "week":14, "name":"journal",	"content":{
				"instructionList": [
					"Review your journals and make a list of your top ten take-aways from Semester 1",
					"A take-away is the main idea you have learned after exploring a topic.",
					"Three students will volunteer to read their lists to the class."
				]
			}},

			{"type":"article",  "week":14, "name":"article", 	"content":{
				"id":12
			}},
			
			{"type":"activity", "week":14, "name":"activity",		"content":{
				"instructionList": [
					"Look up the admission rates for every college or university on your final  list of colleges to which you want to apply.",
					"Keep in mind that the admission rates for international students are much more competitive.",
					"If you can find admission rates for international students at the schools on your list, that is even better.",
					"Record these admission rates in your journal."
				]
			}},

			{"type":"assignment", "week":14, "name":"assignment",		"content":{
				"instructionList":[
					"Review your list of colleges and universities and based on their admission rates, group the schools on your list into the following categories: Most Likely, Selective/Likely; Very Selective and Reach.",
					"Record your final school list in your journal."
				]
			}}
		];

		frames.map(function(item, id){
			item.index = id; 
			item.template = makeTemplateObjectByName(item.type); 
			item.active = ((id===0)?"active":"");
		});

	};

	var initializeWeeks = function() {
		weeks = new Entities.WeekCollection([
			{id: 0},
			{id: 1},
			{id: 2},
			{id: 3},
			{id: 4},
			{id: 5},
			{id: 6},
			{id: 7},
			{id: 8},
			{id: 9},
			{id: 10},
			{id: 11},
			{id: 12},
			{id: 13},
			{id: 14}
		]);
	};

	var initializeClasses = function(results) {
		classes = new Entities.ClassCollection([
			{
				id: 0,
				weeks: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
			},
			{
				id: 1,
				weeks: [1]
			}
		]);
	};

	var API = {
		getFrameEntities: function(id) {
			var def = $.Deferred();

			if (frames === undefined){
				initializeFrameTemplates();
				initializeFrames();
			}

			var keyFrames = _.filter(frames, function(obj){
				return(obj.week === id);
			});

			keyFrames.map(function(obj, id){
				obj.weekItem = id;
			});

			console.log(keyFrames);
			
			var frameCollection = new Entities.FrameCollection(keyFrames);
			def.resolve(frameCollection);

			return def.promise();
		},

		getWeekEntities: function(){
			var def = $.Deferred();

			if (weeks === undefined){
				initializeWeeks();
			}

			// var WeekData = Parse.Object.extend("Weeks");
			// var query = new Parse.Query(WeekData);
			// query.equalTo("")

			def.resolve(weeks);
			return def.promise();
		},

		getClassModel: function(id) {
			var def = $.Deferred();

			var ClassData = Parse.Object.extend("Classes");
			var query = new Parse.Query(ClassData);
			query.equalTo("index", id);

			if (classes === undefined){
				initializeClasses();
			}

			query.find({
				success: function(results) {
					//need to convert to a model
					var classModel = new Entities.Class({
						index:results[0].get('index'),
						weeks:results[0].get('weeks')
					});

					def.resolve(classModel);
				}
			});
			
			return def.promise();
		}
	};

	DukeApp.reqres.setHandler("frame:entities", function(id){
		return API.getFrameEntities(id);
	});

	DukeApp.reqres.setHandler("week:entities", function(){
		return API.getWeekEntities();
	});

	DukeApp.reqres.setHandler("class:entities", function(id){
		return API.getClassModel(id);
	});
});