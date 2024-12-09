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

function openTraining(evt, training) {
    var tabTraing, optTraining
    tabTraing = document.getElementsByClassName("tab_training");
    optTraining = document.getElementsByClassName("option_training")

    for (i = 0; i < tabTraing.length; i++) {
        tabTraing[i].style.display = 'none'
    }
    for (i = 0; i < optTraining.length; i++) {
        optTraining[i].className = optTraining[i].className.replace(" active", "");
    }
    document.getElementById(training).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("first-job").click();
document.getElementById("first-training").click();

for (i = 0; i < 5; i++) {
    $(".nivel-circle").append(`<div class="bola"></div>`)
}

$(".nivel-circle").each(function () {
    const qtd = parseInt($(this).attr('qtd'), 10);

    $(this).children('.bola').each(function (index) {
        if(index < qtd){
            $(this).addClass('pintar')
        }
    })
});
