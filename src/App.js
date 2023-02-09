const CarManager = require('./CarManager');

const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Validator = require('./utils/Validator');

class App {
  #carManager;

  play() {
    this.inputCarNames();
  }

  inputCarNames() {
    InputView.readCarNames((carNamesInput) => {
      try {
        Validator.validateNameInput(carNamesInput);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
        this.inputCarNames();
      }
    });
  }
    });
  }

  startRace(tryCounts) {
    for (let i = 0; i < tryCounts; i++) {
      this.#carManager.progress();

      this.printRaceProgress(this.#carManager.getCars());
    }
    this.printWinners(this.#carManager.getWinners());
  }

  printRaceProgress(cars) {
    OutputView.printRaceProgress(cars);
  }

  printWinners(winners) {
    OutputView.printWinners(winners);
  }
}

new App().play();

module.exports = App;
