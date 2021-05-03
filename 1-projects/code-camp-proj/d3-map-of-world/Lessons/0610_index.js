// topoJSON data to draw country outlines
// Source: Natural Earth 1:50m Cultural Vectors, Admin 0 - Countries
const mapPath = "./naturalEarth50TopoJSON.json";

// 2017 world population data. Source: https://databank.worldbank.org
const popPath = "./worldPopulation.csv";

// Setup
const svgWidth = 1000;
const svgHeight = 700;
const scale = svgWidth / (2 * Math.PI);

// ISO 3166-1 Alpha 3 country code identifier
const idCode = "ADM0_A3";

const svg = d3.select("#map")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const projection = d3.geoMercator()
    .scale(scale)
    .translate([svgWidth / 2, svgHeight / 2])
    .center([0, 20]);

const path = d3.geoPath()
    .projection(projection);

// Create a group to hold the countries
const g = svg.append("g");

// Create requests to retrieve JSON topography data and CSV population data
const getJSONData = d3.json(mapPath);
const getCSVData = d3.csv(popPath);

Promise.all([getJSONData, getCSVData]).then(function(values) {
  const json = values[0];
  const population = values[1];

  // Find the max and min population values in the data to better understand it
  const popArray = population.map(d => +d.Population);
  const extent = d3.extent(popArray);  // [12876, 1386395000]
  console.log("Min population is: " + extent[0]);  // 12,876 -> Nauru
  console.log("Max population is: " + extent[1]);  // 1,386,395,000 -> China

  // Create a scale to map population value to a color
  const color = d3.scaleThreshold()
      .domain([
          500000,
          5000000,
          10000000,
          25000000,
          50000000,
          100000000,
          1000000000])
      .range(d3.schemeYlOrRd[8]);

  // Create an object that maps country ID to population
  let popMap = {};
  population.forEach(d => {
    popMap[d.ID] = +d.Population
  });

  const countries = topojson.feature(json, json.objects.countries).features;

  // Draw the map and add tooltip functionality
  g.selectAll(".countries")
    .data(countries)
    .enter().append("path")
      .attr("class", "countries")
      .attr("d", path)
      .style("stroke-width", 0.5)
      .style("opacity", 0.75)
      .style("fill", d => {
        const pop = popMap[d.properties[idCode]];



      })

});

/*
The next step in the callback function is to return the `color` scale value for
the population number: `color(pop)`. Your threshold scale maps a population value
(depending on what threshold bucket it falls into) to one of 8 colors along the
D3 yellow-orange-red color scheme.

Unfortunately, there are only population numbers for 216 of the 241 countries,
so you need to handle the case where `pop` is `undefined`.

Write an if/else statement so `if (pop)` exists, the function returns the scale
value for that population, `else` it returns `"gray"`.
*/
