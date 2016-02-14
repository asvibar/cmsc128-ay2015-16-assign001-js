/*
	Author: Aron John S.Vibar
	S.no: 2013-03369
	CMSC 128-AB-1L
*/

/*
	This funtion converts numbers in alphabet form to numerical form
*/
function numToWords(test){
	var test2 = test.split("");
	var othertest = [];
	var othertest2 = "";
	var semians = "";
	var answers = [];
	var fanswer = "";
	var i;
	
	//groups numbers by 3's			
	for(i=test.length-1;i>=0;i--){
		othertest2 = othertest2 += test2[i];
		if(othertest2.length == 3 || i==0){
			othertest.push(othertest2);
			othertest2 = "";
		}
	}

	for(i=0;i<othertest.length;i++){
		var k = othertest[i].split("");
		k = k.reverse();
		for(var j=0;j<k.length;j++){
			switch(k[j]){
				case "1": if(j==0|| j == 2){
					      	semians = semians += "one";
						  	if(j==0 && k.length ==3){
								semians = semians += " hundred ";
						 	 }
						  }else{
							switch(k[j+1]){
						  		case "1" : semians = semians += "eleven";break;
						  		case "2" : semians = semians += "twelve";break;
						  		case "3" : semians = semians += "thirteen";break;
						  		case "4" : semians = semians += "fourteen";break;
						  		case "5" : semians = semians += "fifteen";break;
						  		case "6" : semians = semians += "sixteen";break;
						  		case "7" : semians = semians += "seventeen";break;
						  		case "8" : semians = semians += "eighteen";break;
						  		case "9" : semians = semians += "nineteen";break;
						  		case "0" : semians = semians += "ten";break;
						  	}
						  	j++;
						  }
						  break;
				case "2":if(j == 2 || j==0){
							semians = semians += "two";
							if(j==0 && k.length == 3){
								semians = semians += " hundred ";
							}
						  }else{
						 	semians = semians += "twenty";
						  }
						  break;
				case "3":if(j==0 || j == 2){
							semians = semians += "three";
							if(j==0 && k.length ==3){
								semians = semians += " hundred ";
							}
						  }else if(k.length == 2 ||k.length == 3){
						  	semians = semians += "thirty";
						  }
						  break;
				case "4":if(j==0 || j == 2){
							semians = semians += "four";
							if(j==0 && k.length ==3){
								semians = semians += " hundred ";
							}
						 }else{
							semians = semians += "forty";
						 }
						 break;
				case "5":if(j==0|| j == 2){
							semians = semians += "five";
							if(j==0 && k.length ==3){
								semians = semians += " hundred ";
						    }
						 }else{
						 	semians = semians += "fifty";
						 }
					     break;
				case "6":if(j==0 || j == 2){
							semians = semians += "six";
						    if(j==0 && k.length ==3){
								semians = semians += " hundred ";
							}
						 }else{
							semians = semians += "sixty";
						 }
						 break;
				case "7":if(j==0|| j == 2){
							semians = semians += "seven";
							if(j==0 && k.length ==3){
								semians = semians += " hundred ";
							}
						 }else{
							semians = semians += "seventy";
						 }
						break;
				case "8":if(j==0|| j == 2){
							semians = semians += "eight";
							if(j==0 && k.length ==3){
							semians = semians += " hundred ";
							}
						}else{
							semians = semians += "eighty";
						}
						break;
				case "9":if(j==0 || j == 2){
							semians = semians += "nine";
							if(j==0 && k.length ==3){
								semians = semians += " hundred ";
							}
						 }else{
							semians = semians += "ninety";
						 }
						 break;
				}
			}
			if(i==1){
				semians = semians+= " thousand "; 
			} else if(i==2){
				semians = semians += " million ";
			}
			answers.push(semians);
			semians = "";
		}
		fanswer = answers.reverse().join("");
		console.log(fanswer);
		return fanswer;
	}

/*
	This function converts english language, spelt numbers to numerical digits.

*/	

function wordsToNum(test){
	var test2 = test.split(" ");
	var num = "";
	var t;
	for(t=0;t<test2.length;t++){
		if(test2[t] === "one"){
			num += "1";
		}else if(test2[t] === "two"){
			num += "2";
		}else if(test2[t] === "three"){
			num += "3";
		}else if(test2[t] === "four"){
			num += "4";
		}else if(test2[t] === "five"){
			num += "5";
		}else if(test2[t] === "six"){
			num += "6";
		}else if(test2[t] === "seven"){
			num += "7";
		}else if(test2[t] === "eight"){
			num += "8";
		}else if(test2[t] === "nine"){
			num += "9";
		}else if(test2[t] === "ten"){
			num += "10";
		}else if(test2[t] === "eleven"){
			num += "11";
		}else if(test2[t] === "twelve"){
			num += "12";
		}else if(test2[t] === "thirteen"){
			num += "13";
		}else if(test2[t] === "fourteen"){
			num += "14";
		}else if(test2[t] === "fifteen"){
			num += "15";
		}else if(test2[t] === "sixteen"){
			num += "16";
		}else if(test2[t] === "seventeen"){
			num += "17";
		}else if(test2[t] === "eighteen"){
			num += "18";
		}else if(test2[t] === "nineteen"){
			num += "19";
		}else if(test2[t] === "twenty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "2"; //case when test2[t+1] has another digit (eg. 21,22,28)
			}else{
				num += "20";
			}	
						
		}else if(test2[t] === "thirty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "3";
			}else{
			num += "30";
			}
		}else if(test2[t] === "forty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "4";
			}else{
				num += "40";
			}
		}else if(test2[t] === "fifty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "5";
			}else{
				num += "50";
			}
		}else if(test2[t] === "sixty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "6";
			}else{
				num += "60";
			}
		}else if(test2[t] === "seventy"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "7";
			}else{
				num += "70";
			}
		}else if(test2[t] === "eighty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "8";
			}else{
				num += "80";
			}
		}else if(test2[t] === "ninety"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "9";
			}else{
				num += "90";
			}
			//zero adding from this point
		}else if(test2[t] === "million" && test2.length > 3){
			if(test2[t+2] === "thousand"){
				if(test2[t+1].match(/(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)/))
				{
					num += "0";
				}else{
					num += "00";
				}
			}else if(test2[t+2]==="hundred"){
				num += "000";
			}else if(test2[t+1].match(/(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)/))
			{
					num += "0000";
			}else if(test[t+1].match(/(one|two|three|four|five|six|seven|eight|nine)/)){
				num += "00000";
			}  	   
		}else if(test2[t]==="million" && test2.length <= 3){
			if(test2.length > 2){
				if(test2[t+1].match(/(one|two|three|four|five|six|seven|eight|nine)/)){
					num += "00000";
				}else{
					num += "0000"
				}
			}else{
				num += "000000";
			}
		}else if(test2[t]==="thousand" && test2.length >= 3){
			if(test2[t+1].match(/(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)/)){
				num += "0";
			}else if(test2[t+1].match(/(one|two|three|four|five|six|seven|eight|nine)/)){
				num += "00";
			}
		}else if(test2[t]==="thousand" && test2.length <3){
				num+="000";
		}else if(test2[t] === "hundred" && test2.length > 2){
				if(test2[t+1].match(/(one|two|three|four|five|six|seven|eight|nine)/)){
					num+="0";
				}
		}else if(test2[t] === "hundred" && test2.length <= 2){
				num += "00";
		}
	}
	console.log(num);
	return num;
}
				
/*
* This function coverts currency in words to currency win digits.
* This is done via loops.
*/

function wordsToCurrency(test){
	var test2 = test.split(" ");
	var num = test2[test2.length-1] += " ";
	var t;
	for(t=0;t<test2.length;t++){
		if(test2[t] === "one"){
			num += "1";
		}else if(test2[t] === "two"){
			num += "2";
		}else if(test2[t] === "three"){
			num += "3";
		}else if(test2[t] === "four"){
			num += "4";
		}else if(test2[t] === "five"){
			num += "5";
		}else if(test2[t] === "six"){
			num += "6";
		}else if(test2[t] === "seven"){
			num += "7";
		}else if(test2[t] === "eight"){
			num += "8";
		}else if(test2[t] === "nine"){
			num += "9";
		}else if(test2[t] === "ten"){
			num += "10";
		}else if(test2[t] === "eleven"){
			num += "11";
		}else if(test2[t] === "twelve"){
			num += "12";
		}else if(test2[t] === "thirteen"){
			num += "13";
		}else if(test2[t] === "fourteen"){
			num += "14";
		}else if(test2[t] === "fifteen"){
			num += "15";
		}else if(test2[t] === "sixteen"){
			num += "16";
		}else if(test2[t] === "seventeen"){
			num += "17";
		}else if(test2[t] === "eighteen"){
			num += "18";
		}else if(test2[t] === "nineteen"){
			num += "19";
		}else if(test2[t] === "twenty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "2"; //only when it has another value after test[t+1].
			}else{
				num += "20";
			}	
						
		}else if(test2[t] === "thirty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "3";
			}else{
				num += "30";
			}
		}else if(test2[t] === "forty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "4";
			}else{
				num += "40";
			}
		}else if(test2[t] === "fifty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "5";
			}else{
				num += "50";
			}
		}else if(test2[t] === "sixty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "6";
			}else{
				num += "60";
			}
		}else if(test2[t] === "seventy"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "7";
			}else{
				num += "70";
			}
		}else if(test2[t] === "eighty"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "8";
			}else{
				num += "80";
			}
		}else if(test2[t] === "ninety"){
			if(test2[t+1]=="one"||test2[t+1]=="two"||test2[t+1]=="three"||test2[t+1]=="four"||test2[t+1]=="five"||test2[t+1]=="six"||test2[t+1]=="seven"||test2[t+1]=="eight"||test2[t+1]=="nine"){
				num += "9";
			}else{
				num += "90";
			}
		/*By this point, the conditional statements involve addition of zeroes*/
		}else if(test2[t] === "million" && test2.length > 3){
			if(test2[t+2] === "thousand"){
				if(test2[t+1].match(/(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)/))
				{
					num += "0"; //case for ten thousands digits
				}else{
					num += "00"; //case for thousands digits
				}
			}else if(test2[t+2]==="hundred"){
				num += "000";
			}else if(test2[t+1].match(/(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)/))
			{
				num += "0000"; //case for tens digits
			}else if(test[t+1].match(/(one|two|three|four|five|six|seven|eight|nine)/)){
				num += "00000"; //case for ones digits
			}  	   
		}else if(test2[t]==="million" && test2.length <= 3){
			if(test2.length > 2){
				if(test2[t+1].match(/(one|two|three|four|five|six|seven|eight|nine)/)){
					num += "00000";
				}else{
					num += "0000"
				}
			}else{
				num += "000000";
			}
		}else if(test2[t]==="thousand" && test2.length >= 3){
			if(test2[t+1].match(/(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)/)){
				num += "0";
			}else if(test2[t+1].match(/(one|two|three|four|five|six|seven|eight|nine)/)){
				num += "00";
			}
		}else if(test2[t]==="thousand" && test2.length <3){
			num+="000";
		}else if(test2[t] === "hundred" && test2.length > 2){
			if(test2[t+1].match(/(one|two|three|four|five|six|seven|eight|nine)/)){
				num+="0";
			}
			}else if(test2[t] === "hundred" && test2.length <= 2){
				num += "00";
			}
		}
		console.log(num);
		return num;	
	}


/*The input number is delimited by commas for every three numbers.
* It is done by separating/grouping the numbers by 3, reversing th
* -en adding commas and reversing again.*/
function numberDelimited(test){
	var test2 = test.split("");
	var othertest =[];
	var othertest2 = "";
	var answer = "";
	var i;
	for(i=test.length-1;i>=0;i--){
		othertest2 = othertest2 += test2[i];
			if(othertest2.length == 3 || i==0){
				othertest2 += ",";
				othertest.push(othertest2);
				othertest2 = "";
			}
	}
		if(othertest.length == 3){
			answer = othertest[2] += othertest[1].split("").reverse().join("").substr(1);
			answer = answer += othertest[0].split("").reverse().join("");
		}else if(othertest.length == 2){
			answer = othertest[1] += othertest[0].split("").reverse().join("").substr(1);
		}else{
			answer = test;
		}
		console.log(answer);
		return answer;
	}	