import React, {useRef,useEffect} from "react"
import * as d3 from "d3"
function BarChart(props){
  const {data} = props
  
      useEffect(()=>{
        const container = d3.select("svg").data(data).attr("viewBox", [0, 0, 700, 350]).attr('text',"Max tempretaure")
       .classed('container',true)
       container.append("text")
        .attr("x", (350))             
        .attr("y", 20)
        .attr("text-anchor", "middle")  
        .style("font-size", "16px")  
        .text("Max tempretaure vs Date")
        .attr('fill',"#fff")
       const rects=  container.selectAll('rect').data(data)
        rects.exit().remove()
       
       const xScale = d3.scaleBand().domain(data.map(dataPoint=>dataPoint.date)).rangeRound([0,700]).padding(0.5)
       const yScale = d3.scaleLinear().domain([0,50]).range([250,0])
       rects.attr('width',xScale.bandwidth())
                    .attr('height',(data)=>(250-yScale(data.maxtempC)))
                    .attr("transform", "translate(20, 0)")
                    .attr('x',(data)=>(xScale(data.date)))
                    .attr('y',(data)=>(yScale(data.maxtempC)))

                  rects.enter().append('rect')
                  .attr('width',xScale.bandwidth())
                  .attr('height',(data)=>(180-yScale(data.maxtempC)))
                  .attr("transform", "translate(20, 0)")
                  .attr('fill',"#0b3471")
                  .attr('x',(data)=>(xScale(data.date)))
                  .attr('y',(data)=>(yScale(data.maxtempC)))

                    const xAxis= d3.axisBottom()
                                  .scale(xScale)
                                  var y_axis = d3.axisLeft()
                                  .scale(yScale);
                          container.append("g")
                          .attr("transform", "translate(30, 0)")
                          .call(y_axis)
                          .style("font-size", 16)
                         
                          
                          var xAxisTranslate = 250;

                          container.append("g")
                                  .attr("transform", "translate(30, " + xAxisTranslate  +")")
                                  .call(xAxis).selectAll("text")
                                  .attr("transform", "translate(-10,10)rotate(-45)")
                                  .style("text-anchor", "end")
                                  .style("font-size", 20)
                                  .style("fill", "#fff")
                    
                    },[data])
      
  return(
      <React.Fragment>
         
         <svg className="bar-chart">
         
         </svg>
      
      </React.Fragment>
  )
}
export default BarChart