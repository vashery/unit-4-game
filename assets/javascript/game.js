$(document).ready(function () {
    //define objects
    var aang = {
      baseattackpower: 11,
      counterattackpower: 14,
      basehealth: 100,
    }
    var katara = {
      baseattackpower: 9,
      counterattackpower: 22,
      basehealth: 120,
    }
    var sokka = {
      baseattackpower: 8,
      counterattackpower: 7,
      basehealth: 140,
    }
    var zuko = {
      baseattackpower: 6,
      counterattackpower: 9,
      basehealth: 180,
    }
    var toph = {
      baseattackpower: 4,
      counterattackpower: 20,
      basehealth: 160,
    }
    //create arrays
    var availableplayers = ["aang", "katara", "sokka", "zuko", "toph"];
    var currentplayer = [];
    var enemyarray = [];
    var battlearray = [];
    var attackareabuilt = false;

    //display initial character selection
    for (var i = 0; i < availableplayers.length; i++) {
      $("#playerselect").append("<div class='card bg-light col-2 text-center border-success playerselect' id='" + availableplayers[i] + "'><div class='card-header p-0 playerselect'>" + availableplayers[i] +"</div><img class='card-img-top' src='assets/images/" + availableplayers[i] + ".jpg' alt='Card image cap'><div class='card-body p-0'><div class='card-title p-0'>HP " + eval(availableplayers[i]).basehealth + "</div></div></div>")
    }

    function reduceFriendHealth(friend1, foe1) {

      eval(friend1).basehealth = eval(friend1).basehealth - eval(foe1).counterattackpower;

    }

    function reduceFoeHealth(foe2, friend2) {

      eval(foe2).basehealth = eval(foe2).basehealth - eval(friend2).baseattackpower;

    }

    function increaseAttack(friend3) {
      eval(friend3).baseattackpower = eval(friend3).baseattackpower + eval(friend3).baseattackpower;

    }

    function buildAttackArea(friend4, foe4) {
      if ($("#friendattack").is('.attackarea') === false && $("#foeattack").is('.attackarea') === false) {
          $("#battletext").append("<p class='attackarea text-light' id='friendattack'>You attacked " + foe4 + " for " + eval(friend4).baseattackpower + " health points! </p>");
          $("#battletext").append("<p class='attackarea text-light' id='foeattack'>" + foe4 + " attacked you back for " + eval(foe4).counterattackpower + " health points! </p>");
        };
    };
    function updateAttackArea(friend5, foe5) {
      $("#friendattack").text("You attacked " + foe5 + " for " + eval(friend5).baseattackpower + " health points!");
      $("#foeattack").text(foe5 + " attacked you back for " + eval(foe5).counterattackpower + " health points!");

    };
    function displayEnemyArea(){
      for (var i = 0; i < enemyarray.length; i++) {
      $("#enemies").append("<div class='card bg-light col-2 text-center border-danger enemyselect' id='" + enemyarray[i] + "'><div class='card-header p-0 playerselect'>" + enemyarray[i] +"</div><img class='card-img-top' src='assets/images/" + enemyarray[i] + ".jpg' alt='Card image cap'><div class='card-body p-0'><h10 class='card-title p-0'>HP " + eval(enemyarray[i]).basehealth +"</h10></div></div>")
      }
    }
      function displayFakeEnemyArea(){
      for (var i = 0; i < enemyarray.length; i++) {
      $("#enemies").append("<div class='card bg-light col-2 text-center border-danger' id='" + enemyarray[i] + "'><div class='card-header p-0 playerselect'>" + enemyarray[i] +"</div><img class='card-img-top' src='assets/images/" + enemyarray[i] + ".jpg' alt='Card image cap'><div class='card-body p-0'><h10 class='card-title p-0'>HP " + eval(enemyarray[i]).basehealth +"</h10></div></div>")
      }

    }
    function updateFighterHP(){
      $("#selectedcharacter").contents().remove()
        $("#selectedcharacter").append("<div class='card bg-light col-2 text-center border-success playerselect'><div class='card-header p-0'>" + currentplayer[0] +"</div><img class='card-img-top' src='assets/images/" + currentplayer[0] + ".jpg' alt='Card image cap'><div class='card-body p-0'><h10 class='card-title p-0'>HP " + eval(currentplayer[0]).basehealth + " </h10></div></div>")
        $("#battle").contents().remove()
        $("#battle").append("<div class='card bg-light col-2 text-center border-danger'><div class='card-header p-0'>" + battlearray[0] +"</div><img class='card-img-top' src='assets/images/" + battlearray[0] + ".jpg' alt='Card image cap'><div class='card-body p-0'><h10 class='card-title p-0'>HP " + eval(battlearray[0]).basehealth + "</h10></div></div>")
    }
    //select character
    $(".playerselect").click(function () {
      characterselection = $(this).attr("id");
      charselindex = availableplayers.indexOf(characterselection);
      availableplayers.splice(charselindex, 1);
      for (var i = 0; i < availableplayers.length; i++) {
          $('#' + availableplayers[i]).addClass("hidden")
          enemyarray.push(availableplayers[i]);
      }
      currentplayer.push(characterselection);
      $("#playerselect").addClass("hidden");
      $("#hideafterstart").addClass("hidden");
      $("#selectedcharacter").append("<div class='card bg-light col-2 text-center border-success playerselect'><div class='card-header p-0'>" + currentplayer[0] +"</div><img class='card-img-top' src='assets/images/" + currentplayer[0] + ".jpg' alt='Card image cap'><div class='card-body p-0'><h10 class='card-title p-0'>HP " + eval(currentplayer[0]).basehealth + " </h10></div></div>")
      displayEnemyArea();
    });
    //select enemy
    $(document).on('click', '.enemyselect', function () {
        enemyselection = $(this).attr("id");
        battlearray.push(enemyselection)
        removefromarray = enemyarray.indexOf(enemyselection);
        enemyarray.splice(removefromarray, 1);
        console.log(enemyarray)
        $("#enemies").contents().remove();
        displayFakeEnemyArea();
        $("#battle").append("<div class='card bg-light col-2 text-center border-danger'><div class='card-header p-0'>" + battlearray[0] +"</div><img class='card-img-top' src='assets/images/" + battlearray[0] + ".jpg' alt='Card image cap'><div class='card-body p-0'><h10 class='card-title p-0'>HP " + eval(battlearray[0]).basehealth + "</h10></div></div>")
        $("#attackbutton").removeClass("hidden")

      });
      //fight
      $(document).on('click', '#attackbutton', function () {
        friendholder = currentplayer[0];
        foeholder = battlearray[0];
        reduceFriendHealth(friendholder, foeholder);
        reduceFoeHealth(foeholder, friendholder);
        updateFighterHP();
        console.log(eval(friendholder).basehealth)
        console.log(eval(foeholder).basehealth)

        if (attackareabuilt === false) {
          buildAttackArea(friendholder, foeholder)
          attackareabuilt = true;
        }
        if (eval(friendholder).basehealth <= 0) {
            $("main").contents().remove()
            $("main").append("<div class='jumbotron container text-center'><h1>YOU LOST!!!</h1><button type='button' class='btn btn-primary btn-lg' id='restartbutton'>Restart</button></div>")
        }
         
            else if (eval(foeholder).basehealth <= 0) {
          $("#attackbutton").addClass("hidden");
          $("#battletext").contents().remove()
          attackareabuilt = false;
          $("#" + foeholder).remove();
          battlearray = [];
          index5 = enemyarray.indexOf(foeholder);
          delete enemyarray[index5]
          for (var j = 0; j < enemyarray.length; j++) {
          $('#' + enemyarray[j]).removeClass("hidden")
          }
          $("#battle").contents().remove()
          $("#enemies").contents().remove();
          displayEnemyArea();
          if (enemyarray.length === 0){
            $("main").contents().remove()
            $("main").append("<div class='jumbotron container text-center'><h1>YOU WIN!!!</h1><button type='button' class='btn btn-primary btn-lg' id='restartbutton'>Restart</button></div>")
          }
        }
        console.log(attackareabuilt)
        updateAttackArea(friendholder, foeholder);
        increaseAttack(friendholder)
      });
      $(document).on('click', '#restartbutton', function () {
        location.reload();

      })


    });
