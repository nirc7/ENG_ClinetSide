//////////////////////////////////////////////////////////
// DATA for quiz
// questions in the q array
// answers in the a array


q=new Array()	// array of questions
a=new Array()	// array of answers - for the questiom with same i

q[0]="מפרט פורמלי מבוסס ישויות-יחסים"
a[0]="גישה מבוססת לוגיקה - לוגיקת יחסים"
q[1]="ישויות הן"
a[1]="כל אובייקט"
q[2]="ישות מוגדרת על ידי"
a[2]="אוסף התכונות שלה"
q[3]="יחס מוגדר על ידי"
a[3]="ישויות ביניהם הוא קיים"
q[4]="סדר הישויות ביחס"
a[4]="משנה"
q[5]="תבנית היחס היא"
a[5]="הגדרת סוג היחס מבחינת טיפוסי הארגומנטים כמו רשומה או אובייקט"
q[6]="כל ישות ביחס מסויים תהיה מ"
a[6]="טיפוס הישויות המופיע בתבנית היחס"
q[7]="מקובל לקבץ את כל היחסים השייכים לאותה תבנית יחסים"
a[7]="לטבלה אחת"
q[8]="כל שורה בטבלה"
a[8]="יחס ספציפי"
q[9]="כל עמודה בטבלה"
a[9]="טיפוס ישויות"
q[10]="בדיאגרמות ישויות-קשרים-מלבן מסמן"
a[10]="טיפוס ישויות"
q[11]="טיפוס ישויות"
a[11]="אוסף של ישויות מאותו סוג"
q[12]="תכונה של ישות או קשר"
a[12]="מידע המתאר היבט מסוים של ישות או קשר"
q[13]="בדיאגרמות ישויות-קשרים-אליפסה מסמנת"
a[13]="תכונות של אוביקטים"
q[14]="בדיאגרמות ישויות-קשרים-מעויין מסמן"
a[14]="טיפוסי קשרים"
// END OF DATA


///////////////////////////////////////////////////////////////////////////
//GLOBAL VARIABLES

	/*indices of answers to be displayed - one correct*/
	alternative_answers=new Array();	

	//the index of the question selected and the correct answer
	correct=0;	
	
	//the index of the correct answer in the alternatives array
	correctpos=1
	
	// the default number of alternative answers
	num=4
	
	// default choice of answer
	choice=1


///////////////////////////////////////////////////////////////////////////
//RANDOM utilities

// a random element in an array
function randq(q) {
	return (q[Math.floor(Math.random()*q.length)])
}

// a random index in an array
function rand(q) {
	return Math.floor(Math.random()*q.length)
}

//random int 0-max (same as rand() in C)
function ran(max) {
	return Math.floor(Math.random()*max)
}



//decides the alternative answers to be offered - 1 correct
function set(q,num) {

	// random position for current question from the quiz array
	correct=rand(q);

	// random position for the answer of this question within the multiple choices
	correctpos=ran(num);

	// fill in the current question answers array alternative_answers
	for(i = 0; i < num; i++) {
		if(i == correctpos)
			alternative_answers[i] = a[correct];
        // else- if the position is not 
 	    // the chosen position for correct - 
        // and the answer randomly found is the true - 
        // insert the one after the true answer at it
	     else	
	       if((x=rand(q)) == correct)
	       		alternative_answers[i]=a[x-1];
	       // else- if the position is not 
		   // the chosen position for correct - 
           // and the answer randomly found is not the true - 
		   // insert it at the position 
		   else
				alternative_answers[i] = a[x];
	}	
}

///////////////////////////////////////////////////////////////////////////
// ASK THE NEXT QUESTION
function ask() {

	// fills the temp array for the current question and answer with all alternative_answers 
	// number of possible answers is num
	set(q,num);
	f.a0.value = alternative_answers[0];
	f.a1.value = alternative_answers[1];
	f.a2.value = alternative_answers[2];
	f.a3.value = alternative_answers[3];
	f.quest.value = q[correct];
}


///////////////////////////////////////////////////////////////////////////
// OUTPUT all questions and answers as a table
function cout(q,a) {
		w = window.open("","answers","toolbar=0,menubar=0,status=0,location=0,directories=0,copyhistory=0,resizable=1,scrollbars=1");
	w.document.write("<center><table border=5>");
	for(i=0; i<q.length; i++) {
		w.document.write("<tr><td width=200 align=right>");
		w.document.write(a[i]+'</td><td width=200 align=right>'+q[i]+'</td></tr>');
	}
	w.document.write("</table></center>");
}