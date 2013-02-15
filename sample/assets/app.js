
//////////// Setup

//Get the <div id="vix"> element and append an
//svg element to it that we can draw into
var svg = d3.select('#viz').append('svg')

//Set the width/height of the svg element
svg.attr({width: 700, height: 400})


//////////// App code

// Just to show you that we've loaded the data already
// from data/people.js into window.data
var people = window.data;

// data is a list of people that look like:
// {
//   "name": "Leonor Laidlaw",
//   "age": 54,
//   "awesomeness": 1.72,
//   "wisdom": 53.58
// },

var circles = svg.selectAll('circles')
                .data(people, function(p) { return p.name }) //key on their name

var xDomain = d3.extent( people.map(function(p) { return p.age }) )
var yDomain = d3.extent( people.map(function(p) { return p.awesomeness }) )

var xScale = d3.scale.linear()
                  .domain(xDomain)
                  .range([50, 650])

var yScale = d3.scale.linear()
                  .domain(yDomain)
                  .range([50, 350])

circles.enter().append('circle')
                  .attr({cx: 0, cy: 400, r: 0})
                .transition().duration(1000)
                  .attr('cx', function(p) { return xScale(p.age) })
                  .attr('cy', function(p) { return 400 - yScale(p.awesomeness) })
                  .attr('r', 10)


function showAwesomeness() {
  var newYDomain = d3.extent( people.map(function(p) { return p.awesomeness }) )
  yScale.domain(newYDomain);

  var circles = svg.selectAll('circle')

  circles.transition().duration(1000)
          .attr('cy', function(p) { return 400 - yScale(p.awesomeness) })
}

function showWisdom() {
  var newYDomain = d3.extent( people.map(function(p) { return p.wisdom }) )
  yScale.domain(newYDomain);

  var circles = svg.selectAll('circle')

  circles.transition().duration(1000)
          .attr('cy', function(p) { return 400 - yScale(p.wisdom) })
}


d3.select('.show-wisdom').on('click', showWisdom);
d3.select('.show-awesomeness').on('click', showAwesomeness);
