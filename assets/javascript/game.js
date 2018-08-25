

$(document).ready(function () {

    var totalWins = 0;
    var totalLosses = 0;
    var totalScore = 0;
    var targetNumber = 0;
    var crystalNumber = 0;
    var imageValue = 0;
    var cvtImageValue = 0;
    var cvtTargetNumber = 0
    var resetGame = false;
    var imageID = "";
    var crystalBar = {
        crystal_1: 0,
        crystal_2: 0,
        crystal_3: 0,
        crystal_4: 0
    }
    function generateCrystalNumber() {
        crystalNumber = Math.floor(Math.random() * 12) + 1;
        return crystalNumber;
    }

    function generateTargetNumber() {
        targetNumber = Math.floor(Math.random() * 120) + 1;
        return targetNumber;
    }

    generateTargetNumber();
    crystalBar.crystal_1 = generateCrystalNumber();
    crystalBar.crystal_2 = generateCrystalNumber();
    crystalBar.crystal_3 = generateCrystalNumber();
    crystalBar.crystal_4 = generateCrystalNumber();

    $('#targetNumber').text(targetNumber);


    $(".crystalImage").click(function () {

        imageID = this.id;
        if (imageID === "crystal_1") {
            imageValue = crystalBar.crystal_1;
        }
        else if (imageID === "crystal_2") {
            imageValue = crystalBar.crystal_2;
        }
        else if (imageID === "crystal_3") {
            imageValue = crystalBar.crystal_3;
        }
        else if (imageID === "crystal_4") {
            imageValue = crystalBar.crystal_4;
        }


        cvtImageValue = parseInt(imageValue);
        cvtTargetNumber = parseInt(targetNumber);
        totalScore = totalScore + cvtImageValue;
        $('#scoreValue').text(totalScore);

        if (totalScore > cvtTargetNumber) {
            totalLosses++;
            $('#lossCount').text("Losses:  " + totalLosses);
            resetGame = true;
        }
        else if (totalScore === cvtTargetNumber) {
            totalWins++;
            $('#winCount').text("Wins:  " + totalWins);
            resetGame = true;
        }
        else {
            resetGame = false;
        }

        if (resetGame === true) {
            generateTargetNumber();
            $('#targetNumber').text(targetNumber);

            totalScore = 0;
            $('#scoreValue').text(totalScore);

            crystalBar.crystal_1 = generateCrystalNumber();
            crystalBar.crystal_2 = generateCrystalNumber();
            crystalBar.crystal_3 = generateCrystalNumber();
            crystalBar.crystal_4 = generateCrystalNumber();
        }
    });
});
