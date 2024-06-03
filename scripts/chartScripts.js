//1. Line Graphs
{let svg1 = d3.select('#lineGraphContainer')
  .append('svg')
    .attr('width', width + 2*margin)
    .attr('height', height + 2*margin)
    .append('g')
      .attr('transform', 'translate(' + 2*margin + ',' + margin + ')');
  //Title
  svg1.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', width/2)
    .text('SAMPLE - Number of Views per Year for 5 Youtubers')
    .style('font-size', 20);

  //Legend
  let legend1 = d3.select('#lineGraphContainer')
    .append('svg')
      .attr('width', 200)
      .attr('height', 400)
    .append('g')
    .attr('transform', 'translate(' + 2*margin + ',' + margin + ')');
  legend1.append('text')
    .text('LEGEND')
    .attr('text-anchor', 'middle')
    .style('text-decoration', 'underline');

  legend1.append('text')
    .text('Youtuber 1')
    .attr("y", height/15)
    .attr('text-anchor', 'middle')
    .style('fill', 'var(--lw-red)');
  legend1.append('rect')
    .attr('x', 50)
    .attr('y', height/15 - 10)
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', 'var(--lw-red)');
  legend1.append('text')
    .text('Youtuber 2')
    .attr("y", 2*height/15)
    .attr('text-anchor', 'middle')
    .style('fill', 'var(--lw-blue)');
  legend1.append('rect')
    .attr('x', 50)
    .attr('y', 2*height/15 - 10)
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', 'var(--lw-blue)');
  legend1.append('text')
    .text('Youtuber 3')
    .attr("y", 3*height/15)
    .attr('text-anchor', 'middle')
    .style('fill', 'var(--lw-yellow-dark)');
  legend1.append('rect')
    .attr('x', 50)
    .attr('y', 3*height/15 - 10)
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', 'var(--lw-yellow-dark)');
  legend1.append('text')
    .text('Youtuber 4')
    .attr("y", 4*height/15)
    .attr('text-anchor', 'middle')
    .style('fill', 'green');
  legend1.append('rect')
    .attr('x', 50)
    .attr('y', 4*height/15 - 10)
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', 'green');
  legend1.append('text')
    .text('Youtuber 5')
    .attr("y", 5*height/15)
    .attr('text-anchor', 'middle')
    .style('fill', 'purple');
  legend1.append('rect')
    .attr('x', 50)
    .attr('y', 5*height/15 - 10)
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', 'purple');

  //Years Axis
  const x1 = d3.scaleTime()
    .domain([new Date(2015,0), new Date(2023,0)])
    .range([margin, width - margin]);
  svg1.append('g')
    .attr('transform', 'translate(0,' + (height - margin) + ')')
    .call(d3.axisBottom(x1));
  svg1.append("text")
    .attr('text-anchor', 'middle')
    .attr('x', width/2)
    .attr("y", height + 10)
    .text("Years");
  
  //Number of Views Axis
  const y1 = d3.scaleLinear()
    .domain([0, 100000]) 
    .range([height - margin, margin]);
  svg1.append('g')
    .attr('transform', 'translate(' + margin + ', 0)')
    .call(d3.axisLeft(y1));
  svg1.append("text")
    .attr('text-anchor', 'end')
    .attr("x", -margin - 50)
    .attr("y", -margin + 0)
    .attr('transform', 'rotate(-90)')
    .text("Number of Views per Year");
  
  //Data
  const data1 = [
    {Year: '2015', Youtuber1: 14020, Youtuber2: 24020, Youtuber3: 53029, Youtuber4: 54767, Youtuber5: 1000},
    {Year: '2016', Youtuber1: 20312, Youtuber2: 24312, Youtuber3: 54029, Youtuber4: 44567, Youtuber5: 4753},
    {Year: '2017', Youtuber1: 18750, Youtuber2: 24750, Youtuber3: 59181, Youtuber4: 44568, Youtuber5: 10435},
    {Year: '2018', Youtuber1: 39674, Youtuber2: 53674, Youtuber3: 62829, Youtuber4: 75434, Youtuber5: 14536},
    {Year: '2019', Youtuber1: 54089, Youtuber2: 58029, Youtuber3: 63019, Youtuber4: 96745, Youtuber5: 32141},
    {Year: '2020', Youtuber1: 52039, Youtuber2: 50039, Youtuber3: 65019, Youtuber4: 76546, Youtuber5: 64145},
    {Year: '2021', Youtuber1: 59101, Youtuber2: 59999, Youtuber3: 68290, Youtuber4: 43256, Youtuber5: 72341},
    {Year: '2022', Youtuber1: 62019, Youtuber2: 43567, Youtuber3: 69293, Youtuber4: 64678, Youtuber5: 85252},
    {Year: '2023', Youtuber1: 45039, Youtuber2: 78902, Youtuber3: 71289, Youtuber4: 73455, Youtuber5: 95622}
  ];

  //Lines
  let group1 = svg1.append('g');
  //Line 1
  const line1 = d3.line(d=> x1(new Date(d.Year)), d => y1(d.Youtuber1));
  group1.append('path')
    .attr('d', line1(data1))
    .attr('stroke', 'var(--lw-red)')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
  //Line2
  const line2 = d3.line(d=> x1(new Date(d.Year)), d => y1(d.Youtuber2));
  group1.append('path')
    .attr('d', line2(data1))
    .attr('stroke', 'var(--lw-blue)')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
  //Line3
  const line3 = d3.line(d=> x1(new Date(d.Year)), d => y1(d.Youtuber3));
  group1.append('path')
    .attr('d', line3(data1))
    .attr('stroke', 'var(--lw-yellow-dark)')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
  //Line4
  const line4 = d3.line(d=> x1(new Date(d.Year)), d => y1(d.Youtuber4));
  group1.append('path')
    .attr('d', line4(data1))
    .attr('stroke', 'green')
    .attr('stroke-width', 2)
    .attr('fill', 'none');
  //Line5
  const line5 = d3.line(d=> x1(new Date(d.Year)), d => y1(d.Youtuber5));
  group1.append('path')
    .attr('d', line5(data1))
    .attr('stroke', 'purple')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

  //Dots
  let group2 = svg1.append('g');
    group2.selectAll('g')
      .data(data1)
      .enter()
      .append('circle')
        .attr('cx', d => {return x1(new Date(d.Year))})
        .attr('cy', d => {return y1(d.Youtuber1)})
        .attr('r', 3)
        .style('fill', 'var(--lw-red)'); 
    group2.selectAll('g')
      .data(data1)
      .enter()
      .append('circle')
        .attr('cx', d => {return x1(new Date(d.Year))})
        .attr('cy', d => {return y1(d.Youtuber2)})
        .attr('r', 3)
        .style('fill', 'var(--lw-blue)');
    group2.selectAll('g')
      .data(data1)
      .enter()
      .append('circle')
        .attr('cx', d => {return x1(new Date(d.Year))})
        .attr('cy', d => {return y1(d.Youtuber3)})
        .attr('r', 3)
        .style('fill', 'var(--lw-yellow-dark)');
    group2.selectAll('g')
      .data(data1)
      .enter()
      .append('circle')
        .attr('cx', d => {return x1(new Date(d.Year))})
        .attr('cy', d => {return y1(d.Youtuber4)})
        .attr('r', 3)
        .style('fill', 'green');
    group2.selectAll('g')
      .data(data1)
      .enter()
      .append('circle')
        .attr('cx', d => {return x1(new Date(d.Year))})
        .attr('cy', d => {return y1(d.Youtuber5)})
        .attr('r', 3)
        .style('fill', 'purple');
    
};

//2. Bar Graphs
{
  //Single Bar Graph
  {let svg = d3.select('#barGraphContainer')
    .append('svg')
      .attr('width', width + 2*margin)
      .attr('height', height + 2*margin)
      .append('g')
        .attr('transform', 'translate(' + 2*margin + ',' + margin + ')');
    
    //Title
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('x', width/2)
      .text('SAMPLE - Number of Popular Youtubers per Category')
      .style('font-size', 20);

    //X Axis - Genres
    const x = d3.scaleBand()
      .domain(['Cooking','Gaming','Entertainment','Childrens','Sports'])
      .range([margin, width - margin]);
    svg.append('g')
      .attr('transform', 'translate(0,' + (height - margin) + ')')
      .call(d3.axisBottom(x));
    svg.append("text")
      .attr('text-anchor', 'middle')
      .attr('x', width/2)
      .attr("y", height + 10)
      .text("Genres");

    //Y Axis - Number of Youtubers
    const y = d3.scaleLinear()
      .domain([0, 1000]) 
      .range([height - margin, margin]);
    svg.append('g')
      .attr('transform', 'translate(' + margin + ', 0)')
      .call(d3.axisLeft(y));
    svg.append("text")
      .attr('text-anchor', 'end')
      .attr("x", -2.5*margin)
      .attr("y", -margin/2)
      .attr('transform', 'rotate(-90)')
      .text("Number of Youtubers");
    
    //Data
    const data = [
      {Genre: 'Cooking', Youtubers: 350},
      {Genre: 'Gaming', Youtubers: 400},
      {Genre: 'Entertainment', Youtubers: 500},
      {Genre: 'Childrens', Youtubers: 450},
      {Genre: 'Sports', Youtubers: 200}
    ];

    //Bars and Values
    const barWidth = 80; //this can change
    const group = svg.append('g');
    //Bars
    group
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2)
        .attr('y', d => y(d.Youtubers) - height)
        .attr('height', d => height - margin - y(d.Youtubers))
        .attr('width', barWidth)
        .style('fill', 'var(--lw-red)')
        .on("mouseover", function(event, d) {
          d3.select(this).style('fill', 'var(--lw-red-light)');
          d3.select('#barGraph-' + d.Genre).style('fill', 'var(--lw-red-light)');
        })
        .on('mouseleave', function(event, d) {
          d3.select(this).style('fill', 'red');
          d3.select('#barGraph-' + d.Genre).style('fill', 'transparent');
        });
    //Values
    group
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('text')
        .attr('text-anchor', 'middle')
        .attr('x', d => x(d.Genre) + x.step()/2)
        .attr('y', d => y(d.Youtubers) - height - 10)
        .attr('id', (d, i ) => 'barGraph-' + d.Genre)
        .classed('valueIndicator', true)
        .text(d => d.Youtubers)
        .style('fill', 'white');
  };

  //Grouped Bar Graph 1
  {
    let svg = d3.select('#barGraphContainer')
      .append('svg')
        .attr('width', 1.5*width + 2*margin)
        .attr('height', height + 2*margin)
        .append('g')
          .attr('transform', 'translate(' + 2*margin + ',' + margin + ')');

    //Title
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('x', width*3/4)
      .text('SAMPLE - 5 Most Popular Youtubers by Views in Each Genre')
      .style('font-size', 20);

    //X Axis - Genres
    const x = d3.scaleBand()
      .domain(['Cooking','Gaming','Entertainment','Childrens','Sports'])
      .range([margin, 1.5*width - margin]);
    svg.append('g')
      .attr('transform', 'translate(0,' + (height - margin) + ')')
      .call(d3.axisBottom(x));
    svg.append("text")
      .attr('text-anchor', 'middle')
      .attr('x', width*3/4)
      .attr("y", height + 10)
      .text("Genres");

    //Y Axis - Number of Youtubers
    const y = d3.scaleLinear()
      .domain([0, 100000]) 
      .range([height - margin, margin]);
    svg.append('g')
      .attr('transform', 'translate(' + margin + ', 0)')
      .call(d3.axisLeft(y));
    svg.append("text")
      .attr('text-anchor', 'end')
      .attr("x", -2.5*margin)
      .attr("y", -margin/2)
      .attr('transform', 'rotate(-90)')
      .text("Number of Views This Year");
    
    //Data
    const data = [
      {Genre: 'Cooking', Youtuber1: 20381, Youtuber2: 48102, Youtuber3: 50191, Youtuber4: 71920, Youtuber5: 83920},
      {Genre: 'Gaming', Youtuber1: 15039, Youtuber2: 39101, Youtuber3: 50109, Youtuber4: 70192, Youtuber5: 72819},
      {Genre: 'Entertainment', Youtuber1: 43028, Youtuber2: 75930, Youtuber3: 81920, Youtuber4: 92039, Youtuber5: 98209},
      {Genre: 'Childrens', Youtuber1: 27191, Youtuber2: 51920, Youtuber3: 62910, Youtuber4: 80192, Youtuber5: 82930},
      {Genre: 'Sports', Youtuber1: 10129, Youtuber2: 32019, Youtuber3: 41029, Youtuber4: 49230, Youtuber5: 74930}
    ];

    //Bars
    const barWidth = 20; //this can change (but you need to make the chart width bigger/smaller)
    const group1 = svg.append('g')
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2 - barWidth*2.5)
        .attr('y', d => y(d.Youtuber1) - height)
        .attr('height', d => height - margin - y(d.Youtuber1))
        .attr('width', barWidth)
        .style('fill', 'red')
        .on("mouseover", function(event, d) {
          d3.select(this).style('fill', 'var(--lw-red-light)');
        })
        .on('mouseleave', function(event, d) {
          d3.select(this).style('fill', 'red');
        });
    const group2 = svg.append('g')
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2 - barWidth*1.25)
        .attr('y', d => y(d.Youtuber2) - height)
        .attr('height', d => height - margin - y(d.Youtuber2))
        .attr('width', barWidth)
        .style('fill', 'red')
        .on("mouseover", function(event, d) {
          d3.select(this).style('fill', 'var(--lw-red-light)');
        })
        .on('mouseleave', function(event, d) {
          d3.select(this).style('fill', 'red');
        });
    const group3 = svg.append('g')
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2)
        .attr('y', d => y(d.Youtuber3) - height)
        .attr('height', d => height - margin - y(d.Youtuber3))
        .attr('width', barWidth)
        .style('fill', 'red')
        .on("mouseover", function(event, d) {
          d3.select(this).style('fill', 'var(--lw-red-light)');
        })
        .on('mouseleave', function(event, d) {
          d3.select(this).style('fill', 'red');
        });
    const group4 = svg.append('g')
    .attr('transform', 'translate(0,' + (height) + ')')
    .selectAll('g')
    .data(data)
    .enter()
    .append('rect')
      .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2 + barWidth*1.25)
      .attr('y', d => y(d.Youtuber4) - height)
      .attr('height', d => height - margin - y(d.Youtuber4))
      .attr('width', barWidth)
      .style('fill', 'red')
      .on("mouseover", function(event, d) {
        d3.select(this).style('fill', 'var(--lw-red-light)');
      })
      .on('mouseleave', function(event, d) {
        d3.select(this).style('fill', 'red');
      });
    const group5 = svg.append('g')
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2 + barWidth*2.5)
        .attr('y', d => y(d.Youtuber5) - height)
        .attr('height', d => height - margin - y(d.Youtuber5))
        .attr('width', barWidth)
        .style('fill', 'red')
        .on("mouseover", function(event, d) {
          d3.select(this).style('fill', 'var(--lw-red-light)');
        })
        .on('mouseleave', function(event, d) {
          d3.select(this).style('fill', 'red');
        });
  };

  //Grouped Bar Graph 2
  {
    let svg = d3.select('#barGraphContainer')
      .append('svg')
        .attr('width', 1.5*width + 2*margin)
        .attr('height', height + 2*margin)
        .append('g')
          .attr('transform', 'translate(' + 2*margin + ',' + margin + ')');

    //Title
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('x', width*3/4)
      .text('SAMPLE - 5 Most Popular Youtubers by Views in Each Genre');

    //X Axis - Genres
    const x = d3.scaleBand()
      .domain(['Cooking','Gaming','Entertainment','Childrens','Sports'])
      .range([margin, 1.5*width - margin]);
    svg.append('g')
      .attr('transform', 'translate(0,' + (height - margin) + ')')
      .call(d3.axisBottom(x));
    svg.append("text")
      .attr('text-anchor', 'middle')
      .attr('x', width*3/4)
      .attr("y", height + 10)
      .text("Genres");

    //Y Axis - Number of Youtubers
    const y = d3.scaleLinear()
      .domain([0, 100000]) 
      .range([height - margin, margin]);
    svg.append('g')
      .attr('transform', 'translate(' + margin + ', 0)')
      .call(d3.axisLeft(y));
    svg.append("text")
      .attr('text-anchor', 'end')
      .attr("x", -2.5*margin)
      .attr("y", -margin/2)
      .attr('transform', 'rotate(-90)')
      .text("Number of Views This Year");
    
    //Data
    const data = [
      {Genre: 'Cooking', Youtuber1: 20381, Youtuber2: 48102, Youtuber3: 50191, Youtuber4: 71920, Youtuber5: 83920},
      {Genre: 'Gaming', Youtuber1: 15039, Youtuber2: 39101, Youtuber3: 50109, Youtuber4: 70192, Youtuber5: 72819},
      {Genre: 'Entertainment', Youtuber1: 43028, Youtuber2: 75930, Youtuber3: 81920, Youtuber4: 92039, Youtuber5: 98209},
      {Genre: 'Childrens', Youtuber1: 27191, Youtuber2: 51920, Youtuber3: 62910, Youtuber4: 80192, Youtuber5: 82930},
      {Genre: 'Sports', Youtuber1: 10129, Youtuber2: 32019, Youtuber3: 41029, Youtuber4: 49230, Youtuber5: 74930}
    ];

    //Bars
    const barWidth = 20; //this can change (but you need to make the chart width bigger/smaller)
    const group1 = svg.append('g')
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2 - barWidth*2.5)
        .attr('y', d => y(d.Youtuber1) - height)
        .attr('height', d => height - margin - y(d.Youtuber1))
        .attr('width', barWidth)
        .style('fill', 'var(--lw-red-lightest)');
    const group2 = svg.append('g')
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2 - barWidth*1.25)
        .attr('y', d => y(d.Youtuber2) - height)
        .attr('height', d => height - margin - y(d.Youtuber2))
        .attr('width', barWidth)
        .style('fill', 'var(--lw-red-light)');
    const group3 = svg.append('g')
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2)
        .attr('y', d => y(d.Youtuber3) - height)
        .attr('height', d => height - margin - y(d.Youtuber3))
        .attr('width', barWidth)
        .style('fill', 'var(--lw-red)');
    const group4 = svg.append('g')
    .attr('transform', 'translate(0,' + (height) + ')')
    .selectAll('g')
    .data(data)
    .enter()
    .append('rect')
      .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2 + barWidth*1.25)
      .attr('y', d => y(d.Youtuber4) - height)
      .attr('height', d => height - margin - y(d.Youtuber4))
      .attr('width', barWidth)
      .style('fill', 'var(--lw-red-dark)');
    const group5 = svg.append('g')
      .attr('transform', 'translate(0,' + (height) + ')')
      .selectAll('g')
      .data(data)
      .enter()
      .append('rect')
        .attr('x', d => x(d.Genre) + x.step()/2 - barWidth/2 + barWidth*2.5)
        .attr('y', d => y(d.Youtuber5) - height)
        .attr('height', d => height - margin - y(d.Youtuber5))
        .attr('width', barWidth)
        .style('fill', 'var(--lw-red-darkest)');
  };
};

//3. Single Value Charts
{
  //separate width and height values
  const width = 200;
  const height = 200;
  const fontSize = 60;

  {//Static Single Values
    {//First One
    let svg = d3.select('#singleStaticContainer1')
      .append('svg')
        .attr('width', width + 2*margin)
        .attr('height', height + 2*margin)
        .append('g')
          .attr('transform', 'translate(' + margin + ',' + margin + ')');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2)
        .style('fill', 'var(--lw-red)');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2 - 20)
        .style('fill', 'black');
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2 + fontSize/4)
        .text('37')
        .style('fill', 'white')
        .style('font-size', fontSize);
    };
    {//Second One
      let svg = d3.select('#singleStaticContainer2')
      .append('svg')
        .attr('width', width + 2*margin)
        .attr('height', height + 2*margin)
        .append('g')
          .attr('transform', 'translate(' + margin + ',' + margin + ')');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2)
        .style('fill', 'var(--lw-blue)');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2 - 20)
        .style('fill', 'black');
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2 + fontSize/4)
        .text('37')
        .style('fill', 'white')
        .style('font-size', fontSize);
    };
    {//Third One
      let svg = d3.select('#singleStaticContainer3')
      .append('svg')
        .attr('width', width + 2*margin)
        .attr('height', height + 2*margin)
        .append('g')
          .attr('transform', 'translate(' + margin + ',' + margin + ')');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2)
        .style('fill', 'var(--lw-yellow)');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2 - 20)
        .style('fill', 'black');
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2 + fontSize/4)
        .text('37')
        .style('fill', 'white')
        .style('font-size', fontSize);
    };
  };


  {//Dynamic Single Values
    {//First Dynamic
      let svg = d3.select('#singleDynamicContainer1')
        .append('svg')
          .attr('width', width + 2*margin)
          .attr('height', height + 2*margin)
          .attr('class', 'col')
          .append('g')
            .attr('transform', 'translate(' + margin + ',' + margin + ')');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2)
        .style('fill', 'var(--lw-red)');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2 - 20)
        .style('fill', 'black');
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2)
        .text('37')
        .style('fill', 'white')
        .style('font-size', fontSize);
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2 + 0.75*fontSize)
        .text('+2%')
        .style('fill', 'white')
        .style('font-size', fontSize/3);
    };
    {//Second Dynamic
        let svg = d3.select('#singleDynamicContainer2')
        .append('svg')
          .attr('width', width + 2*margin)
          .attr('height', height + 2*margin)
          .attr('class', 'col')
          .append('g')
            .attr('transform', 'translate(' + margin + ',' + margin + ')');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2)
        .style('fill', 'var(--lw-blue)');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2 - 20)
        .style('fill', 'black');
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2)
        .text('37')
        .style('fill', 'white')
        .style('font-size', fontSize);
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2 + 0.75*fontSize)
        .text('+2%')
        .style('fill', 'white')
        .style('font-size', fontSize/3);
    };
    {//Third Dynamic
      let svg = d3.select('#singleDynamicContainer3')
        .append('svg')
          .attr('width', width + 2*margin)
          .attr('height', height + 2*margin)
          .attr('class', 'col')
          .append('g')
            .attr('transform', 'translate(' + margin + ',' + margin + ')');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2)
        .style('fill', 'var(--lw-yellow)');
      svg.append('circle')
        .attr('cx', width/2)
        .attr('cy', height/2)
        .attr('r', height/2 - 20)
        .style('fill', 'black');
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2)
        .text('37')
        .style('fill', 'white')
        .style('font-size', fontSize);
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width/2)
        .attr('y', height/2 + 0.75*fontSize)
        .text('+2%')
        .style('fill', 'white')
        .style('font-size', fontSize/3);
    };
  };
  {//Progress Bars
    {//First Progress
      let svg3 = d3.select('#singleProgressContainer')
      .append('svg')
        .attr('width', width + 2*margin)
        .attr('height', height + 2*margin)
        .attr('class', 'col')
        .append('g')
          .attr('transform', 'translate(' + margin + ',' + margin + ')');
      
    };
  };
};

//4. Area Charts
{let svg = d3.select('#areaChartContainer')
  .append('svg')
    .attr('width', width + 2*margin)
    .attr('height', height + 2*margin)
    .append('g')
      .attr('transform', 'translate(' + 2*margin + ',' + margin + ')');
  //data
  let data = [
    {date: '2023-09-01', views: 456},
    {date: '2023-09-02', views: 586},
    {date: '2023-09-03', views: 402},
    {date: '2023-09-04', views: 356},
    {date: '2023-09-05', views: 652},
    {date: '2023-09-06', views: 165},
    {date: '2023-09-07', views: 245},
    {date: '2023-09-08', views: 365}
  ];

  //Title
  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', width/2)
    .text('SAMPLE - Number of Views per Day on Cute Cat Video')
    .style('font-size', 20);

  //X Axis
  const formatTime = d3.timeFormat('%b %d');
  // const x = d3.scaleUtc(d3.extent(data, d => new Date(d.date)), [margin, width - margin]).nice();
  const x = d3.scaleTime()
    .domain([new Date('2023-09-01'), new Date('2023-09-08')])
    .range([margin, width - margin]);
  svg.append('g')
    .attr('transform', 'translate(0,' + (height - margin) + ')')
    .call(d3.axisBottom(x).ticks(data.length).tickFormat(formatTime).tickPadding(0));
  svg.append("text")
    .attr('text-anchor', 'middle')
    .attr('x', width/2)
    .attr("y", height + 10)
    .text("Date");
  
  //Number of Views Axis
  const y = d3.scaleLinear()
    .domain([0, 1000]) 
    .range([height - margin, margin]);
  svg.append('g')
    .attr('transform', 'translate(' + margin + ', 0)')
    .call(d3.axisLeft(y));
  svg.append("text")
    .attr('text-anchor', 'end')
    .attr("x", -margin - 50)
    .attr("y", -margin + 20)
    .attr('transform', 'rotate(-90)')
    .text("Number of Views per Day");

  //Path
  const area = d3.area()
    .x(d => x(new Date(d.date))+1)
    .y0(y(0))
    .y1(d => y(d.views));
  const group = svg.append('g');

  //Gradient Effect
  const grad = group
    .append('defs')
      .append('linearGradient')
        .attr('id', 'grad1')
        .attr('x1', '0%')
        .attr('x2', '0%')
        .attr('y1', '100%')
        .attr('y2', '0%');
  grad
    .append('stop')
      .attr('offset', '0%')
      .style('stop-color', 'var(--lw-red-light)');
  grad
    .append('stop')
      .attr('offset', '90%')
      .style('stop-color', 'var(--lw-red-dark)');

  //Area Fill
  group
    .append('path')
      .attr('fill', 'url(#grad1)')
      .attr('d', area(data));
};

//5. Scatter Plots
{let svg = d3.select('#scatterPlotContainer')
  .append('svg')
    .attr('width', width + 2*margin)
    .attr('height', height + 2*margin)
    .append('g')
      .attr('transform', 'translate(' + margin + ',' + margin + ')');
    
    //Title
    svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', width/2)
    .text('SAMPLE - Relationship Between Number of Likes and Subscribers')
    .style('font-size', 20);


    //Likes Axis (X)
    const x = d3.scaleLinear()
      .domain([0, 2200000000/10000]) //x 10^5
      .range([margin, width - margin]);
  
    svg.append('g')
      .attr('transform', 'translate(0,' + (height - margin) + ')')
      .call(d3.axisBottom(x));
    
    svg.append("text")
      .attr('text-anchor', 'middle')
      .attr('x', width/2)
      .attr("y", height + 10)
      .text("Number of Likes (x 10^5)");
  
    //Subscribers Axis (Y)
    const y = d3.scaleLinear()
      .domain([3000, 230000000/10000]) //x 10^5
      .range([height - margin, margin]);
  
    svg.append('g')
      .attr('transform', 'translate(' + margin + ', 0)')
      .call(d3.axisLeft(y));
    
    svg.append("text")
      .attr('text-anchor', 'end')
      .attr("x", -margin - 50)
      .attr("y", -margin + 20)
      .attr('transform', 'rotate(-90)')
      .text("Number of Subscribers (x 10^5)");

    //Get the dots
    (async function getDots () {
      let data = await d3.csv('../csv/top_100_youtubers.csv');
      const group = svg.append('g')
        .selectAll('g')
        .data(data)
        .enter()
        .append('circle')
          .attr('cx', function(d) {return x(d.Likes/10000) + 1;})
          .attr('cy', function(d) {return y(d.followers/10000);})
          .attr('r', 2)
          .style('fill', 'var(--lw-red)');
    })();
};

//6. Pie Charts
{
  let svg = d3.select('#pieChartContainer')
  .append('svg')
    .attr('width', width + 6*margin)
    .attr('height', height + 6*margin);
  let svgG = svg.append('g')
      .attr('transform', 'translate(' + (width/2 + 3*margin) + ',' + (height/2 + 3*margin) + ')');

  //Title
  svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('x', width/2 + 3*margin)
    .attr('y', margin)
    .text('SAMPLE - Number of Views Divided by Genre')
    .style('font-size', 30);

  //data and scales
  let data = [4,5,7,10,13];

  let sum = 0;
  data.forEach(val => sum+= val);
  
  let percentages = d3.scaleOrdinal(data.map(val => 100*(val/sum).toFixed(2)));
  let color = d3.scaleOrdinal(['var(--lw-red-lightest)', 'var(--lw-red-light)', 'var(--lw-red)', 'var(--lw-red-dark)', 'var(--lw-red-darkest)']);
  let labels = d3.scaleOrdinal(['Cooking', 'Gaming', 'Entertainment', 'Childrens', 'Sports']);

  //pie
  let pie = d3.pie();
  let radius = width/4;
  let arc = d3.arc().innerRadius(0).outerRadius(radius);

  let arcs = svgG
    .selectAll('g')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc');

  arcs.append('path')
    .attr('fill', (d, i) => color(i))
    .attr('d', arc);
  
  arcs.append('text')
    .text((d,i) => labels(i))
    .attr('transform', d => {
      var pos = labelArc.centroid(d);
      return 'translate(' + pos + ')';
    })
    .style('text-anchor', d => {
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return (midangle < Math.PI ? 'start' : 'end');
    })
    .style('fill', 'var(--lw-red)')
    .style('font-size', 20);
  arcs.append('text')
    .text((d,i) => percentages(i) + ' %')
    .attr('transform', d => {
      var pos = labelArc.centroid(d);
      pos[1] += 25;
      return 'translate(' + pos + ')';
    })
    .style('text-anchor', d => {
      var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
      return (midangle < Math.PI ? 'start' : 'end');
    })
    .style('fill', 'var(--lw-red)');
};

//7. Donut Charts
{
  let svg = d3.select('#donutChartContainer')
    .append('svg')
      .attr('width', width + 6*margin)
      .attr('height', height + 6*margin);
  let svgG = svg.append('g')
      .attr('transform', 'translate(' + (width/2 + 3*margin) + ',' + (height/2 + 3*margin) + ')');
    
    //title
    // svg.append('circle')
    //   .attr('cx', width/2 + 3*margin)
    //   .attr('cy', height/2 + 3*margin)
    //   .attr('r', 101)
    //   .style('fill', 'var(--lw-black)');

    svg.append('text')
      .style('text-anchor', 'middle')
      .style('fill', 'var(--lw-red)')
      .style('font-size', 30)
      .attr('x', width/2 + 3*margin)
      .attr('y', height/2 + 2.5*margin)
      .text('Views');
    svg.append('text')
      .style('text-anchor', 'middle')
      .style('fill', 'var(--lw-red)')
      .style('font-size', 30)
      .attr('x', width/2 + 3*margin)
      .attr('y', height/2 + 3.5*margin)
      .text('by Genre');

    //data & scales
    let data = [4,5,7,10,13];

    let sum = 0;
    data.forEach(val => sum+= val);
    
    let percentages = d3.scaleOrdinal(data.map(val => 100*(val/sum).toFixed(2)));
    let color = d3.scaleOrdinal(['var(--lw-red-lightest)', 'var(--lw-red-light)', 'var(--lw-red)', 'var(--lw-red-dark)', 'var(--lw-red-darkest)']);
    let labels = d3.scaleOrdinal(['Cooking', 'Gaming', 'Entertainment', 'Childrens', 'Sports']);

    //pie
    let pie = d3.pie();
    let radius = Math.min(width, height)/2;
    let arc = d3.arc().innerRadius(100).outerRadius(radius);
    let labelArc = d3.arc().innerRadius(radius).outerRadius(1.3*radius);
  
    let arcs = svgG
      .selectAll('g')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');
  
    arcs.append('path')
      .attr('fill', (d, i) => color(i))
      .attr('d', arc);
    
    arcs.append('text')
      .text((d,i) => labels(i))
      .attr('transform', d => {
        var pos = labelArc.centroid(d);
        return 'translate(' + pos + ')';
      })
      .style('text-anchor', d => {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return (midangle < Math.PI ? 'start' : 'end');
      })
      .style('fill', 'var(--lw-red)')
      .style('font-size', 20);
    arcs.append('text')
      .text((d,i) => percentages(i) + ' %')
      .attr('transform', d => {
        var pos = labelArc.centroid(d);
        pos[1] += 25;
        return 'translate(' + pos + ')';
      })
      .style('text-anchor', d => {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return (midangle < Math.PI ? 'start' : 'end');
      })
      .style('fill', 'var(--lw-red)');
};
