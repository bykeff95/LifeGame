function evaluateFirstsInRows(i) {
	elemEnvironment=[-100,-99,1,100,101];
	counter=0;
	if (squares[i].className=='square living') {
		for (var j = 0; j < elemEnvironment.length; j++) {
			if (0<=i+elemEnvironment[j] && i+elemEnvironment[j]<10000) {
				if(squares[i+elemEnvironment[j]].className=='square living'){
					counter++;
				}
			}
		}
		if (counter==2 || counter==3) {
			return 'l'
		} else{
			return 'd'
		}
	}else{
		for (var j = 0; j < elemEnvironment.length; j++) {
			if (0<=i+elemEnvironment[j] && i+elemEnvironment[j]<10000) {
				if(squares[i+elemEnvironment[j]]=='square living'){
					counter++;
				}
			}
		}
		if (counter==3) {
			return 'l'
		} else{
			return 'd'
		}
	}
}