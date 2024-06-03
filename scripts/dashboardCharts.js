//1. Proportion of Channels/Category - Pie Chart-Cedrick
{
  // Set up the SVG container
  const width = 400; 
  const height = 400; 
  
  const svg = d3.select('#svg-1')
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`);
  
  //Data
  let data = [
    {Category: 'Gaming & Apps', NumChannels: 39},
    {Category: 'Music', NumChannels: 25},
    {Category: 'None', NumChannels: 6},
    {Category: 'Beauty & Fashion', NumChannels: 4},
    {Category: 'Entertainment', NumChannels: 4},
    {Category: 'People & Blogs', NumChannels: 3},
    {Category: 'Sports', NumChannels: 2},
    {Category: 'Fashion', NumChannels: 1},
    {Category: 'Science & Tech', NumChannels: 1},
  ];
  
  //Get Sum
  let sum = 0;
  data.forEach(val => sum += val.NumChannels);
  
  //Scales
  let percentages = d3.scaleOrdinal(data.map(val => 100*(val.NumChannels/sum).toFixed(2)));
  const colorScale = d3.scaleOrdinal()
    .domain(data.map(d => d.Category))
    .range(['#ff1c1c', '#730303', '#CCCCCC', '#666666', '#333333', '#999999', '#8c5050', '#FF9999', '#f7f7f7']);
  
  
  //pie
  let pie = d3.pie()
    .value(d => (d.NumChannels));
  let radius = Math.min(width, height) / 2.5;
  let arc = d3.arc().innerRadius(0).outerRadius(radius);
  let labelArc = d3.arc().innerRadius(radius).outerRadius(1.3 * radius);
  
  
  let arcs = svg
    .selectAll('g')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')
    .attr('transform', `translate(${width / 4}, ${height / 2})`);
  
  arcs.append('path')
    .attr('fill', (d, i) => colorScale(d.data.Category))
    .attr('d', arc);
  
  
    // Create legends
    const legend = svg.selectAll(".legend")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("transform", (d, i) => `translate(${width * 0.8}, ${(i * 20) + height / 4})`);
  
  legend.append("rect")
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", (d, i) => colorScale(d.Category));
  
    legend.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text(d => {
          console.log(sum);
          return (`${d.Category} - ${((d.NumChannels/sum)*100).toFixed(1)}%`)
          });
  
    // legend label
    svg.append("text")
        .attr("x", width)
        .attr("y", height/4 - 15)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "20px")
        .text("LEGEND");
  
    // title for the pie chart
    svg.append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", 20)
    .style("font-weight", "bold")
    .style("font-size", "22px")
    .text("Proportion of Top 100 YouTube Channels By Category");
  };
  

//2. Relationship between Likes and Subs - Scatter
{
  const width = 500;
  const height = 325;
  const margin = 50;

  const svg = d3.select('#svg-2')
    .append('svg')
    .attr('viewBox', '0 0 ' + width + ' ' + height );
  
  //Title
  svg.append('text')
  .attr('text-anchor', 'middle')
  .attr('x', width/2)
  .attr('y', margin/2)
  .text('Relationship Between Number of Likes and Subscribers')
  .style('font-weight', 'bold')
  .style('font-size', 16);

  //Likes Axis (X)
  const x = d3.scaleLinear()
    .domain([0, 2200000000/10000]) //x 10^5
    .range([margin*1.5, width - margin]);

  svg.append('g')
    .attr('transform', 'translate(0,' + (height - 1.2*margin) + ')')
    .call(d3.axisBottom(x))
    .selectAll('text')
      .attr('text-anchor', 'end')
      .attr('x', -5)
      .attr('transform', `rotate(-20)`);
  
  svg.append("text")
    .attr('text-anchor', 'middle')
    .attr('x', width/2)
    .attr("y", height - margin/4)
    .text("Number of Likes (x 10^5)");

  //Subscribers Axis (Y)
  const y = d3.scaleLinear()
    .domain([3000, 230000000/10000]) //x 10^5
    .range([height - 1.2*margin, margin]);

  svg.append('g')
    .attr('transform', 'translate(' + margin*1.5 + ', 0)')
    .call(d3.axisLeft(y));
  
  svg.append("text")
    .attr('text-anchor', 'end')
    .attr("x", -margin)
    .attr("y", -margin + 70)
    .attr('transform', 'rotate(-90)')
    .text("Number of Subscribers (x 10^5)");

  //Data
  let data = [
    {followers: '220000000', Likes: '1602680172'},
    {followers: '138000000', Likes: '220990134.6'},
    {followers: '137000000', Likes: '174875242.6'},
    {followers: '111000000', Likes: '2191405542'},
    {followers: '98100000', Likes: '1731833461'},
    {followers: '97300000', Likes: '280877652.4'},
    {followers: '97200000', Likes: '235190437.5'},
    {followers: '89400000', Likes: '543800874.3'},
    {followers: '85500000', Likes: '210395355.3'},
    {followers: '83500000', Likes: '146245435.4'},
    {followers: '77000000', Likes: '158230212.5'},
    {followers: '75100000', Likes: '617573972'},
    {followers: '72000000', Likes: '63642295.56'},
    {followers: '69400000', Likes: '39350061.94'},
    {followers: '69300000', Likes: '109283010.7'},
    {followers: '69100000', Likes: '1640737553'},
    {followers: '67300000', Likes: '636497162.1'},
    {followers: '65800000', Likes: '116511691.1'},
    {followers: '62100000', Likes: '37475050.79'} ,
    {followers: '60700000', Likes: '12480195.26'},
    {followers: '58700000', Likes: '17219955'},
    {followers: '57800000', Likes: '244293352.9'},
    {followers: '57300000', Likes: '39953044.15'},
    {followers: '57100000', Likes: '31942735'},
    {followers: '55500000', Likes: '51156331.51'},
    {followers: '53400000', Likes: '182929448'},
    {followers: '52800000', Likes: '135816576.6'},
    {followers: '52600000', Likes: '45500762.85'},
    {followers: '52300000', Likes: '204913414.4'},
    {followers: '52100000', Likes: '97976609.8'},
    {followers: '52000000', Likes: '35849829.85'},
    {followers: '51600000', Likes: '406235612.4'},
    {followers: '51500000', Likes: '44484407.8'},
    {followers: '51300000', Likes: '27470145.64'},
    {followers: '50900000', Likes: '11453139.1'},
    {followers: '49400000', Likes: '25323367.15'},
    {followers: '46900000', Likes: '230841570.4'},
    {followers: '46800000', Likes: '22039543.26'},
    {followers: '45900000', Likes: '641782272.8'},
    {followers: '45900000', Likes: '37371320.82'},
    {followers: '45600000', Likes: '288740569.4'},
    {followers: '45100000', Likes: '937427149.9'},
    {followers: '44700000', Likes: '24257065.2'},
    {followers: '44200000', Likes: '763318297'},
    {followers: '43800000', Likes: '196137065.7'},
    {followers: '43700000', Likes: '36932146.78'},
    {followers: '43300000', Likes: '222616795.2'},
    {followers: '43100000', Likes: '449621753.4'},
    {followers: '43000000', Likes: '5322828.259'},
    {followers: '42300000', Likes: '117320899.9'},
    {followers: '42000000', Likes: '55641776.54'},
    {followers: '41600000', Likes: '138038669.5'},
    {followers: '41300000', Likes: '39269151.6'},
    {followers: '40600000', Likes: '766852538'},
    {followers: '40500000', Likes: '16319224.4'},
    {followers: '40500000', Likes: '155670991.2'},
    {followers: '40400000', Likes: '814895443'},
    {followers: '39800000', Likes: '240442177.4'},
    {followers: '39400000', Likes: '1205009.12'},
    {followers: '39200000', Likes: '5749294.194'},
    {followers: '39000000', Likes: '247337977.2'},
    {followers: '38300000', Likes: '23751378.74'},
    {followers: '38300000', Likes: '167231088.8'},
    {followers: '38200000', Likes: '19334895.6'},
    {followers: '38100000', Likes: '46360335.99'},
    {followers: '37500000', Likes: '156622828.8'},
    {followers: '37500000', Likes: '245579644.7'},
    {followers: '37400000', Likes: '33550305.4'},
    {followers: '37400000', Likes: '18094604'},
    {followers: '37200000', Likes: '18852717'},
    {followers: '36900000', Likes: '240742149.4'},
    {followers: '36800000', Likes: '80346776.67'},
    {followers: '36700000', Likes: '16923109.41'},
    {followers: '36600000', Likes: '188506752.5'},
    {followers: '36300000', Likes: '50988592.12'},
    {followers: '89400000', Likes: '543800874.3'},
    {followers: '85500000', Likes: '210395355.3'},
    {followers: '83500000', Likes: '146245435.4'},
    {followers: '77000000', Likes: '158230212.5'},
    {followers: '75100000', Likes: '617573972'},
    {followers: '72000000', Likes: '63642295.56'},
    {followers: '69400000', Likes: '39350061.94'},
    {followers: '69300000', Likes: '109283010.7'},
    {followers: '69100000', Likes: '1640737553'},
    {followers: '67300000', Likes: '636497162.1'}
  ];

  //Dots
  const group = svg.append('g')
    .selectAll('g')
    .data(data)
    .enter()
    .append('circle')
      .attr('cx', function(d) {return x(d.Likes/10000) + 1;})
      .attr('cy', function(d) {return y(d.followers/10000);})
      .attr('r', 2)
      .style('fill', 'var(--lw-red-dark)');

};

//3. Each Country's Number of Youtubers in Top 100 - Bubble Geographic Chart
{
  const svg = d3.select('#svg-3')
    .append('svg')
    .attr('viewBox', '0 0 100 100')
    .attr('preserveAspectRatio', 'xMinYMin meet');

  var dataGeo = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-50, -15]
        },
        "properties": {
          "Country": "Brazil",
          "NumberOfYoutubers": 5,
          "homecontinent": "South America"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [28, 55]
        },
        "properties": {
          "Country": "Belarus",
          "NumberOfYoutubers": 1,
          "homecontinent": "Europe"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-100, 55]
        },
        "properties": {
          "Country": "Canada",
          "NumberOfYoutubers": 2,
          "homecontinent": "North America"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-70, -25]
        },
        "properties": {
          "Country": "Chile",
          "NumberOfYoutubers": 1,
          "homecontinent": "South America"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [78.772256550596914, 18.33830602947543]
        },
        "properties": {
          "Country": "India",
          "NumberOfYoutubers": 23,
          "homecontinent": "Asia"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [128, 36.96717856455682]
        },
        "properties": {
          "Country": "South Korea",
          "NumberOfYoutubers": 4,
          "homecontinent": "Asia"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-100.189750144179136, 20.79623553104803]
        },
        "properties": {
          "Country": "Mexico",
          "NumberOfYoutubers": 2,
          "homecontinent": "North America"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [8, 61]
        },
        "properties": {
          "Country": "Norway",
          "NumberOfYoutubers": 1,
          "homecontinent": "Europe"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [122, 13]
        },
        "properties": {
          "Country": "Philippines",
          "NumberOfYoutubers": 1,
          "homecontinent": "Asia"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-7,19]
        },
        "properties": {
          "Country": "Puerto Rico",
          "NumberOfYoutubers": 1,
          "homecontinent": "North America"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [90, 65]
        },
        "properties": {
          "Country": "Russia",
          "NumberOfYoutubers": 2,
          "homecontinent": "Asia"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-90,14]
        },
        "properties": {
          "Country": "El Salvador",
          "NumberOfYoutubers": 1,
          "homecontinent": "North America"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [101, 15]
        },
        "properties": {
          "Country": "Thailand",
          "NumberOfYoutubers": 1,
          "homecontinent": "Asia"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-100, 39]
        },
        "properties": {
          "Country": "USA",
          "NumberOfYoutubers": 40,
          "homecontinent": "North America"
        }
      }
    ]
  }
  
  // Function to render the map and circles
  async function renderMap() {
    var container = document.getElementById("svg-3");
    var width = 600;
    var height = 400;
  
    // Clear the existing SVG content
    d3.select("#svg-3").selectAll("svg").remove();
  
    // Map and projection
    var projection = d3.geoMercator()
      .center([0, 30]) // GPS of location to zoom on
      .scale(90) // This is like the map zoom
      .translate([width / 2, height / 2]);
  
    var svg = d3.select("#svg-3").append("svg")
      // .attr("width", "70%")
      // .attr("height", "100%")
      .attr("viewBox", "0 0 " + width + " " + height); // Add viewBox attribute
  
    // Add a title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", 30) // Adjust the vertical position as needed
      .attr("text-anchor", "middle")
      .attr("font-size", "20px") // Adjust font size as needed
      .style('font-weight', 'bold')
      .text("Number of YouTubers in Each Country");
  
    // Load the world map data
    const dataWorld = await d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson");
      console.log('test');
  
      // Draw the map
      svg.selectAll("path")
        .data(dataWorld.features)
        .enter()
        .append("path")
        .attr("fill", "#b8b8b8")
        .attr("d", d3.geoPath().projection(projection))
        .style("stroke", "none")
        .style("opacity", 0.3);
  
      var size = d3.scaleSqrt()
        .domain([0, 40]) // Define the domain based on your data
        .range([0, 40]); // Define the range of circle sizes
  
      // This is where we define the colour of the dots
      var color = d3.scaleThreshold()
        .domain([2, 4, 5, 20, 40]) // Specify the threshold values
        .range(["steelblue","blue", "green", "yellow", "orange", "red"]); // Define the corresponding colors
  
      // Add circles:
      svg.selectAll("circle")
        .data(dataGeo.features)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
          // Extract latitude and longitude from GeoJSON geometry coordinates
          var coordinates = d.geometry.coordinates; // GeoJSON coordinates
          var longitude = coordinates[0]; // Longitude
          return projection([longitude, coordinates[1]])[0];
        })
        .attr("cy", function (d) {
          // Extract latitude and longitude from GeoJSON geometry coordinates
          var coordinates = d.geometry.coordinates; // GeoJSON coordinates
          var latitude = coordinates[1]; // Latitude
          return projection([coordinates[0], latitude])[1];
        })
        .attr("r", function (d) {
          return size(+d.properties.NumberOfYoutubers); // Use NumberOfYoutubers data
        })
        .style("fill", function (d) {
          return color(+d.properties.NumberOfYoutubers); // Color based on NumberOfYoutubers
        })
        .attr("stroke", function (d) {
          if (+d.properties.NumberOfYoutubers > 2000) {
            return "black";
          } else {
            return "none";
          }
        })
        .attr("stroke-width", 1)
        .attr("fill-opacity", 0.4);
  
  // Create an SVG element for the legend
  var legendWidth = 200; // Adjust the width as needed
  var legendHeight = 200; // Adjust the height as needed
  var legendSvg = svg.append("g")
    .attr("class", "geo-legend");
  legendSvg.append('text')
    .attr('x', width + 50)
    .attr('y', height/5)
    .attr("text-anchor", "middle")
    .attr("font-size", "20px") // Adjust font size as needed
    .style('font-weight', 'bold')
    .text("LEGEND");
    // .attr("width", legendWidth)
    // .attr("height", legendHeight)
    // .style("bottom", "10px") // Adjust the position from the bottom as needed
    // .style("left", "10px"); // Adjust the position from the left as needed
  
  // Define the color thresholds and corresponding labels for the legend
  var legendThresholds = [1, 2, 4, 5, 20, 40];
  var legendLabels = ["1", "2", "4", "5", "20", "40+"];
  
  // Add color circles and labels to the legend
  var legendItemSize = 20; // Size of each legend item
  var legendSpacing = 5; // Spacing between legend items
  
  legendSvg.selectAll("legend-circles")
    .data(legendThresholds)
    .enter()
    .append("circle")
    .attr("cx", width+50)
    .attr("cy", function (d, i) {
      return (i * (legendItemSize + legendSpacing) + legendItemSize / 2) + height/4;
    })
    .attr("r", legendItemSize / 2)
    .style("fill", function (d) {
      return color(d); // Use the color scale to fill the circles
    })
    .style("opacity", 0.4); // Set a fixed opacity for legend circles
  
  legendSvg.selectAll("legend-labels")
    .data(legendLabels)
    .enter()
    .append("text")
    .attr("x", width + 65) // Adjust the horizontal position as needed
    .attr("y", function (d, i) {
      return (i * (legendItemSize + legendSpacing) + legendItemSize / 2 + 3) + height/4; // Adjust vertical position as needed
    })
    .text(function (d) {
      return d;
    })
    .attr("alignment-baseline", "middle")
    .style("font-size", "12px"); // Adjust font size as needed
  };
  
  // Call the renderMap function when the DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    renderMap();
  });
  
  // Update the map when the window is resized
  window.addEventListener("resize", function () {
    renderMap();
  });
};

//4. Top 5 Youtubers' Average View Change per Year - Line Chart
{
  const width = 500;
  const height = 325;
  const margin = {left: 75, right: 125, bottom: 50, top: 50, rightLegend: 75};

  const svg = d3.select('#svg-4')
  .append('svg')
  .attr('viewBox', '0 0 ' + width + ' ' + height );
  
    svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', width/2)
    .attr('y', margin.top/2)
    .text('Average Views per Year for Top 5 Youtubers')
    .style('font-weight', 'bold')
    .style('font-size', 16);

  //Legend
  {
    let legend1 = svg
        .append('g')
        .attr('transform', 'translate(' + (width - margin.rightLegend) + ',' + margin.top + ')');
    legend1.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', 15)
        .style("font-weight", "bold")
        .style("font-size", "14px")
        .text("LEGEND");

    //T-Series
    legend1.append('text')
      .text('T-Series')
      .attr("y", height/15)
      .attr('text-anchor', 'middle')
      .style('fill', 'var(--lw-red-lightest)');
    legend1.append('rect')
      .attr('x', 50)
      .attr('y', height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'var(--lw-red-lightest)')
      .style('stroke', 'var(--lw-red-lightest)');
    
    //ABCkidTV
    legend1.append('text')
      .text('ABCkidTV')
      .attr("y", 2*height/15)
      .attr('text-anchor', 'middle')
      .style('fill', 'blue');
    legend1.append('rect')
      .attr('x', 50)
      .attr('y', 2*height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'blue')
      .style('stroke', 'blue');

    //SET India
    legend1.append('text')
      .text('SET India')
      .attr("y", 3*height/15)
      .attr('text-anchor', 'middle')
      .style('fill', 'red');
    legend1.append('rect')
      .attr('x', 50)
      .attr('y', 3*height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'red')
      .style('stroke', 'red');

    //PewDiePie
    legend1.append('text')
      .text('PewDiePie')
      .attr("y", 4*height/15)
      .attr('text-anchor', 'middle')
      .style('fill', '#333333');
    legend1.append('rect')
      .attr('x', 50)
      .attr('y', 4*height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', '#333333')
      .style('stroke', '#333333');
    //MrBeast
    legend1.append('text')
      .text('MrBeast')
      .attr("y", 5*height/15)
      .attr('text-anchor', 'middle')
      .style('fill', 'var(--lw-yellow-dark)');
    legend1.append('rect')
      .attr('x', 50)
      .attr('y', 5*height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'var(--lw-yellow-dark)')
      .style('stroke', 'var(--lw-yellow-dark)');
  };
  
  //Years Axis
  const x = d3.scaleTime()
    .domain([new Date(2017,0), new Date(2022,0)])
    .range([margin.left, width - margin.right]);
  svg.append('g')
    .attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
    .call(d3.axisBottom(x));
  svg.append("text")
    .attr('text-anchor', 'middle')
    .attr('x', (width - margin.right + margin.left)/2)
    .attr("y", height - margin.bottom/4)
    .text("Years");
  
  //Number of Views Axis
  const y = d3.scaleLinear()
    .domain([0, 55000]) //x10^3
    .range([(height - margin.top), margin.bottom]);
  svg.append('g')
    .attr('transform', 'translate(' + margin.left + ', 0)')
    .call(d3.axisLeft(y));
  svg.append("text")
    .attr('text-anchor', 'end')
    .attr("x", -margin.left/2)
    .attr("y", -margin.top + 70)
    .attr('transform', 'rotate(-90)')
    .text("Number of Views per Year (x 10^3)");
  
  //Data
  let data = [
    {Year: '2017', TSeries: 152245, ABCkidTVNurseryRhymes: 1837916, SETIndia: 446040, PewDiePie: 134594, MrBeast: 12941021},
    {Year: '2018', TSeries: 2134570, ABCkidTVNurseryRhymes: 1837916, SETIndia: 586040, PewDiePie: 2497395, MrBeast: 29941021},
    {Year: '2019', TSeries: 1809830, ABCkidTVNurseryRhymes: 4891832, SETIndia: 280128, PewDiePie: 3497395, MrBeast: 29941021},
    {Year: '2020', TSeries: 2306178, ABCkidTVNurseryRhymes: 7052577, SETIndia: 343788, PewDiePie: 3094440, MrBeast: 29941021},
    {Year: '2021', TSeries: 1676330, ABCkidTVNurseryRhymes: 12654330, SETIndia: 353602, PewDiePie: 3620274, MrBeast: 29941021},
    {Year: '2022', TSeries: 95416, ABCkidTVNurseryRhymes: 15722845, SETIndia: 322034, PewDiePie: 4454120, MrBeast: 53434733}
  ];

  //Lines
  let group = svg.append('g')
  //T-Series
  const line1 = d3.line(d=> x(new Date(d.Year)), d => y(d.TSeries/1000));
  group.append('path')
    .attr('d', line1(data))
    .attr('stroke', 'var(--lw-red-lightest)')
    .attr("stroke-width", 2)
    .attr('fill', 'none');
  //ABCkidTV
  const line2 = d3.line(d=> x(new Date(d.Year)), d => y(d.ABCkidTVNurseryRhymes/1000));
  group.append('path')
    .attr('d', line2(data))
    .attr('stroke', 'blue')
    .attr("stroke-width", 2)
    .attr('fill', 'none');
  //SET India
  const line3 = d3.line(d=>x(new Date(d.Year)), d => y(d.SETIndia/1000));
  group.append('path')
    .attr('d', line3(data))
    .attr('stroke', 'red')
    .attr("stroke-width", 2)
    .attr('fill', 'none');
  //PewDiePie
  const line4 = d3.line(d=> x(new Date(d.Year)), d => y(d.PewDiePie/1000));
  group.append('path')
    .attr('d', line4(data))
    .attr('stroke', '#333333')
    .attr("stroke-width", 2)
    .attr('fill', 'none');
  //MrBeast
  const line5 = d3.line(d=> x(new Date(d.Year)), d => y(d.MrBeast/1000));
  group.append('path')
    .attr('d', line5(data))
    .attr('stroke', 'var(--lw-yellow-dark)')
    .attr("stroke-width", 2)
    .attr('fill', 'none');

  //Dots
  let dotsGroup = svg.append("g");
  dotsGroup
    .selectAll("g")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y(d.TSeries/1000);
    })
    .attr("r", 2.5)
    .style("fill", "#ff9999");
  dotsGroup
    .selectAll("g")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y(d.ABCkidTVNurseryRhymes/1000);
    })
    .attr("r", 2.5)
    .style("fill", "blue");
  dotsGroup
    .selectAll("g")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y(d.SETIndia/1000);
    })
    .attr("r", 2.5)
    .style("fill", "red");
  dotsGroup
    .selectAll("g")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y(d.PewDiePie/1000);
    })
    .attr("r", 2.5)
    .style("fill", "#333333");
  dotsGroup
    .selectAll("g")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y(d.MrBeast/1000);
    })
    .attr("r", 2.5)
    .style("fill", "var(--lw-yellow-dark)");
};
//5 Top 5 Youtubers Quarterly Income - Grouped Bar Chart
{
  const width = 500;
  const height = 325;
  const margin = {left: 80, right: 90, bottom: 50, top: 50, rightLegend: 75};

  const svg = d3.select('#svg-5')
  .append('svg')
  .attr('viewBox', '0 0 ' + width + ' ' + height );

  //Title
  svg.append('text')
  .attr('text-anchor', 'middle')
  .attr('x', width/2)
  .attr('y', margin.top/2)
  .text('Top 5 Youtubers Quarterly Income')
  .style('font-weight', 'bold')
  .style('font-size', 16);

  //Legend
  {
    let legend1 = svg
        .append('g')
        .attr('transform', 'translate(' + (width - margin.rightLegend) + ',' + margin.top + ')');
    legend1.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', 15)
        .style("font-weight", "bold")
        .style("font-size", "14px")
        .text("LEGEND");

    //q1
    legend1.append('text')
      .text('q1')
      .attr("y", height/15)
      .attr('text-anchor', 'middle')
      .style('fill', 'var(--lw-blue-dark)');
    legend1.append('rect')
      .attr('x', 20)
      .attr('y', height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'var(--lw-blue-dark)')
      .style('stroke', 'var(--lw-blue-dark)');
    
    //q2
    legend1.append('text')
      .text('q2')
      .attr("y", 2*height/15)
      .attr('text-anchor', 'middle')
      .style('fill', 'var(--lw-red-dark)');
    legend1.append('rect')
      .attr('x', 20)
      .attr('y', 2*height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'var(--lw-red-dark)')
      .style('stroke', 'var(--lw-red-dark)');

    //q3
    legend1.append('text')
      .text('q3')
      .attr("y", 3*height/15)
      .attr('text-anchor', 'middle')
      .style('fill', 'var(--lw-yellow-dark)');
    legend1.append('rect')
      .attr('x', 20)
      .attr('y', 3*height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'var(--lw-yellow-dark)')
      .style('stroke', 'var(--lw-yellow-dark)');

    //q4
    legend1.append('text')
      .text('q4')
      .attr("y", 4*height/15)
      .attr('text-anchor', 'middle')
      .style('fill', '#515151');
    legend1.append('rect')
      .attr('x', 20)
      .attr('y', 4*height/15 - 10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', '#515151')
      .style('stroke', '#515151');
  };

  //Data
  let data = [
    {Youtuber: 'TSeries', q1: 441696.55, q2: 714420.59, q3: 822385.13, q4:492428.39},
    {Youtuber: "ABCkidTV", q1: 617387.98, q2: 747622.15, q3: 948557.67, q4: 510605.06},
    {Youtuber: "SETIndia", q1: 491881.92, q2: 679295.46, q3: 8621.08, q4: 774687.67},
    {Youtuber: "PewDiePie", q1: 146655.53, q2: 389799.23, q3: 687739.37, q4: 5611.85},
    {Youtuber: "MrBeast", q1: 374968.2, q2: 914153.73, q3: 776074.12, q4: 125315.82}
  ];

    let groups = data.map(d => d.Youtuber);
    let subgroups = ["q1", "q2", "q3", "q4"];

    //Y Axis - Income
    const y = d3.scaleLinear()
      .domain([0, 1000000]) 
      .range([height - margin.top, margin.bottom]);
    svg.append('g')
      .attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y));
    svg.append('text')
      .attr('text-anchor', 'end')
      .attr("x", -margin.left + 10)
      .attr("y", -margin.top + 70)
      .attr('transform', 'rotate(-90)')
      .text("Quarterly Income (x 10^3)");

    //X Axis - Youtubers
    console.log(groups);
    const x = d3.scaleBand()
      .domain(groups)
      .range([margin.left, width - margin.right])
      .padding([0.2]);
    svg.append('g')
      .attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
      .call(d3.axisBottom(x));
    svg.append("text")
      .attr('text-anchor', 'middle')
      .attr('x', (width - margin.right + margin.left)/2)
      .attr("y", height - margin.bottom/4)
      .text("Top 5 Youtubers");
    
    //X SubAxis
    const xSub = d3.scaleBand()
      .domain(subgroups)
      .range([0, x.bandwidth()]);

    //Colors
    const colorScale = d3.scaleOrdinal()
      .domain(subgroups)
      .range(['var(--lw-blue-dark)', 'var(--lw-red-dark)', 'var(--lw-yellow-dark)', '#515151']);

    //Make the Bars
    svg.append('g')
      .selectAll('g')
      .data(data)
      .join('g') //does .enter() and .append() together - puts all the elements together
        .attr('transform' , d => {return 'translate(' + x(d.Youtuber) + ',0)'}) 
        .selectAll('rect')
          .data(d => {return subgroups.map(key => {return {key: key, value: d[key]}})})
          .join('rect')
            .attr('x', d => xSub(d.key))
            .attr('y', d => y(d.value)-0.5)
            .attr('width', xSub.bandwidth())
            .attr('height', d => height - y(d.value) - margin.top)
            .attr('fill', d => colorScale(d.key));
};

//6. Number of Youtuber Channels By Category Separated By Country - Two Bar Charts with Drop down Select Country (Or 1 Bar Chart)
{
  const width = 800;
  const height = 300;
  margin ={top: 60, left: 60, right: 20, bottom: 60};

  const svg = d3.select('#svg-6')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`);
  
  //data
  const data = [
    {Country: 'all', Code: 'ALL', NumberOfYoutubers: 85, categories: [  
      {Category: 'Gaming & Apps', NumChannels: 39},
      {Category: 'Music', NumChannels: 25},
      {Category: 'None', NumChannels: 6},
      {Category: 'Beauty & Fashion', NumChannels: 4},
      {Category: 'Entertainment', NumChannels: 4},
      {Category: 'People & Blogs', NumChannels: 3},
      {Category: 'Sports', NumChannels: 2},
      {Category: 'Fashion', NumChannels: 1},
      {Category: 'Science & Tech', NumChannels: 1},
    ]},
    {Country: 'India', Code: 'IN', NumberOfYoutubers: 23, categories: [
      {Category: 'Gaming & Apps', NumChannels: 14},
      {Category: 'Music', NumChannels: 6},
      {Category: 'None', NumChannels: 2},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 1},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'United States', Code: 'US', NumberOfYoutubers: 40, categories: [
      {Category: 'Gaming & Apps', NumChannels: 17},
      {Category: 'Music', NumChannels: 12},
      {Category: 'None', NumChannels: 1},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 3},
      {Category: 'People & Blogs', NumChannels: 3},
      {Category: 'Sports', NumChannels: 2},
      {Category: 'Fashion', NumChannels: 1},
      {Category: 'Science & Tech', NumChannels: 1},
    ]},
    {Country: 'Brazil', Code: 'BR', NumberOfYoutubers: 5, categories: [
      {Category: 'Gaming & Apps', NumChannels: 2},
      {Category: 'Music', NumChannels: 2},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 1},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Korea', Code: 'KR', NumberOfYoutubers: 4, categories: [
      {Category: 'Gaming & Apps', NumChannels: 2},
      {Category: 'Music', NumChannels: 2},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Canada', Code: 'CA', NumberOfYoutubers: 2, categories: [
      {Category: 'Gaming & Apps', NumChannels: 2},
      {Category: 'Music', NumChannels: 0},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Mexico', Code: 'MX', NumberOfYoutubers: 2, categories: [
      {Category: 'Gaming & Apps', NumChannels: 0},
      {Category: 'Music', NumChannels: 0},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 2},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Russia', Code: 'RU', NumberOfYoutubers: 2, categories: [
      {Category: 'Gaming & Apps', NumChannels: 1},
      {Category: 'Music', NumChannels: 0},
      {Category: 'None', NumChannels: 1},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Belarus', Code: 'BY', NumberOfYoutubers: 1, categories: [
      {Category: 'Gaming & Apps', NumChannels: 0},
      {Category: 'Music', NumChannels: 0},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 1},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Chile', Code: 'CL', NumberOfYoutubers: 1, categories: [
      {Category: 'Gaming & Apps', NumChannels: 0},
      {Category: 'Music', NumChannels: 1},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Norway', Code: 'NO', NumberOfYoutubers: 1, categories: [
      {Category: 'Gaming & Apps', NumChannels: 0},
      {Category: 'Music', NumChannels: 1},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Philippines', Code: 'PH', NumberOfYoutubers: 1, categories: [
      {Category: 'Gaming & Apps', NumChannels: 0},
      {Category: 'Music', NumChannels: 0},
      {Category: 'None', NumChannels: 1},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Puerto Rico', Code: 'PR', NumberOfYoutubers: 1, categories: [
      {Category: 'Gaming & Apps', NumChannels: 0},
      {Category: 'Music', NumChannels: 1},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'El Salvador', Code: 'SV', NumberOfYoutubers: 1, categories: [
      {Category: 'Gaming & Apps', NumChannels: 1},
      {Category: 'Music', NumChannels: 0},
      {Category: 'None', NumChannels: 0},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]},
    {Country: 'Thailand', Code: 'TH', NumberOfYoutubers: 2, categories: [
      {Category: 'Gaming & Apps', NumChannels: 0},
      {Category: 'Music', NumChannels: 0},
      {Category: 'None', NumChannels: 1},
      {Category: 'Beauty & Fashion', NumChannels: 0},
      {Category: 'Entertainment', NumChannels: 0},
      {Category: 'People & Blogs', NumChannels: 0},
      {Category: 'Sports', NumChannels: 0},
      {Category: 'Fashion', NumChannels: 0},
      {Category: 'Science & Tech', NumChannels: 0},
    ]}
  ]

  //Title
  svg
  .append("text")
  .attr("text-anchor", "end")
  .attr('x', width/2 - 100)
  .attr("y", margin.top/2)  
  .style("font-weight", "bold")
  .style("font-size", "20px")
  .text("All Countries");

  //First Bar Graph
  //X Axis - Categories
  const x1 = d3.scaleBand()
    .domain(data[0].categories.map(d => (d.Category)))
    .range([margin.left, width/2 - margin.right])
    .padding([0.2]);
  svg.append('g')
    .attr('id', 'xScale')
    .attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
    .call(d3.axisBottom(x1))
    .selectAll('text')
      .attr('text-anchor', 'end')
      .attr('x', -5)
      .style('font-size', 11)
      .attr('transform', `rotate(-30)`);
  
  //Y Axis - Number of Youtubers
  const y1 = d3.scaleLinear()
    .domain([0, 40]) 
    .range([height - margin.bottom, margin.top]);
    svg.append('g')
      .attr('transform', 'translate(' + margin.left + ', 0)')
      .call(d3.axisLeft(y1));
    svg.append('text')
      .attr('text-anchor', 'end')
      .attr("x", -margin.left - 5)
      .attr("y", -margin.top + 75)
      .attr('transform', 'rotate(-90)')
      .text("Number of Youtubers");

  // Bars
  let barsGroup1 = svg.append('g');
  barsGroup1
    .append('g')
    .selectAll("g")
    .data(data[0].categories)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x1(d.Category);})
      .attr("width", x1.bandwidth())
      .attr("fill", "var(--lw-red-darkest)")
      .attr("y", function(d) { return y1(d.NumChannels); })
      .attr("height", function(d) { return height - y1(d.NumChannels) - margin.top; })
      .on("mouseover", function(event, d) {
        let idName = d.Category;
        let positionAmp = idName.indexOf('&');
        if (positionAmp != -1) {
          idName = idName.slice(0, positionAmp - 1);
        }
        d3.select(this).style('fill', 'var(--lw-red)');
        d3.select('#barGraph1-' + idName).style('fill', 'var(--lw-red-darkest)');
      })
      .on('mouseleave', function(event, d) {
        let idName = d.Category;
        let positionAmp = idName.indexOf('&');
        if (positionAmp != -1) {
          idName = idName.slice(0, positionAmp - 1);
        }
        d3.select(this).style('fill', 'var(--lw-red-darkest)');
        d3.select('#barGraph1-' + idName).style('fill', 'transparent');
      });  
  
  //Hover Values
  barsGroup1
    .append('g')
    .selectAll("g")
    .data(data[0].categories)
    .enter()
    .append('text')
      .attr('text-anchor', 'middle')
      .attr('x', d => x1(d.Category) + 14)
      .attr('y', d => y1(d.NumChannels) - 15)
      .attr('id', (d, i) => {
        let idName = d.Category;
        let positionAmp = idName.indexOf('&');
        if (positionAmp != -1) {
          idName = idName.slice(0, positionAmp - 1);
        } 
          return('barGraph1-' + idName);
      })
      .text(d => d.NumChannels)
      .style('font-weight', 'bold')
      .style('fill', 'transparent');
  
  //Second Bar Graph
  //X Axis - Categories
  const x2 = d3.scaleBand()
    .domain(data[0].categories.map(d => (d.Category)))
    .range([margin.left + width/2, width  - margin.right])
    .padding([0.2]);
  svg.append('g')
    .attr('id', 'xScale')
    .attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
    .call(d3.axisBottom(x2))
    .selectAll('text')
      .attr('text-anchor', 'end')
      .attr('x', -5)
      .style('font-size', 11)
      .attr('transform', `rotate(-30)`);
  
  //Y Axis - Number of Youtubers
  const y2 = d3.scaleLinear()
    .domain([0, 40]) 
    .range([height - margin.bottom, margin.top]);
    svg.append('g')
      .attr('transform', 'translate(' + (margin.left + width/2) + ', 0)')
      .call(d3.axisLeft(y2));
    svg.append('text')
      .attr('text-anchor', 'end')
      .attr("x", -margin.left - 5)
      .attr("y", -margin.top + width/2 + 75)
      .attr('transform', 'rotate(-90)')
      .text("Number of Youtubers");

  // Bars
  let barsGroup2 = svg.append('g');
  let bars = barsGroup2
    .append('g')
    .selectAll("g")
    .data(data[1].categories)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x2(d.Category);})
      .attr("width", x1.bandwidth())
      .attr("fill", "var(--lw-blue-darkest)")
      .attr("y", function(d) { return y2(d.NumChannels); })
      .attr("height", function(d) { return height - y2(d.NumChannels) - margin.top; })
      .on("mouseover", function(event, d) {
        let idName = d.Category;
        let positionAmp = idName.indexOf('&');
        if (positionAmp != -1) {
          idName = idName.slice(0, positionAmp - 1);
        }
        d3.select(this).style('fill', 'var(--lw-blue)');
        d3.select('#barGraph2-' + idName).style('fill', 'var(--lw-blue-darkest)');
      })
      .on('mouseleave', function(event, d) {
        let idName = d.Category;
        let positionAmp = idName.indexOf('&');
        if (positionAmp != -1) {
          idName = idName.slice(0, positionAmp - 1);
        }
        d3.select(this).style('fill', 'var(--lw-blue-darkest)');
        d3.select('#barGraph2-' + idName).style('fill', 'transparent');
      });  
  
  //Hover Values
  let values = barsGroup2
    .append('g')
    .selectAll("g")
    .data(data[1].categories)
    .enter()
    .append('text')
      .attr('text-anchor', 'middle')
      .attr('x', d => x2(d.Category) + 14)
      .attr('y', d => y2(d.NumChannels) - 15)
      .attr('id', (d, i) => {
        let idName = d.Category;
        let positionAmp = idName.indexOf('&');
        if (positionAmp != -1) {
          idName = idName.slice(0, positionAmp - 1);
        } 
          return('barGraph2-' + idName);
      })
      .text(d => d.NumChannels)
      .style('font-weight', 'bold')
      .style('fill', 'transparent');

  //DropDown Logic
  d3.select("#select-country").on("change", function(d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value")
    // run the updateChart function with this selected option
    update(selectedOption);
  });

  function update(countryindex) {
    var dataFilter = data[countryindex].categories;
    console.log(dataFilter);
    bars.data(dataFilter)
      .attr("x", function(d) { return x2(d.Category);})
      .attr("width", x1.bandwidth())
      .attr("y", function(d) { return y2(d.NumChannels); })
      .attr("height", function(d) { return height - y2(d.NumChannels) - margin.top; });
    values.data(dataFilter)
      .attr('x', d => x2(d.Category) + 14)
      .attr('y', d => y2(d.NumChannels) - 15)
      .attr('id', (d, i) => {
        let idName = d.Category;
        let positionAmp = idName.indexOf('&');
        if (positionAmp != -1) {
          idName = idName.slice(0, positionAmp - 1);
        } 
          return('barGraph2-' + idName);
      })
      .text(d => d.NumChannels)
  }
};

//8. Country with the Most Youtubers - Bar Chart with popout single value chart
{
  const width = 500;
  const height = 325;
  const margin = {left: 80, right: 90, bottom: 50, top: 50, rightLegend: 75};
  
  const svg = d3.select('#svg-8')
    .append('svg')
    .attr('viewBox', '0 0 ' + width + ' ' + height );
  
    //Title
    svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', width/2)
    .attr('y', margin.top/2)
    .text('Countries with the Most Youtubers')
    .style('font-weight', 'bold')
    .style('font-size', 16);
  
    //Data
    const data = [
      {Country: 'US', NumberOfYoutubers: 40},
      {Country: 'IN', NumberOfYoutubers: 23},
      {Country: 'BR', NumberOfYoutubers: 5},
      {Country: 'KR', NumberOfYoutubers: 4},
      {Country: 'CA', NumberOfYoutubers: 2},
      {Country: "MX", NumberOfYoutubers: 2},
      {Country: "RU", NumberOfYoutubers: 2},
      {Country: "BY", NumberOfYoutubers: 1},
      {Country: "CL", NumberOfYoutubers: 1},
      {Country: "NO", NumberOfYoutubers: 1},
      {Country: "PH", NumberOfYoutubers: 1},
      {Country: "PR", NumberOfYoutubers: 1},
      {Country: "SV", NumberOfYoutubers: 1},
      {Country: "TH", NumberOfYoutubers: 1},
    ];
  
    const x = d3.scaleBand()
      .domain(data.map(d=> (d.Country)))
      .range([margin.left, width - margin.right])
      .padding([0.2]);
      svg.append('g')
        .attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
        .call(d3.axisBottom(x));
      svg.append("text")
        .attr('text-anchor', 'middle')
        .attr('x', (width - margin.right + margin.left)/2)
        .attr("y", height - margin.bottom/4)
        .text("Countries");
  
    //Number of Youtubers Axis
    const y = d3.scaleLinear()
      .domain([0, 45]) 
      .range([height - margin.top, margin.bottom]);
      svg.append('g')
        .attr('transform', 'translate(' + margin.left + ', 0)')
        .call(d3.axisLeft(y));
      svg.append('text')
        .attr('text-anchor', 'end')
        .attr("x", -margin.left + 10)
        .attr("y", -margin.top + 70)
        .attr('transform', 'rotate(-90)')
      .text("Top 100 Youtubers by Country");
  
    // Bars
    svg.append('g')
    .selectAll("g")
    .data(data)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Country);})
      .attr("width", x.bandwidth())
      .attr("fill", 'var(--lw-red-dark)')
      .attr("y", function(d) { return y(d.NumberOfYoutubers); })
      .attr("height", function(d) { return height - y(d.NumberOfYoutubers) - margin.top; })
      .on("mouseover", function(event, d) {
        d3.select('#barGraph-US').style('fill', 'transparent');
        d3.select(this).style('fill', 'var(--lw-red)');
        d3.select('#barGraph-' + d.Country).style('fill', 'black');
      })
      .on('mouseleave', function(event, d) {
        d3.select(this).style('fill', 'var(--lw-red-dark)');
        d3.select('#barGraph-' + d.Country).style('fill', 'transparent');
        d3.select('#barGraph-US').style('fill', 'black');
      });  
    
    //Pop-Out
    svg.append('g')
      .append('rect')
      .attr("width", 220)
      .attr("height", 30)
      .attr('x', 170)
      .attr('y', 100)
      .style("fill", "red")
      .style("stroke", "var(--lw-red-dark)")
      .style("fill-opacity", .5)
      .style("stroke-width", 3);
  
    svg.append('g')
      .selectAll("g")
      .data(data)
      .enter()
      .append("text")
        .style('text-anchor', 'middle')
        .attr('x', 280)
        .attr('y', 120)
        .attr('id', (d, i ) => 'barGraph-' + d.Country)
        .text((d, i) => d.Country +' has '+ d.NumberOfYoutubers + ' Youtubers')
        .style('fill', 'transparent')
        .style('font-weight', 'bold');
    
    d3.select('#barGraph-US')
      .text('Top Country is US With 40!')
      .style('fill', 'black')
      .style('font-weight', 'bold');
    
};