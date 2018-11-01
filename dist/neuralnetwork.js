'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _brain = require('brain.js');

var _brain2 = _interopRequireDefault(_brain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NeuralNetwork = function () {
  function NeuralNetwork(config) {
    _classCallCheck(this, NeuralNetwork);

    this.network = new _brain2.default.NeuralNetwork(config);
  }

  /**
   * Train the NeuralNetwork
   * @param  {Array} trainingSet
   * @return {[type]}             [description]
   */


  _createClass(NeuralNetwork, [{
    key: 'train',
    value: function train(trainingSet) {
      console.log('Training NeuralNetwork...');
      this.network.train(trainingSet, {
        log: function log(details) {
          return console.log(details);
        }
      });
    }

    /**
     * Predict the number of the Image
     * @param  {Array} testSet
     * @param  {integet} testAmount
     * @return {[type]}            [description]
     */

  }, {
    key: 'predict',
    value: function predict(testSet, testAmount, printPredictions) {
      var correctCount = 0;

      for (var i = 0; i < testAmount; i++) {
        console.log('Prediction: (' + (i + 1) + '/' + testAmount + ')');

        // Predict the number of the Image
        var output = this.network.run(testSet[i].input);

        // Get the true number of the Image
        var trueNumber = testSet[i].output.indexOf(Math.max.apply(Math, _toConsumableArray(testSet[i].output)));

        // Get the predicted number of the Image
        var prediction = output.indexOf(Math.max.apply(Math, _toConsumableArray(output)));

        if (prediction == trueNumber) correctCount++;

        if (printPredictions) {
          console.log('True label: ' + trueNumber);
          console.log('Prediction: ' + prediction);
          console.log();
        }
      }

      console.log();

      console.log('Accuracy: ' + correctCount / testAmount);
    }
  }]);

  return NeuralNetwork;
}();

module.exports = NeuralNetwork;