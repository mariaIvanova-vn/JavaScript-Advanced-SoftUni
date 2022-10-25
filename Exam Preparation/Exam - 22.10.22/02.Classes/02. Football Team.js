class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let names = [];
        for (let element of footballPlayers) {
            let [name, age, playerValue] = element.split('/');
            playerValue = Number(playerValue);
            age=Number(age);

            let currPlayer = this.invitedPlayers.find(v => v.name == name)

            if (currPlayer == undefined) {
                this.invitedPlayers.push({ name, age, playerValue: playerValue });
                names.push(name);
            } else {
                if (playerValue >= currPlayer.playerValue) {
                    currPlayer.playerValue = playerValue;
                }
            }
        }
        return `You successfully invite ${names.join(", ")}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");
        playerOffer=Number(playerOffer);

        let currName = this.invitedPlayers.find(v => v.name == name)
        if (currName == undefined) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if (playerOffer < currName.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${this.currName.playerValue - playerOffer} million more are needed to sign the contract!`);
        }
        currName.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        age = Number(age);
        let currName = this.invitedPlayers.find(p => p.name == name);
        if (currName == undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currName.age < age) {
            if (age - currName.age < 5) {
                return `${name} will sign a contract for ${age - currName.age} years with ${this.clubName} in ${this.country}!`;
            }else 
            {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!"`;
            }             
        }else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let output = ["Players list:"];
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
        .forEach(p => output.push(`Player ${p.name}-${p.playerValue}`));
        
        return output.join('\n');
    }
}

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33 ));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));
