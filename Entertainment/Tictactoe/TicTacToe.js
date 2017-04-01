var triggerXO = 0;
var triggerEnd = 0;

$(document).ready(function() {


    $(".ttt-button").click(function() {

        var x = "X";
        var o = "O";
        if ($('#item-4').is(':checked')) {
            x = "O";
            o = "X";
        }
        console.log(triggerXO + "XO");
        console.log(triggerEnd + "End");

        if (triggerEnd == 0) {
            if (triggerXO % 2 == 0 && $(this).children().text() == "") {

                $(this).children().text(x);
                triggerXO++;
                FindWinner(x);
                if ($('#item-1').is(':checked') && triggerEnd == 0) {
                    console.log("AI")
                    let button = $(".ttt-button");
                    while (0 != 2) {
                        let x = Math.floor(Math.random() * 9);
                        if ($(button[x]).children().text() == "") {
                            $(button[x]).children().text(o);
                            break;
                        }
                    }
                    triggerXO++;
                    FindWinner(o);
                }
            } else if ($(this).children().text() == "" && $('#item-2').is(':checked')) {
                $(this).children().text(o);
                triggerXO++;
                FindWinner(o);

            }
        }
    });


    function FindWinner(myVal) {
        $(".radio-inline__input").attr('disabled', true);
        var button = $(".ttt-button");
        if (($(button[0]).children().text() == myVal && $(button[1]).children().text() == myVal && $(button[2]).children().text() == myVal) ||
            ($(button[3]).children().text() == myVal && $(button[4]).children().text() == myVal && $(button[5]).children().text() == myVal) ||
            ($(button[6]).children().text() == myVal && $(button[7]).children().text() == myVal && $(button[8]).children().text() == myVal) ||
            ($(button[0]).children().text() == myVal && $(button[3]).children().text() == myVal && $(button[6]).children().text() == myVal) ||
            ($(button[1]).children().text() == myVal && $(button[4]).children().text() == myVal && $(button[7]).children().text() == myVal) ||
            ($(button[2]).children().text() == myVal && $(button[5]).children().text() == myVal && $(button[8]).children().text() == myVal) ||
            ($(button[0]).children().text() == myVal && $(button[4]).children().text() == myVal && $(button[8]).children().text() == myVal) ||
            ($(button[2]).children().text() == myVal && $(button[4]).children().text() == myVal && $(button[6]).children().text() == myVal)) {
            if ((myVal == "X" && $('#item-1').is(':checked') && $('#item-4').is(':checked')) || (myVal == "O" && $('#item-1').is(':checked') && $('#item-3').is(':checked')))
                alert("Sorry. AI won!");
            else if ((myVal == "X" && $('#item-3').is(':checked')) || (myVal == "O" && $('#item-4').is(':checked')))
                alert("Congratulations! Player 1 won!");
            else if ((myVal == "X" && $('#item-2').is(':checked') && $('#item-4').is(':checked')) || (myVal == "O" && $('#item-2').is(':checked') && $('#item-3').is(':checked')))
                alert("Congratulations! Player 2 won!");
            $(button).css({ "opacity": "0.3", "border-color": "#8966E3", "color": "#8966E3" });
            triggerEnd = 1;
        }
        if ($(button[0]).children().text() != "" && $(button[1]).children().text() != "" && $(button[2]).children().text() != "" && $(button[3]).children().text() != "" && $(button[4]).children().text() != "" && $(button[5]).children().text() != "" && $(button[6]).children().text() != "" && $(button[7]).children().text() != "" && $(button[8]).children().text() != "") {
            $(button).css({ "opacity": "0.3", "border-color": "#8966E3", "color": "#8966E3" });
            triggerEnd = 1;
        }
    }

    $(".button-games").click(function() {
        var button = $(".ttt-button");
        $(button).children().text("");
        $(button).css({ "opacity": "1", "border-color": "#fff", "color": "#fff" });
        triggerEnd = 0;
        triggerXO = 2;
        $(".radio-inline__input").attr('disabled', false);
    });

});