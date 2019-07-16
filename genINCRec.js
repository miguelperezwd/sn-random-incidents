/*
Hello! This is a simple JS script to generate random,
to use it you have to put it in a Scheduled Job and set it to run On Demand.
It will generate the number of incidents you want, you only need to set things like the categories and the assignment groups,
there are a few commented lines with Math.Random method, use them where you need them.

For the assignment groups, I recommend using sys_id's as you can see in line 20.

Regards,
Miguel.
*/
//Number of Incident records to create
var recordsToMake = 574;

// Declare and initialize variables used in the script
var genINCRec;
var i;
var tableName = "incident";
var categoryArray = ["access","connectivity","installation","malfunction","printer","information","security","slowness","unavailable","unclassified"];
var selectCategory = "";
var assignmentGroupArray = ["82b59283dbea3300a6f0a0f2ca96198c","0a52d3dcd7011200f2d224837e6103f2","086c8f4ddb023300a6f0a0f2ca961982","e8eb838ddb023300a6f0a0f2ca961914","679434f053231300e321ddeeff7b12d8","26c59a83dbea3300a6f0a0f2ca9619aa","e1855e83dbea3300a6f0a0f2ca961965","c2d592c3dbea3300a6f0a0f2ca9619de","d625dccec0a8016700a222a0f7900d06","24369283dbea3300a6f0a0f2ca961990"];
var selectAssignmentGroup = "";
//var stateArray = [6,7];
//var selectState = "";
var pickDate = 1;

// For loop to create records
for (i = 0; i < recordsToMake; i++) {

	// Create an empty record for the Incident table
	genINCRec = new GlideRecord(tableName);
	genINCRec.newRecord();

	// Select a random value from the category array and set it
	// selectCategory = categoryArray[(Math.floor(Math.random() * 10))];
	// genINCRec.setValue("category", selectCategory);

	// Use this category
	genINCRec.setValue("category", "malfunction");

	//Set the Opened value (date/time) to a date between yesterday and seven months ago
	var rightNow = new GlideDateTime();
	pickDate = (Math.floor(Math.random() * 360) + 1);
	rightNow.addDaysUTC(-pickDate);
	genINCRec.setValue("opened_at",rightNow.getDate());

	// Select a random value from the assignment group array and set it
	// selectAssignmentGroup = assignmentGroupArray[(Math.floor(Math.random() * 10))];
	// genINCRec.setValue("assignment_group", selectAssignmentGroup);

	// Assign the case to this assignment group
	genINCRec.setValue("assignment_group", "d625dccec0a8016700a222a0f7900d06");

	// Select a random value from the state array and set it
	// selectState = stateArray[(Math.floor(Math.random() * 2))];
	// genINCRec.setValue("state", selectState);

	// Set the state to Closed
	genINCRec.setValue("state", 7);

	// Set close code and notes
	genINCRec.setValue("close_code","Solved (Permanently)");
	genINCRec.setValue("close_notes","Solved");

	//Set the Short description field value (string)
	genINCRec.setValue("short_description", "Windows restarted without notice");

	// Insert the new Incident record into the table
	genINCRec.insert();

}
