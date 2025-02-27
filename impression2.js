define(['pipAPI', 'https://rjrydell.github.io/ddm1/jamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({

		trialsInBlock : [30, 30, 30, 30, 30, 30, 30, 30], //Number of trials in each block 
		trialsInExample : 5, //Change to 0 if you don't want an example block
	
		sortingLabel1 : 'Yes', //Response is coded as 0. 
		sortingLabel2 : 'No',  //Response is coded as 1.
		
		rightKey : 'i', 
		leftKey : 'e',

		base_url : {//Where are your images at?
				image : 'https://rjrydell.github.io/ddm1/images'
			}, 
		
		targetCat : 'SECOND word', //The name of the targets (used in the instructions)

		//The default font color of text in the task (e.g., for key labels).
		fontColor : '#FFFFFF', 

		//Set the canvas of the task
		canvas : {
			maxWidth: 850,
			proportions : 0.7,
			background: '#FFFFFF',
			borderWidth: 5,
			canvasBackground: '#000000',//this is black background 000000
			borderColor: 'lightblue'
		}, 
		
		
		//  ***** REAL TRIAL ************//
		//The CSS for all the prime stimuli.
		primeStimulusCSS : {color:'#FFFF00','font-size':'2.3em'},
		//The prime categories.
		primeCats :  [
			{
				nameForFeedback : 'fix1',  //Will be used in the user feedback 
				nameForLogging : 'fix1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : '+'}, 
					{word : '+'},
					{word : '+'},
					{word : '+'},
					{word : '+'}, 
					{word : '+'},
					{word : '+'},
					{word : '+'},
					{word : '+'},
					{word : '+'}]

			}, 
			{
				nameForFeedback : 'fix2',  //Will be used in the user feedback 
				nameForLogging : 'fix2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    	{word : 'Is Bob?'}, 
					{word : 'Is Bob?'},
					{word : 'Is Bob?'},
					{word : 'Is Bob?'},
					{word : 'Is Bob?'}, 
					{word : 'Is Bob?'},
					{word : 'Is Bob?'},
					{word : 'Is Bob?'},
					{word : 'Is Bob?'},
					{word : 'Is Bob?'}]
			}
		],

		targetCats :  [
				{
				nameForLogging : 'Postitive',  //Will be used in the logging
				//An array of all media objects for this category. The default is pic1-pic200.jpg
				mediaArray : [
					{word : 'Amusing'}, 
					{word : 'Awesome'},
					{word : 'Best'}, 
					{word : 'Brilliant'},
					{word : 'Capable'}, 
					{word : 'Caring'},
					{word : 'Charming'}, 
					{word : 'Cheerful'},
					{word : 'Communicative'}, 
					{word : 'Confident'},
					{word : 'Convincing'}, 
					{word : 'Cool'},
					{word : 'Energetic'}, 
					{word : 'Excited'},
					{word : 'Fantastic'}, 
					{word : 'Free'},
					{word : 'Friendly'}, 
					{word : 'Fulfilled'},
					{word : 'Fun'}, 
					{word : 'Giving'},
					{word : 'Good'}, 
					{word : 'Happy'},
					{word : 'Hardworking'}, 
					{word : 'Helpful'},
					{word : 'Hopeful'}, 
					{word : 'Humorous'},
					{word : 'Independent'}, 
					{word : 'Intelligent'},
					{word : 'Interested'}, 
					{word : 'Kind'},
					{word : 'Lovable'}, 
					{word : 'Mature'},
					{word : 'Optimistic'}, 
					{word : 'Organized'},
					{word : 'Outgoing'}, 
					{word : 'Playful'},
					{word : 'Polite'}, 
					{word : 'Productive'},
					{word : 'Resilient'}, 
					{word : 'Satisfied'}]				
			},
				{
				nameForLogging : 'Negative',  //Will be used in the logging
				//An array of all media objects for this category. The default is pic1-pic200.jpg
				mediaArray : [
					{word : 'Afraid'}, 
					{word : 'Alone'},
					{word : 'Angry'}, 
					{word : 'Annoyed'},
					{word : 'Ashamed'}, 
					{word : 'Awful'},
					{word : 'Bad'}, 
					{word : 'Cynical'},
					{word : 'Depressed'}, 
					{word : 'Disorganized'},
					{word : 'Doubtful'}, 
					{word : 'Dumb'},
					{word : 'Embarrassed'}, 
					{word : 'Failure'},
					{word : 'Fearful'}, 
					{word : 'Gloomy'},
					{word : 'Guilty'}, 
					{word : 'Hateful'},
					{word : 'Horrible'}, 
					{word : 'Hopeless'},
					{word : 'Immature'}, 
					{word : 'Incompetent'},
					{word : 'Indecisive'}, 
					{word : 'Insecure'},
					{word : 'Irresponsible'}, 
					{word : 'Irritable'},
					{word : 'Isolated'}, 
					{word : 'Lazy'},
					{word : 'Liar'}, 
					{word : 'Lonely'},
					{word : 'Lost'}, 
					{word : 'Nasty'},
					{word : 'Naughty'}, 
					{word : 'Regretful'},
					{word : 'Revolting'}, 
					{word : 'Scared'},
					{word : 'Self-centered'}, 
					{word : 'Withdrawn'},
					{word : 'Worried'}, 
					{word : 'Worthless'}]			
			},
			],

		targetStimulusCSS : {color:'#0000FF','font-size':'2.3em'},
		
		
		//The fixation stimulus 
		fixationStimulus : {
			css : {color:'#FFFFFF', 'font-size':'3em'}, 
			media : {word:'+'}
		}, 


		firstBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial; color:#FFFFFF"><br/>' + 
			"See how fast it is? Don't worry if you miss some. " + 
			'Go with your gut feelings.<br/><br/>' + 
			'After seeing the Bob is? screen, concentrate on each trait and indicate whether you think Bob DOES have the trait with the <b>rightKey</b> key,  ' + 
			'or indicate whether you think Bob DOES NOT has the trait with the <b>leftKey</b> key.<br/><br/>' + 
			'Read each trait and make a response quickly, while trying to minimize errors. ' + 
			'<p style="font-size:16px; text-align:center; font-family:arial; color:#FFFFFF"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial; color:#FFFFFF">' + 
			'[Round 2 of nBlocks]</p></div>',
		
		middleBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial; color:#FFFFFF"><br/>' + 
			'Continue to another round of this task. ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on each trait and indicate whether you think Bob DOES have the trait with the <b>rightKey</b> key,  ' + 
			'or indicate whether you think Bob DOES NOT has the trait with the <b>leftKey</b> key.<br/><br/>' + 
			'Read each trait and make a response quickly, while trying to minimize errors. ' + 
			'<p style="font-size:16px; text-align:center; font-family:arial; color:#FFFFFF"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial; color:#FFFFFF">' + 
			'[Round blockNum of nBlocks]</p></div>',
	
		lastBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial; color:#FFFFFF"><br/>' + 
			'Ready for the FINAL round? ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on each trait and indicate whether you think Bob DOES have the trait with the <b>rightKey</b> key,  ' + 
			'or indicate whether you think Bob DOES NOT has the trait with the <b>leftKey</b> key.<br/><br/>' + 

			'Read each trait and make a response quickly, while trying to minimize errors. ' + 
			'<p style="font-size:16px; text-align:center; font-family:arial; color:#FFFFFF"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial; color:#FFFFFF">' + 
			'[Round blockNum of nBlocks]</p></div>',
		
		endText: '<div><p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial; color:#FFFFFF">'+
			'You have completed the task<br/><br/>Press "space" to continue to next task.</p></div>', 
			

		
		//Duration parameters.
		fixationDuration : -1, //It means that by default we do not use fixation.
		primeDuration : 700, 
		postPrimeDuration : 75, //Duration of blank screen between prime and target.
		targetDuration : 1000, //Duration of target presentation.
		ITI : 1500, //Duration between trials.

		//  ********* END REAL TRIALS **********//


		// *********  EXAMPLE ROUND  *****************
		
			//Instructions text for the 2-responses version.
		exampleBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial; color:#FFFFFF"><br/>' + 
			'In this task, you will be asked if you think Bob has several traits, and you will see each trait several times. First you will see an + in the middle of the screen followed by a screen that says - Bob is?Then you will see the trait. You are asked to determine is you think that Bob has the trait or if Bob does not have the trait. Press the <b>leftKey</b> key or the NO response if you DO NOT think Bob has the trait. Hit the <B>rightKey</B> or YES response if you DO think Bob has the trait.<br/><br/>' +  
			'The items appear and disappear quickly.  ' + 
			'<p style="font-size:16px; text-align:center; font-family:arial; color:#FFFFFF"><br/><br/>' + 
			'When you are ready to try a few practice responses, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial; color:#FFFFFF">' + 
			'[Round 1 of nBlocks]</p></div>',

		
		//The fixation stimulus in the example block
		exampleFixationStimulus : {
			css : {color:'#FFFFFF', 'font-size':'3em'}, 
			media : {word:'+'}
		}, 
		
		examplePrimeStimulus : {
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [
				{word : '+'}, 
				{word : '+'}, 
				{word : '+'},
				{word: '+'},
				{word: '+'}
			]
		},

		exampleTargetStimulus : {
			nameForLogging : 'exampleTarget', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [
				{word : 'Positive'}, 
				{word : 'Negative'},
				{word : 'Efficient'},
				{word: 'Harmless'},
				{word: 'Harsh'}
			]
		},

		//For the example block (often practice)  - MEASURED IN MILLISECONS.  1000MS = 1 SECOND
		exampleBlock_fixationDuration : -1, 
		exampleBlock_primeDuration : 700, 
		exampleBlock_postPrimeDuration : 75, 
		exampleBlock_targetDuration : 1000,

		// ****** END EXAMPLE ROUND ********
		
	});
});
