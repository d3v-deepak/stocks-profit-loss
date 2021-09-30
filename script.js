var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector(".output");

function calculateProfitLoss(inital, quantiy, current) {
  if (inital > current) {
    //loss
    var loss = (inital - current) * quantiy;
    var lossPercentage = (loss / inital) * 100;
    showOutput(
      `Loss has occured of Rs${loss} and loss % is ${Number.parseFloat(
        lossPercentage
      ).toFixed(2)}`
    );
  } else if (current > inital) {
    var profit = (current - inital) * quantiy;
    var profitPercentage = (profit / inital) * 100;
    showOutput(
      `Profit has occured of Rs${profit} and loss % is ${Number.parseFloat(
        profitPercentage
      ).toFixed(2)}`
    );
  } else {
    showOutput(`You are on no profit no loss..`);
  }
}

function checkHandler() {
  if (initialPrice.value && stocksQuantity.value && currentPrice.value) {
    calculateProfitLoss(
      Number(initialPrice.value),
      Number(stocksQuantity.value),
      Number(currentPrice.value)
    );
  } else output.innerText = "please enter all values";
}
function showOutput(outputvalue) {
  output.innerText = outputvalue.toString();
}
checkBtn.addEventListener("click", checkHandler);
