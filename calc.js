
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Calculator</title>

    <button class="pretty" onmouseover="displayDate()">on hover</button>
    <p id="dateTime"></p>
    <div class="card card-default calculator">
        <div class="card-body">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <input type="text" class="form-control text-right" id="txt-display" disabled value="0" />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <button class="btn btn-primary btn-block" id="btn-clear">C</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-operation="divide">&#247;</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-operation="multiply">&times;</button>
              </div>
            </div>
            
            <div class="row">
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">7</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">8</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">9</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-operation="subtract">-</button>
              </div>
            </div>
            
            <div class="row">
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">4</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">5</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">6</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-operation="add">+</button>
              </div>
            </div>
            
            <div class="row">
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">1</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">2</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">3</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" id="btn-equals">=</button>
              </div>
            </div>
            
            <div class="row">
              <div class="col">
                <button class="btn btn-primary btn-block" id="btn-positive-negative">+/-</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">0</button>
              </div>
              <div class="col">
                <button class="btn btn-primary btn-block" data-type="number">.</button>
              </div>
              <div class="col">
              </div>
            </div>
          </div>
        </div>
      </div>

<script>
function displayDate() {
    document.getElementById('dateTime');
    alert(Date());
};

var operations = {
    ADD: 'add',
    SUBTRACT: 'subtract',
    MULTIPLY: 'multiply',
    DIVIDE: 'divide'
  },
  numbers = {
    TOTAL: 'total',
    CURRENT: 'current'
  };
  
  var total = undefined,
      currentNumber = undefined,
      operation = undefined,
      startNew = true,
      editing = numbers.TOTAL;
  
  var $btnOperation = $('[data-operation]'),
      $btnNumber = $('[data-type="number"]'),
      $btnClear = $('#btn-clear'),
      $btnEquals = $('#btn-equals'),
      $btnPositiveNegative = $('#btn-positive-negative'),
      $txtDisplay = $('#txt-display');
  
      $btnNumber.on('click', function() {
        var newDigit = $(this).text();
        
        if (editing == numbers.TOTAL) {
          if (startNew) {
            total = newDigit;
            startNew = false;
          } else {
            if (newDigit != '.' || (newDigit == '.' && total.indexOf('.') == -1)) {
              total = total + newDigit;
            }
          }
          $txtDisplay.val(total);
        } else { // if editing currentNumber
          if (startNew) {
            currentNumber = newDigit;
            startNew = false;
          } else {
            if (newDigit != '.' || (newDigit == '.' && currentNumber.indexOf('.') == -1)) {
              currentNumber = currentNumber + newDigit;
            }
          }
          $txtDisplay.val(currentNumber);
        }
      });
  
  $btnOperation.on('click', function() {
      if (operation != undefined && currentNumber != undefined) {
          calcTotal();
      }
      operation = $(this).data('operation');
      editing = numbers.CURRENT;
      startNew = true;


  });
  
  $btnClear.on('click', function() {
      startNew = true;
      total = undefined;
      currentNumber = undefined;
      editing = numbers.TOTAL;
      operation = undefined;
      $txtDisplay.val('0');
  });
  
  $btnPositiveNegative.on('click', function() {
      if (editing == numbers.TOTAL) {
        if (total != undefined) {
            total = parseFloat(total) * -1;
            $txtDisplay.val(total);
        }
      }else { //editing numbers.current
        if (currentNumber != undefined) {
            currentNumber = parseFloat(currentNumber) * -1;
            $txtDisplay.val(currentNumber);
        }
      }
  });
  
  $btnEquals.on('click', function() {
      calcTotal();
      startNew = true;
  });
  
  function calcTotal() {
    switch (operation) {
      case operations.ADD:
        total = parseFloat(total) + parseFloat(currentNumber);
        break;
      case operations.SUBTRACT:
        total = parseFloat(total) - parseFloat(currentNumber);
        break;
      case operations.MULTIPLY:
        total = parseFloat(total) * parseFloat(currentNumber);
        break;
      case operations.DIVIDE:
        total = parseFloat(total) / parseFloat(currentNumber);
        break;
    }
    currentNumber = undefined;
    $txtDisplay.val(total);
  }
  

</script>
<style>
body { background-color: #f7fafd; }

.pretty {
    padding:10px 25px;
    background-color:pink;
    border-radius:5px;

}

.calculator {
  width: 400px;
  margin: 20px auto;
  border: none;
  box-shadow: 0 0 10px rgba(96,134,181,.3);
}

#txt-display {
  background-color: #333;
  color: #e2b057;
}

.calculator .card-body .row {
  margin-bottom: 30px;
}

.btn-primary {
  background-color: #6084a4;
  border-color: #6084a4;
}

.btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:not(:disabled):not(.disabled):active {
  background-color: #345777;
  border-color: #345777;
}
</style>
