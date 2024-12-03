var prevScrollPos = window.pageYOffset;
  var sizeHeader = $("header").height()
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      $("header").css("top", "0")
    } else {
      $("header").css("top", -sizeHeader)
    } prevScrollPos = currentScrollPos
  }

  function openJob(evt, job) {
    var tabJob, optJob;
    tabJob = document.getElementsByClassName("tab_jobs");
    optJob = document.getElementsByClassName('option_jobs')

    for (i = 0; i < tabJob.length; i++) {
      tabJob[i].style.display = "none"
    }
    for (i = 0; i < optJob.length; i++) {
      optJob[i].className = optJob[i].className.replace(" active", "");
    }
    document.getElementById(job).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("first").click();