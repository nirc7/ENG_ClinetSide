//////////////////////////////////////////////////////////
// DATA for quiz
// questions in the q array
// answers in the a array


q=new Array()	// array of questions
a=new Array()	// array of answers - for the questiom with same i

q[0]="���� ������ ����� ������-�����"
a[0]="���� ������ ������ - ������ �����"
q[1]="������ ��"
a[1]="�� �������"
q[2]="���� ������ �� ���"
a[2]="���� ������� ���"
q[3]="��� ����� �� ���"
a[3]="������ ������ ��� ����"
q[4]="��� ������� ����"
a[4]="����"
q[5]="����� ���� ���"
a[5]="����� ��� ���� ������ ������ ���������� ��� ����� �� �������"
q[6]="�� ���� ���� ������ ���� �"
a[6]="����� ������� ������ ������ ����"
q[7]="����� ���� �� �� ������ ������� ����� ����� �����"
a[7]="����� ���"
q[8]="�� ���� �����"
a[8]="��� ������"
q[9]="�� ����� �����"
a[9]="����� ������"
q[10]="��������� ������-�����-���� ����"
a[10]="����� ������"
q[11]="����� ������"
a[11]="���� �� ������ ����� ���"
q[12]="����� �� ���� �� ���"
a[12]="���� ����� ���� ����� �� ���� �� ���"
q[13]="��������� ������-�����-������ �����"
a[13]="������ �� ��������"
q[14]="��������� ������-�����-������ ����"
a[14]="������ �����"
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