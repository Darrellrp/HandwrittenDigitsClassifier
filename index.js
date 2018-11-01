import mnist from 'mnist';
import NeuralNetwork from './neuralnetwork';

const trainingAmount = 40000;
const testAmount = 200;
const showPredictions = true;

// Create Training- & Test set
var set = mnist.set(trainingAmount, testAmount);

// Configure the NeuralNetwork
const config = {
  iterations: 100,
  activation: 'sigmoid',
  hiddenLayers: [15, 11]
};

// Create NeuralNetwork
const network = new NeuralNetwork(config);

// Train NeuralNetwork
network.train(set.training);

// Predict the number of the Image
network.predict(set.test, testAmount, showPredictions);
