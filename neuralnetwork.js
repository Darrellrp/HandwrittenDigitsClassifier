import brain from 'brain.js';

class NeuralNetwork {

  constructor(config) {
    this.network = new brain.NeuralNetwork(config);
  }

  /**
   * Train the NeuralNetwork
   * @param  {Array} trainingSet
   * @return {[type]}             [description]
   */
  train(trainingSet) {
    console.log('Training NeuralNetwork...');
    this.network.train(trainingSet, {
      log: details => console.log(details),
    });
  }

  /**
   * Predict the number of the Image
   * @param  {Array} testSet
   * @param  {integet} testAmount
   * @return {[type]}            [description]
   */
  predict(testSet, testAmount, printPredictions) {
    var correctCount = 0;

    for (var i = 0; i < testAmount; i++) {
      console.log(`Prediction: (${i + 1}/${testAmount})`);

      // Predict the number of the Image
      const output = this.network.run(testSet[i].input);

      // Get the true number of the Image
      var trueNumber = testSet[i].output.indexOf(Math.max(...testSet[i].output));

      // Get the predicted number of the Image
      var prediction = output.indexOf(Math.max(...output));

      if(prediction == trueNumber) correctCount++;

      if(printPredictions) {
        console.log(`True label: ${trueNumber}`);
        console.log(`Prediction: ${prediction}`);
        console.log();
      }
    }

    console.log();

    console.log(`Accuracy: ${correctCount / testAmount}`);

  }
}

module.exports = NeuralNetwork;
