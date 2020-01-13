<html>
<head>
    <link rel="stylesheet" href="/assets/style.css">
    <script type="text/javascript" src="script.js"></script>
    <link  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" >
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
</head>
<body>
<div class="container">
    <div class="row">
      <div class="col">
        <div id="clock" class="card card-default">
          <div class="card-body">
            <h2 class="card-title mb-4">Countdown to 2021</h2>
            <div class="clock-section">
              <div id="days" class="value text-warning">00</div>
              <div class="clock-label">DAYS</div>
            </div>
            <div class="clock-section">
              <div id="hours" class="value text-warning">00</div>
              <div class="clock-label">HOURS</div>
            </div>
            <div class="clock-section">
              <div id="minutes" class="value text-warning">00</div>
              <div class="clock-label">MINUTES</div>
            </div>
            <div class="clock-section">
              <div id="seconds" class="value text-warning">00</div>
              <div class="clock-label">SECONDS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>var targetDate = moment('1-1-2021');

    var $days = $('#days')
        $hours = $('#hours')
        $minutes = $('#minutes')
        $second = $('#second')
    
    setInterval(function() {
        //calculate the time remaining
        var now = moment();
        var timeLeft = moment.duration(targetDate.diff(now));
        updateClock(timeLeft);
    }, 10)
    
    
    function updateClock(remainingTime) {
        //display the difference
        var days = Math.floor(remainingTime.asDays()),
            hrs = Math.floor(remainingTime.asHours()) % 24,
            mins = Math.floor(remainingTime.asMinutes()) % 60,
            secs = Math.floor(remainingTime.asSeconds()) % 60;
        $('#days').text(days);
        $('#hours').text(hrs);
        $('#minutes').text(mins);
        $('#seconds').text(secs);
    }
    
    function padNumber(number) {
        var formattedNum = number;
        if (number < 10) {
            formattedNum = "0" + formattedNum;
        }
        return formattedNum;
    }</script>
</body>
</html>

