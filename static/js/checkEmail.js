(function() {
    window.addEventListener("load", function () {
          let bouton = document.getElementById("checkEmail");
          bouton.addEventListener('click', (e) => {
            // réinitialise toutes les classes à hidden après chaque action sur le bouton
            document.querySelectorAll("#eligibility-wrapper p").forEach(el => el.classList.add("js-eligibility-hidden"));
            const emailValue = document.getElementById('emailValue').value
            if (emailValue === "") {
              document.getElementById("fillYourEmail").className =
                "fr-mt-3w fr-mb-0 fr-h6";
              return;
            }
            fetch(
              "https://matrix.agent.tchap.gouv.fr/_matrix/identity/api/v1/info?medium=email&address=" +
                emailValue.toLowerCase()
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.hs !== "agent.externe.tchap.gouv.fr") {
                  document
                    .getElementById("eligible")
                    .classList.remove("js-eligibility-hidden");
                } else {
                  document
                    .getElementById("notEligible")
                    .classList.remove("js-eligibility-hidden");
                }
              })
              .catch((err) => {
                console.log(error);
              });
                
          });
      })
  }());