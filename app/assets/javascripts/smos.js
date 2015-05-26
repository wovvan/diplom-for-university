// Get context with jQuery - using jQuery's .get() method.
$(document).ready(function(){ calculate();});
function calculate(){
  var myLineChart;
  var ctx = document.getElementById("myChart").getContext("2d");
  var options = {

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve : true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};
  var l = $("#chart-request").val();
  var m = $("#chart-response").val();
  var n = $("#chart-count-servers").val();
  l *= 1;
  n *= 1;
  m *= 1;
  var s = "";
  var p0 = 1;
  var r = l/m;
  var masLegend = [];
  var masValue = [];
  $(".my-tr").remove();
  p0 += Math.pow(r, n+1)/(((Math.pow(n, n) * Math.exp(-n)) * Math.pow(2 * Math.PI * n, 0.5))* (n - r));
  for(var i = 1; i <= 10; i++){
    r = l / m;
    var l0 = Math.pow(r, n+1)/(((Math.pow(n, n) * Math.exp(-n)) * Math.pow(2 * Math.PI * n, 0.5))* (n - r)* (n - r)*p0);
    var s = s + "<tr class='my-tr'><td>"+i+"</td><td>"+l0.toFixed(5)+"</td><td>"+l.toFixed(2)+"</td></tr>";
    masLegend.push(l.toFixed(2));
    masValue.push(l0);
    l += 0.1;
  }
  $(".tr-header").after(s);
  var data = {
    labels: masLegend,
    datasets: [
        {
            label: "My first dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: masValue
        }
    ]
};

myLineChart = new Chart(ctx).Line(data, options);
}