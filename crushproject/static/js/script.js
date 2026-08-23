function startJourney() {

    document.getElementById("story")
        .classList.remove("hidden");

    document.getElementById("story")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function nextStory() {

    document.getElementById("story2")
        .classList.remove("hidden");

    document.getElementById("story2")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function showSurprise() {

    document.getElementById("surprise")
        .classList.remove("hidden");

    document.getElementById("surprise")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function selectReaction(reaction) {

    const messageBox =
        document.getElementById("message");

    messageBox.value =
        reaction + "\n\n";

    messageBox.focus();
}