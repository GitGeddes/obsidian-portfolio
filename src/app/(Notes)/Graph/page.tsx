/**
 * Physical graph of all the notes as nodes using `ForceSimulation` from `d3.js`.
 * @module app/(Notes)/Graph
 */

// @ts-nocheck
'use client'

import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import { notes, NoteType } from './notes';
import NoteBreadcrumb from '@/app/components/note/components/NoteBreadcrumb';
import { useRouter } from 'next/navigation';
import { useTabNavigation } from '@/app/hooks/useTabNavigation';

// https://observablehq.com/@d3/disjoint-force-directed-graph/2

const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 800;

const LINK_STRENGTH = 0.4;
const LINK_DISTANCE = 45;
const CHARGE_STRENGTH = -50;
const CENTER_STRENGTH = 0.1;
const GRAVITY_STRENGTH = 0.07;
const BOUNDS_PADDING = 0.03;

const LINK_WIDTH_NORMAL = 2;
const HOVER_LINK_INCREASE = 5;
const HOVER_LINK_DECREASE = 0.5

const NODE_RADIUS_NORMAL = 5;
const NODE_RADIUS_ADDITIONAL = 3;
const HOVER_NODE_RADIUS_INCREASE = 2;
const HOVER_NODE_RADIUS_DECREASE = 4;

const COLOR_TAG = '#44cf6e';
const COLOR_NOTE = '#d75252';
const COLOR_EMPTY = '#e0b152';
const COLOR_HIGHLIGHT = '#8a5cf5';

const TOOLTIP_OFFSET_Y = 30;
const TOOLTIP_OFFSET_X = -30;


type NodeType = d3.SimulationNodeDatum & {
    name: string;
    path?: string;
}

/**
 * builds and displays the graph using a list of notes defined in `notes.ts`.
 * @returns a React element with the `ForceSimulation` graph embedded.
 */
export default function Graph() {
    const router = useRouter();
    const { navigateToTabWithHref } = useTabNavigation();

    const ref = useRef<SVGSVGElement>(null);
    const parentRef = useRef<HTMLDivElement>(null);

    const [nodes] = useState<NodeType[]>([]);
    const [links] = useState<d3.SimulationLinkDatum<NodeType>[]>([]);

    useEffect(() => {
        if (ref.current !== null && ref.current.childNodes.length === 0 && parentRef.current !== null) {
            parseNotes();

            loadAndProcess(ref.current, parentRef.current);
        }

        function loadAndProcess(svgRef: SVGSVGElement, divRef: HTMLDivElement) {
            const svgElement = d3.select(svgRef);
            const divElement = d3.select(divRef);

            // Select SVG element in DOM.
            const svg = svgElement,
                width = +svg.attr("width"),
                height = +svg.attr("height");

            // Zoom
            // function handleZoom(e) {
            //     svg.attr('transform', e.transform);
            // }
            // svg.call(d3.zoom()
            //     .extent([[0, 0], [width, height]])
            //     .scaleExtent([1, 8])
            //     .on("zoom", handleZoom));

            // Build force simulation with given parameters.
            const simulation = d3.forceSimulation(nodes)
                .force("link", d3.forceLink<NodeType, d3.SimulationLinkDatum<NodeType>>(links).id(d => d.name).strength(LINK_STRENGTH).distance(LINK_DISTANCE))
                .force("charge", d3.forceManyBody<NodeType>().strength(n => CHARGE_STRENGTH * getNodeRadius(n.name)))
                .force("center", d3.forceCenter(width / 2, height / 2).strength(CENTER_STRENGTH))
                .force("forceX", d3.forceX(width / 2).strength(GRAVITY_STRENGTH))
                .force("forceY", d3.forceY(height / 2). strength(GRAVITY_STRENGTH));

            // Add links to the SVG.
            const link = svg.append("g")
                .attr("stroke", "#999")
                .attr("stroke-opacity", 0.6)
                .selectAll("line")
                .data(links)
                .enter().append("line")
                    .attr("stroke-width", LINK_WIDTH_NORMAL);

            // Add nodes to the SVG.
            const node = svg.append("g")
                .selectAll("circle")
                .data(nodes)
                .enter().append("circle")
                    .attr("r", node => getNodeRadius(node.name))
                    .attr("fill", node => getNodeColor(node))

            // Change styling on hover.
            node.on("mouseover", (event) => onMouseOver(event))
                .on('mousemove', (event) => onMouseMove(event))
                .on("mouseout", () => onMouseOut())
                .style("cursor", (n) => {
                    if (n.path) return "pointer";
                    else return "auto";
                });

            // Add click behavior
            node.on('click', (event) => onMouseClick(event));

            // Add a drag behavior.
            node.call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

            // Add a tooltip
            // https://d3-graph-gallery.com/graph/interactivity_tooltip.html
            const tooltip = divElement.append("div")
                .style("position", "absolute")
                .style("visibility", "hidden")
                .text("I'm a tooltip!");

            // Set the position attributes of links and nodes each time the simulation ticks.
            simulation.on("tick", () => tick(link, node));

            // Reheat the simulation when drag starts, and fix the subject position.
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            // Update the subject (dragged node) position during drag.
            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
                tooltip
                    .style('top', (event.sourceEvent.pageY + TOOLTIP_OFFSET_Y) + 'px')
                    .style('left', (event.sourceEvent.pageX + TOOLTIP_OFFSET_X) + 'px');
            }

            // Restore the target alpha so the simulation cools after dragging ends.
            // Unfix the subject position now that it’s no longer being dragged.
            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            // Update styles to reflect the current node the mouse is hovering over
            function onMouseOver(event) {
                const name = event.target.__data__.name;
                const neighbors = getNeighbors(name);
                d3.selectAll<d3.BaseType, NodeType>("circle")
                    .transition()
                    .duration(100)
                    .attr("r", (node) => {
                        if (name === node.name || neighbors.includes(node.name)) return HOVER_NODE_RADIUS_INCREASE + getNodeRadius(node.name);
                        else return HOVER_NODE_RADIUS_DECREASE;
                    }).style("fill", (node) => {
                        if (name === node.name) return COLOR_HIGHLIGHT;
                        else return getNodeColor(node);
                    }).style('fill-opacity', (node) => {
                        if (name === node.name || neighbors.includes(node.name)) return 1;
                        else return 0.4;
                    });

                d3.selectAll<d3.BaseType, NodeType>("circle")
                    .filter(c => c.name === name)
                    .append("text")
                    .attr("class", "tooltip");

                link.style("stroke", l => {
                    if (name === l.source.name || name === l.target.name) return COLOR_HIGHLIGHT;
                    else return '#999';
                }).style("stroke-width", l => {
                    if (name === l.source.name || name === l.target.name) return HOVER_LINK_INCREASE;
                    else return HOVER_LINK_DECREASE;
                }).style('stroke-opacity', l => {
                    if (name === l.source.name || name === l.target.name) return 1;
                    else return 0.4;
                });

                tooltip.style('visibility', 'visible');
            }

            function onMouseMove(event) {
                // Update the tooltip's location
                tooltip
                    .style('top', (event.clientY + TOOLTIP_OFFSET_Y) + 'px')
                    .style('left', (event.clientX + TOOLTIP_OFFSET_X) + 'px')
                    .text(event.target.__data__.name);
            }

            // Revert all styling to defaults
            function onMouseOut() {
                d3.selectAll("circle")
                    .transition()
                    .duration(1)
                    .attr("r", (node) => getNodeRadius(node.name))
                    .style("fill", (node) => getNodeColor(node))
                    .style('fill-opacity', 1);

                link.style("stroke", "#999")
                    .style("stroke-width", LINK_WIDTH_NORMAL)
                    .style('stroke-opacity', 0.6);

                tooltip.style('visibility', 'hidden');
            }
        }
    }, [links, nodes, router]);

    function parseNotes() {
        function parseNote(key: string, value: NoteType) {
            nodes.push({
                name: key,
                path: value.link
            });
            value.links.forEach(link => {
                links.push({ source: key, target: link });
            });
            value.tags.forEach(tag => {
                links.push({ source: key, target: tag });
            });
        }

        Object.entries(notes).forEach(([key, value]) => {
            parseNote(key, value);
        });
    }

    // Modify node to stay within bounds
    function checkBounds(n: NodeType) {
        if (!n.x || !n.y) return;
        if (n.x < DEFAULT_WIDTH * BOUNDS_PADDING) n.x = DEFAULT_WIDTH * BOUNDS_PADDING;
        if (n.x > DEFAULT_WIDTH * (1 - BOUNDS_PADDING)) n.x = DEFAULT_WIDTH * (1 - BOUNDS_PADDING);
        if (n.y < DEFAULT_HEIGHT * BOUNDS_PADDING) n.y = DEFAULT_HEIGHT * BOUNDS_PADDING;
        if (n.y > DEFAULT_HEIGHT * (1 - BOUNDS_PADDING)) n.y = DEFAULT_HEIGHT * (1 - BOUNDS_PADDING);
    }

    function tick(
        link: d3.Selection<SVGLineElement, d3.SimulationLinkDatum<NodeType>, SVGGElement, unknown>,
        node: d3.Selection<SVGCircleElement, NodeType, SVGGElement, unknown>
    ) {
        link.attr("x1", (l) => { 
                checkBounds(l.source);
                return l.source.x;
            })
            .attr("y1", (n) => n.source.y)
            .attr("x2", (n) => { 
                checkBounds(n.target);
                return n.target.x;
            })
            .attr("y2", (n) => n.target.y);

        node.attr("transform", (n) => {
            checkBounds(n);
            return "translate(" + n.x + ", " + n.y + ")";
        });
    }

    function getNeighbors(name: string): string[] {
        const neighbors: string[] = [];
        links.forEach(link => {
            if (link.source.name === name) {
                neighbors.push(link.target.name);
            } else if (link.target.name === name) {
                neighbors.push(link.source.name);
            }
        });
        return neighbors;
    }

    function getNodeRadius(name: string): number {
        const neighbors = getNeighbors(name);
        return NODE_RADIUS_NORMAL + (NODE_RADIUS_ADDITIONAL * (neighbors.length - 1));
    }

    function getNodeColor(node: NodeType): string {
        if (node.name.charAt(0) === '#') return COLOR_TAG;
        else if (node.path !== undefined) return COLOR_NOTE;
        else return COLOR_EMPTY;
    }

    function onMouseClick(event) {
        // Has a valid note
        if (event.target.__data__.path !== undefined) {
            navigateToTabWithHref(event.target.__data__.path);
        }
    }

    return (
        <div ref={parentRef} className='column fullHeight' style={{ alignItems: 'center' }}>
            <NoteBreadcrumb path='Graph view'/>
            <svg
                className='allBorder'
                ref={ref}
                width={DEFAULT_WIDTH}
                height={DEFAULT_HEIGHT}
                style={{
                    boxShadow: '0px 0px 10px #363636'
                }}
            />
        </div>
    );
}