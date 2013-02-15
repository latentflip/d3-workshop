
//////////// Setup

//Get the <div id="vix"> element and append an
//svg element to it that we can draw into
var svg = d3.select('#viz').append('svg')

//Set the width/height of the svg element
svg.attr({width: 700, height: 400})


group = svg.append('svg:g')
              .attr({x: 0, y: 0})

group.append('circle')
        .attr({cx: 115, cy: 50, r: 10, fill: 'green'})

group.append('text')
        .text("This is my dot")
        .attr({x: 100, y: 55})
        .attr({'text-anchor': 'end'})

group.transition().duration(500)
        .attr('transform', "translate(300,200)rotate(180)")
      .transition().duration(500).delay(500)
        .attr('transform', "translate(300,200)rotate(360)")

