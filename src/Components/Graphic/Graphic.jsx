import { React, useEffect } from "react";
import * as d3 from "d3";
const Graphic = ({series}) => {
    const width = 960;
    const height = 480;
    
    useEffect(() => {
        let svg = d3.select('#grafica')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
        
        let plotMargins = {
            top: 30,
            bottom: 30,
            left: 150,
            right: 30
        };
        
        let plotGroup = svg.append('g')
        .classed('plot', true)
        .attr('transform', `translate(${plotMargins.left},${plotMargins.top})`);
        
        let plotWidth = width - plotMargins.left - plotMargins.right;
        let plotHeight = height - plotMargins.top - plotMargins.bottom;
        let xScale = d3.scaleLinear()
        .range([0, plotWidth]);
        
        let xAxis = d3.axisBottom(xScale);
        let xAxisGroup = plotGroup.append('g')
        .classed('x', true)
        .classed('axis', true)
        .attr('transform', `translate(${0},${plotHeight})`)
        .call(xAxis);
        
        
        let yScale = d3.scaleLinear()
        .range([plotHeight, 0]);
        let yAxis = d3.axisLeft(yScale);
        let yAxisGroup = plotGroup.append('g')
        .classed('y', true)
        .classed('axis', true)
        .call(yAxis);
        
        
        let pointsGroup = plotGroup.append('g')
        .classed('points', true);
        
        
        let prepared = series.map(d => {
            return {
                episodes: d.episodes,
                seasons: d.seasons,
                name: d.name
            }
        }); 
        
        
        
        xScale.domain(d3.extent(prepared, d => d.episodes))
        .nice();
        xAxisGroup.call(xAxis);
        
        yScale.domain(d3.extent(prepared, d => d.seasons))
        .nice();
        yAxisGroup.call(yAxis);
        
        
        var dataBound = pointsGroup.selectAll('.post')
        .data(prepared);
        
        // delete extra points
        dataBound
        .exit()
        .remove();
        
        // add new points
        var enterSelection = dataBound
        .enter()
        .append('g')
        .classed('post', true);
        
        // update all existing points
        enterSelection.merge(dataBound)
        .attr('transform', (d, i) => `translate(${xScale(d.episodes)},${yScale(d.seasons)})`);
        
        enterSelection.append('circle')
        .attr('r', 5)
        .style('fill', 'yellow')
        ;
        enterSelection.append("text")
        .attr("dx", function(d){return +20})
        .text(function(d){return d.name}) 
        .attr("font-size", "10px")
        
        
    }, [series]);
    
    
    
    
    
    return (
        
        <div id="grafica">
        
        </div>
        
        );
    };
    
    export default Graphic;
    