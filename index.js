const _ = require('lodash');

const taskA = {
  type: 'a',
  cost: 40,
};

const taskJ = {
  type: 'j',
  cost: 120,
};

const taskL = {
  type: 'l',
  cost: 300,
};

const taskH = {
  type: 'h',
  cost: 390,
};

const seats = {
  a: 1,
  j: 1,
  l: 1,
  h: 1,
};

function run(strategy, queue) {
  var cost = strategy(queue);
  return cost;
}

function generateQueue(length) {
  _.fill(Array(length), function () {
    return taskA;
  });
};

const simpleQueue = generateQueue(10);

const simpleStrategy = function (queue) {
  return queue.reduce(function(task, cost) {
    if (task.type === 'a') {
      Object.keys(seats).forEach();
    }
  }, 0);
};

console.log(run(simpleStrategy, simpleQueue));
