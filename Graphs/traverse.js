const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: [],
    e: ['b'],
    f: ['d']
}


const traverseGraphDepthFirst = (graph, start) => {

    const stack = [start];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }


}

traverseGraphDepthFirst(graph, 'a');


const traverseGraphDepthFirstRecursive = (graph, current) => {
    console.log(current)
    for (let neighbor of graph[current]) {
        traverseGraphDepthFirstRecursive(graph, neighbor);
    }
}

traverseGraphDepthFirstRecursive(graph, 'a');


const traverseGraphBreadthFirst = (graph, current) => {

    const queue = [current];
    while (queue.length > 0) {
        const curr = queue.shift();
        console.log(curr);
        for (let neighbor of graph[curr]) {
            queue.push(neighbor);
        }
    }
}

traverseGraphBreadthFirst(graph, 'a');