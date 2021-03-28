d3.csv("/data/worldcup.csv", data => createViz(data))

function createViz(data){
    console.log(data)

    visualizationG = d3.select("#viz")
        .select("svg")
        .append("g")
        .attr("id", "teamsG")
        .attr("transform", "translate(" + 75 + ", " + 240 + ")")

    visualizationG
        .selectAll("g")
        .data(data, d=>d.team)
        .enter()
        .append('g')
        .attr("class", "overallG")
        .attr('transform', (d,i) => "translate(" + i * 50 + ", " + 0 + ")")

    initializeCircles(data, "win")

    buttonsG = d3.select("#controls")
        .selectAll("button")
        .data(Object.keys(data[0]).filter(d => !["team", "region"].includes(d)))
        .enter()
        .append("button")
        .text(d => d)
        .on("click", d => populateCircles(data, d))

    function populateCircles(data, attribute){
        radiusScale = 
            d3.scaleLinear()
            .domain([0, d3.max(data.map(d=>parseInt(d[attribute])))])
            .range([0, 30])

        d3.selectAll("g.overallG")
            .select('circle')
            .transition()
            .delay((d,i) => i * 100)
            .duration(1000)
            .attr('r', d => radiusScale(parseInt(d[attribute])))
        }

    function initializeCircles(data, attribute){
        radiusScale = 
            d3.scaleLinear()
            .domain([0, d3.max(data.map(d=>parseInt(d[attribute])))])
            .range([0, 30])

        visualizationG
            .selectAll("g")
            .append('circle')
            .attr("class", "inactive")
            .attr("r", 0)
            .transition()
            .delay((d,i) => i * 50)
            .attr('r', 50)
            .transition()
            .delay((d,i) => i * 10)
            .attr('r', d => radiusScale(parseInt(d[attribute])))
        
        visualizationG
            .selectAll("g")
            .selectAll('circle')
            .on("mouseover", function(d,i){
                region = d.region
                d3.selectAll("g.overallG")
                    .select('circle')
                    .classed("active", d=>d.region == region)
                    .classed("inactive", d=>d.region != region)
                })
            .on("mouseout", function(d){
                d3.selectAll("g.overallG")
                    .select('circle')
                    .classed("active", false)
                    .classed("inactive", true)
            })
        
        d3.selectAll("g.overallG")
            .append("text")
            .text(d => d.team)
            .attr('transform', (d,i) => "translate(" + 0 +", " + 70 + ")")
    }
}