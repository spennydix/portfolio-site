$(function(drawCanvas){



var canvas = document.getElementById("technicalAbility");

var gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientBlue.addColorStop(0, 'rgba(85, 85, 255, 0.9)');
gradientBlue.addColorStop(1, 'rgba(151, 135, 255, 0.8)');

var gradientRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientRed.addColorStop(0, 'rgba(255, 85, 184, 0.9)');
gradientRed.addColorStop(1, 'rgba(255, 135, 135, 0.8)');

var gradientGreen = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
gradientGreen.addColorStop(0, 'rgba(212, 252, 121, 0.8)');
gradientGreen.addColorStop(1, 'rgba(150, 230, 161,0.9)');


var redArea = null;
var blueArea = null;

var shadowed = {
	beforeDatasetsDraw: function(chart, options) {
    chart.ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    chart.ctx.shadowBlur = 40;
  },
  afterDatasetsDraw: function(chart, options) {
  	chart.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    chart.ctx.shadowBlur = 0;
  }
};

Chart.plugins.register({
  afterEvent: function(chart, e) {
 		// Hardcoded hover areas
  /*
    // Red chart
    chart.ctx.beginPath();
    chart.ctx.moveTo(91, 69);
    chart.ctx.lineTo(152, 80);
    chart.ctx.lineTo(192, 75);
    chart.ctx.lineTo(213, 138);
    chart.ctx.lineTo(148, 168);
    chart.ctx.lineTo(105, 126);
    chart.ctx.fill();
    chart.ctx.closePath();

    if (chart.ctx.isPointInPath(e.x, e.y)) {
    	var dataset = window.chart.data.datasets[0];
      dataset.backgroundColor = gradientHoverRed;
      window.chart.update();
      canvas.style.cursor = 'pointer';
    } else {
    	var dataset = window.chart.data.datasets[0];
      dataset.backgroundColor = gradientRed;
      window.chart.update();
      canvas.style.cursor = 'default';
    }

    // Blue chart
    chart.ctx.beginPath();
    chart.ctx.moveTo(85, 61);
    chart.ctx.lineTo(149, 66);
    chart.ctx.lineTo(224, 63);
    chart.ctx.lineTo(179, 112);
    chart.ctx.lineTo(152, 177);
    chart.ctx.lineTo(121, 117);
    chart.ctx.fill();
    chart.ctx.closePath();

    if (chart.ctx.isPointInPath(e.x, e.y)) {
    	var dataset = window.chart.data.datasets[1];
      dataset.backgroundColor = gradientHoverBlue;
      window.chart.update();
      canvas.style.cursor = 'pointer';
    } else {
    	var dataset = window.chart.data.datasets[1];
      dataset.backgroundColor = gradientBlue;
      window.chart.update();
      canvas.style.cursor = 'default';
    } */
  }
});

window.chart = new Chart(document.getElementById("technicalAbility"), {
    type: "radar",
    data: {
        labels: ["JS", "HTML/CSS", "Sketch", "Adobe CC", "CMS", "PHP"],
        datasets: [{
            label: "Technical Ability",
            data: [65, 90, 70, 85, 75, 20],
            fill: true,
            backgroundColor: gradientRed,
            borderColor: 'transparent',
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            pointHoverBackgroundColor: "transparent",
            pointHoverBorderColor: "transparent",
            pointHitRadius: 50,
        }]
    },
    options: {
    	legend: {display: false},
      tooltips: {enabled: false},
      gridLines: {display: false},
      scale: {
         ticks: {
         		maxTicksLimit: 1,
            display: false,
         }
      }
    },
    plugins: [shadowed]
});


window.chart = new Chart(document.getElementById("interpersonalSkills"), {
    type: "radar",
    data: {
        labels: ["Communication", "Self Confidence", "Teamwork", "Problem Solving", "Public Speaking", "Leadership"],
        datasets: [{
            label: "Interpersonal Skills",
            data: [90, 77, 80, 95, 70, 90],
            fill: true,
            backgroundColor: gradientBlue,
            borderColor: 'transparent',
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            pointHoverBackgroundColor: "transparent",
            pointHoverBorderColor: "transparent",
            pointHitRadius: 50,
        }]
    },
    options: {
    	legend: {display: false},
      tooltips: {enabled: false},
      gridLines: {display: false},
      scale: {
         ticks: {
         		maxTicksLimit: 1,
            display: false,
         }
      }
    },
    plugins: [shadowed]
});

window.chart = new Chart(document.getElementById("physicalProwess"), {
    type: "radar",
    data: {
        labels: ["Height", "Weight", "Ping Pong", "Joint Strength", "Soccer", "Sleep Debt"],
        datasets: [{
            label: "Physical Prowess",
            data: [70, 65, 90, 40, 75, 82],
            fill: true,
            backgroundColor: gradientGreen,
            borderColor: 'transparent',
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            pointHoverBackgroundColor: "transparent",
            pointHoverBorderColor: "transparent",
            pointHitRadius: 50,
        }]
    },
    options: {
    	legend: {display: false},
      tooltips: {enabled: false},
      gridLines: {display: false},
      scale: {
         ticks: {
         		maxTicksLimit: 1,
            display: false,
         }
      }
    },
    plugins: [shadowed]
});

});



window.chart = new Chart(document.getElementById("engagementData"), {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [
				{
					label: "2018",
					data: [10,8,6,5,12,8,16,17,6,7,6,10],
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
				}
			]
		},
		plugins: [shadowed]
});

var cards = $(".randomize");
for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.eq(target).before(cards.eq(target2));
}
