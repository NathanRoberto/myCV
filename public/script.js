var prevScrollPos = window.pageYOffset;
var sizeHeader = document.querySelector("header").offsetHeight;

// Mostra ao usuario onde o tamanho da pagina
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        $("header").css("top", "0")
        // document.querySelector("header").style.top = "0";
    } else {
        $("header").css("top", -sizeHeader)
        // document.querySelector("header").style.top = -sizeHeader;
    } prevScrollPos = currentScrollPos

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
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
    // document.getElementById(job).style.display = "block";
    if ($(window).width() <= 768) {
        $('#' + job).slideDown(750); 
    } else {
        $('#' + job).fadeIn(750);
    }
    evt.currentTarget.className += " active";
}

function openTraining(evt, training) {
    var tabTraining, optTraining
    tabTraining = document.getElementsByClassName("tab_training");
    optTraining = document.getElementsByClassName("option_training")

    for (i = 0; i < tabTraining.length; i++) {
        tabTraining[i].style.display = 'none'
    }
    for (i = 0; i < optTraining.length; i++) {
        optTraining[i].className = optTraining[i].className.replace(" active", "");
    }
    // document.getElementById(training).style.display = "block";
    if ($(window).width() <= 768) {
        $('#' + training).slideDown(750);
    } else {
        $('#' + training).fadeIn(750); 
    }
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
        if (index < qtd) {
            $(this).addClass('pintar')
        }
    })
});

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    $("header").css("top", -sizeHeader)
    $(".closeNav, main").click(function () {
        document.getElementById("sidenav").style.width = "0";
    })
}
