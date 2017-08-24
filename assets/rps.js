  

      // Variables for tracking our wins, losses and ties. They begin at 0.
      var wins = 0;
      var losses = 0;
      var draws = 0;

      // When the user presses a key, it will run the following function...
      $("#game").click(function game(event) {

        // Determine which key was pressed
        var user1Pick=$("#br", "#bp", "#bs");
        var user2Pick=$("#br2", "#bp2", "#bs2");


        // If the user presses "r" or "p" or "s", run the game logic.
        if ((user1Pick === "#br") || (user1Pick === "#bp") || (user1Pick === "#bs")) {

          // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate counter.
          if ((user1Pick === "#br") && (user2Pick === "#bs2")) {
            wins++;
          }
          else if ((user1Pick === "#br") && (user2Pick === "#bp2")) {
            losses++;
          }
          else if ((user1Pick === "#bs") && (user2Pick === "#br2")) {
            losses++;
          }
          else if ((user1Pick === "#bs") && (user2Pick === "#bp2")) {
            wins++;
          }
          else if ((user1Pick === "#bp") && (user2Pick === "#br2")) {
            wins++;
          }
          else if ((user1Pick === "#bp") && (user2Pick === "#bs2")) {
            losses++;
          }
          else if ((user1Pick === "#br") && (user2Pick === "#br2")) {
            draws++;
          }
          else if ((user1Pick === "#bp") && (user2Pick === "#bp2")) {
            draws++;
          }
          else if ((user1Pick === "#bs") && (user2Pick === "#bs2"))
            draws++;
          // Here we create the HTML that will be injected into our div and displayed on the page.
          $("#wins").append(wins);
          $("#losses").append(losses);
          $("#draws").append(draws);

          console.log(game);

        }
        game();
      });