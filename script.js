console.log("Hello World!");

function fourthCategory() {
	document.getElementById("fourth").style.backgroundImage = "url('images/20211013_145114.jpg')";
}	
fourthCategory()

//FOR Web Dev Chart

var xValues = [85, 65, 53, 5, 40];
var yValues = ['HTML', 'CSS', 'JavaScript', 'React', 'Python'];
var barColors = ['red', 'blue', 'yellow', 'green', 'brown'];

new Chart('webChart', {
	type: "bar",
	data: {
		labels: yValues, 
		datasets: [{
			backgroundColor: barColors,
			data: xValues
		}]
	},
	options: {
		legend: {display: false},
		title: {
			display: true,
			text: 'Web Development'
		}
	}
});

// FOR CAD CHART

var xValues = [95, 93, 95, 55, 50, 0];
var yValues = ['CorelDraw', 'AutoCAD', 'SketchUp', 'Revit', 'TwinMotion', '.'];
var barColors = ['red', 'blue', 'yellow', 'green', 'brown', 'purple'];

new Chart('designChart', {
	type: "bar",
	data: {
		labels: yValues, 
		datasets: [{
			backgroundColor: barColors,
			data: xValues
		}]
	},
	options: {
		legend: {display: false},
		title: {
			display: true,
			text: 'Computer-Aided Design'
		}
	}
});

// FOR MISC. CHART

var xValues = [90, 80, 50, 40, 0];
var yValues = ['Sketching', 'Painting', 'Illustration', 'Research', '.'];
var barColors = ['red', 'blue', 'yellow', 'green'];

new Chart('miscChart', {
	type: "bar",
	data: {
		labels: yValues, 
		datasets: [{
			backgroundColor: barColors,
			data: xValues
		}]
	},
	options: {
		legend: {display: false},
		title: {
			display: true,
			text: 'Miscellaneous'
		}
	}
});