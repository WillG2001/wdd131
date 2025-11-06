const character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.jpg',
    attacked: function () {
        if (this.health > 20) {
            this.health -= 20;
            render();
        }
        else {
            this.health = 0;
            render();
            alert("Snortleblat has died.");
        }

    },
    levelUp: function () {
        this.level += 1;
        render();
    }
}

function render() {
    document.querySelector(".image").src = character.image;
    document.querySelector(".name").innerHTML = character.name;
    document.querySelector("#class").innerHTML = `Class: ${character.class}`;
    document.querySelector("#level").innerHTML = `Level: ${character.level}`;
    document.querySelector("#health").innerHTML = `Health: ${character.health}`;
}

document.querySelector("#attackedButton").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#levelUpButton").addEventListener("click", function () {
    character.levelUp();
});

render();
