export const defaultXMapper = (d: any, i: any) => i;
export const defaultYMapper = (d: any) => d;
// export const zoom = (svg) => {
//     const extent = [[margin.left, margin.top], [width - margin.right, height - margin.top]];
//
//     svg.call(d3.zoom()
//         .scaleExtent([1, 8])
//         .translateExtent(extent)
//         .extent(extent)
//         .on("zoom", zoomed));
//
//     function zoomed(event) {
//         x.range([margin.left, width - margin.right].map(d => event.transform.applyX(d)));
//         svg.selectAll(".bars rect").attr("x", d => x(d.name)).attr("width", x.bandwidth());
//         svg.selectAll(".x-axis").call(xAxis);
//     }
// }