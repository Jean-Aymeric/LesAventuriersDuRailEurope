/**
 * Function to obtain an array of all name's nodes contained in the graph.
 * @function getTotalWeight
 * @param {object[]} graph
 * @param {number} graph[].weight
 * @param {string[]} graph[].nodes
 * @returns {string[]}
 */
exports.getAllNodes = function (graph) {
    let allNodes = [];
    for (const edge of graph) {
        if (!allNodes.includes(edge.nodes[0])) {
            allNodes.push(edge.nodes[0]);
        }
        if (!allNodes.includes(edge.nodes[1])) {
            allNodes.push(edge.nodes[1]);
        }
    }
    return allNodes;
}

/**
 * Function to obtain an array of all nodes contained in the graph.
 * @function getTotalWeight
 * @param {object[]} graph
 * @param {number} graph[].weight
 * @param {string[]} graph[].nodes
 * @returns {object[]}
 */
exports.getAllNodesObjects = function (graph) {
    let allNodesObjects = [];
    for (const edge of graph) {
        if (!allNodesObjects.find(node => node.name === edge.nodes[0])) {
            allNodesObjects.push({ 'name': edge.nodes[0] });
        }
        if (!allNodesObjects.find(node => node.name === edge.nodes[1])) {
            allNodesObjects.push({ 'name': edge.nodes[1] });
        }
    }
    return allNodesObjects;
}

/**
 * Function to compare two elements by their weight. Use it in array.sort().
 * @param a
 * @param b
 * @return {number}
 */
exports.compareByWeight = function (a, b) {
    if (a.weight < b.weight) {
        return -1;
    }
    if (a.weight > b.weight) {
        return 1;
    }
    return 0;
}

/**
 *
 * @param Function to find if a edge contains one and only one node from nodesToInclude
 * @param nodesToInclude
 * @return {0|1}
 */
exports.filterByIncludingNodesPath = function (array, nodesToInclude) {
    return array.filter(function (element) {
        return nodesToInclude.includes(element.nodes[0]) ^ nodesToInclude.includes(element.nodes[1]);
    })
}