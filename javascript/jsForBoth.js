    $(document).ready(function() {
      $("#content").load("home.html");
    });

    function clicky(evt, poopa, pee) {
      var bazonga = document.getElementById(poopa);
      var h1Color = document.getElementById(pee);
      for (i = 0; i < 1; i++) {
        if (bazonga.classList.contains('hidden')) {
          bazonga.classList.remove("hidden");
          h1Color.classList.add('darkerH1');
        } else {
          bazonga.classList.add("hidden");
          h1Color.classList.remove('darkerH1');
        }
      }
    }
//this is supposed to open the little tabs in the canidates page lmao im working on it this shit does not work rn
    function peepee(evt, coochie, idk) {
      var id = document.getElementById(idk);
      $("#content").load(coochie);
      if (idk !== "1") {
   //     id.classList.remove("hidden");
      }
    }
    



