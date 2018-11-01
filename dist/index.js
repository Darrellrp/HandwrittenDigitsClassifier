'use strict';

var _mnist = require('mnist');

var _mnist2 = _interopRequireDefault(_mnist);

var _neuralnetwork = require('./neuralnetwork');

var _neuralnetwork2 = _interopRequireDefault(_neuralnetwork);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trainingAmount = 40000;
var testAmount = 200;
var showPredictions = true;

// Create Training- & Test set
var set = _mnist2.default.set(trainingAmount, testAmount);

// Configure the NeuralNetwork
var config = {
  iterations: 100,
  activation: 'sigmoid',
  hiddenLayers: [15, 11]
};

// Create NeuralNetwork
var network = new _neuralnetwork2.default(config);

// Train NeuralNetwork
network.train(set.training);

// Predict the number of the Image
network.predict(set.test, testAmount, showPredictions);