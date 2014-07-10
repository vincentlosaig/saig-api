/*
 * Serve JSON to our AngularJS client
 */

// initialize our faux database
var data = {
	"schema" : {				
		"qms" : {
			"title" : "QMS Audit",			
			"created" : "2014-06-16 09:45:00",
			"created-by" : "Vincent Lo",
			"questionSet" : 1
		}	
	},
	"questionSet" : {
		"1" : {
			"sections" : [
				{
					"id" : 1,
					"title" : "General",
					"children" : [
						{ 
							"id" : 2,
							"title" : "Processes",
							"children" : [],
							"questions" : [
								{
									"id" : 1,
									"title": "What are the main processes of the QMS?",
									"type": "text"
								},					
								{
									"id" : 4,
									"title" : "What processes could be improved for the QMS?",
									"type" : "textarea"
								}
							]
						},
						{
							"id" : 3,
							"title" : "Rating",
							"children" : [],
							"questions" : [
								{
									"id" : 5,
									"title" : "How satisfied are you with the QMS?",
									"type" : "radio",
									"options" : [
										{
											"title" : "Unsatisfied"				
										},
										{
											"title" : "Content"
										},
										{
											"title" : "Satisfied"
										}
									]
								},
								{
									"id" : 6,
									"title" : "What rating out of 3 did the audit achieve?",
									"type" : "radio",
									"options" : [
										{
											"title" : "1"				
										},
										{
											"title" : "2"
										},
										{
											"title" : "3"
										}
									]
								}
							]
						}
					],
					"questions" : [
						{
							"id" : 0,
							"title": "Has this organization established a Quality Management System?",
							"type": "checkbox"
						},
						{
							"id" : 2,
							"title": "Does the QMS meet standards?",
							"type": "checkbox"
						}
					]
				},
				{
					"id" : 4,
					"title" : "Outcome",
					"children" : [],
					"questions" : [
						{
							"id" : 3,
							"title" : "What was the outcome of this audit?",
							"type" : "text"
						},
						{
							"id" : 100,
							"title" : "Has this audit been complete?",
							"type" : "checkbox"
						}
					]
				}
			]
		}			
	}	
};

exports.schemas = function (req, res) {
	return data;
};