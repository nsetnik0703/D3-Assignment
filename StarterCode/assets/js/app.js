d3.csv('assets/data/data.csv').then( function( data) {

    var healthcare = []
    var poverty = []

    data.map(d => {
        d.id = +d.id;
        d.poverty = +d.poverty;
        d.povertyMoe = +d.povertyMoe;
        d.age = +d.age;
        d.income = +d.income;
        d.healthcare = +d.healthcare;
        d.healthcareLow = +d.healthcareLow;
        d.healthcareHigh = +d.healthcareHigh;
        d.obesity = +d.obesity;
        d.obesityLow = +d.obesityLow;
        d.obesityHigh = +d.obesityHigh;
        d.smokes = +d.smokes;
        d.smokesHigh = +d.smokesHigh;
        
        healthcare.push(d.healthcare)
        poverty.push(d.poverty)
        })

    var svgHeight = 960
    var svgWidth = 500

    var margin = {
        top: 60,
        right: 60,
        bottom: 60,
        left: 60
    };
    
 
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(healthcare)])
        .range([0, svgHeight]);
 
    var xScale = d3.scaleBand()
        .domain([0, d3.max(poverty)])
        .range([0, svgWidth]);
    
   var svg = d3.select("#scatter")
                .append("svg")
                .attr("width", svgWidth)
                .attr("height" , svgHeight);
    
    var bottomAxis = d3.axisBottom(yScale);
    var leftAxis = d3.axisLeft(xScale);

    svg.append("g")
        .call(bottomAxis)
        .attr("class" , "xAxis");
    
    svg.append("g")
        .call(leftAxis)
        .attr("class" , "yAxis");



    }); 

    var drawcircle = d3.circle()
        .x(data => poverty)
        .y(data => healthcare)

    // abbr , x = poverty , y = healthcare

   


