function generateBoard() {
	for (var i = 0; i < 100; i++) {
		row=document.createElement('div');
		row.className='row';
		container.append(row);
		currentRow=document.getElementsByClassName('row')[i];
		for (var j = 0; j < 100; j++) {
			square=document.createElement('div');
			square.className='square dead';
			currentRow.append(square)
		}
	}
}