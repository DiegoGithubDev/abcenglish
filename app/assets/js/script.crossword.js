// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		var set={
			itemTextSize:1.2,
			borderColor:'#BBDBB2',
			idContainer:'puzzle-wrapper',
			inactiveCellBackgroundColor:'#6FC060',
			activeCellBackgroundColor:'#BFDDB7',
			cellIndexColor:'#000',
			titleColor:'#AC5C90',
			solvedTextColor:'#6FC060',
			itemTextColor:'#009BB2',
			itemTextIndexColor:'#AC5C94',
			indexsPadding:'200,9',
		}
		var puzzleData = [
		{
			clue: "Month 12",
			answer: "december",
			position: 0,
			orientation: "down",
			startx: 6,
			starty: 1
		},
		{
			clue: "Month 01",
			answer: "january",
			position: 1,
			orientation: "down",
			startx: 10,
			starty: 1
		},
		{
			clue: "Month 11",
			answer: "november",
			position: 2,
			orientation: "down",
			startx: 1,
			starty: 3
		},
		{
			clue: "Month 08",
			answer: "august",
			position: 3,
			orientation: "down",
			startx: 4,
			starty: 6
		},
		{
			clue: "Month 05",
			answer: "may",
			position: 4,
			orientation: "down",	
			startx: 8,
			starty: 6
		},
		{
			clue: "Month 04",
			answer: "april",
			position: 5,
			orientation: "down",
			startx: 12,
			starty: 8
		},
		{
			clue: "Month 02",
			answer: "february",
			position: 6,
			orientation: "across",
			startx: 5,
			starty: 2
		},
		{
			clue: "Month 10",
			answer: "october",
			position: 7,
			orientation: "across",
			startx: 1,
			starty: 4
		},
		{
			clue: "Month 07",
			answer: "july",
			position: 8,
			orientation: "across",
			startx: 9,
			starty: 4
		},
		{
			clue: "Month 03",
			answer: "march",
			position: 9,
			orientation: "across",
			startx: 8,
			starty: 6
		},
		{
			clue: "Month 06",
			answer: "june",
			position: 10,
			orientation: "across",
			startx: 3,
			starty: 7
		},
		{
			clue: "Month 09",
			answer: "september",
			position: 11,
			orientation: "across",
			startx: 4,
			starty: 10
		}

		] 
		$('#'+set.idContainer).crossword(set,puzzleData);
		
	})
	
})(jQuery)
