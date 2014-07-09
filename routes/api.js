/*
 * Serve JSON to our AngularJS client
 */

// initialize our faux database
var data = {
	"schema" : {				
		"qms" : {
			"title" : "QMS Audit",
			"questions": [
				{
					"id" : 0,
					"title": "Has this organization established a Quality Management System?",
					"type": "checkbox"
				},
				{
					"id" : 2,
					"title": "Does the QMS meet standards?",
					"type": "checkbox"
				},
				{
					"id" : 1,
					"title": "What are the main processes of the QMS?",
					"type": "text"
				},					
				{
					"id" : 4,
					"title" : "What processes could be improved for the QMS?",
					"type" : "textarea"
				},
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
				},
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
			],
			"created" : "2014-06-16 09:45:00",
			"created-by" : "Vincent Lo"
		}	
	}
};

// GET

exports.schemas = function (req, res) {
	return data;
};

exports.questions = function (req, res) {
  var questions = [];
  data["schema"]["qms"]["questions"].forEach(function (q, i) {
    questions.push({
      id: i,
      title: q.title,
      type: q.type
    });
  });
  res.json({
    questions: questions
  });
};

exports.question = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data["schema"]["qms"]["questions"].length) {
    res.json({
      question: data["schema"]["qms"]["questions"][id]
    });
  } else {
    res.json(false);
  }
};

// POST
exports.addQuestion = function (req, res) {
  data["schema"]["qms"]["questions"].push(req.body);
  res.json(req.body);
};

// PUT
exports.editQuestion = function (req, res) {
  var id = req.params.id;

  if (id >= 0) {
    data["schema"]["qms"]["questions"][id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE
exports.deleteQuestion = function (req, res) {
  var id = req.params.id;

  if (id >= 0) {
    data["schema"]["qms"]["questions"].splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};