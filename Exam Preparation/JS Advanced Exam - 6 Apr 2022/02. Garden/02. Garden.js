class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        this.spaceAvailable -= spaceRequired;
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        let plan = this.plants.find(p => p.plantName == plantName);
        if (plan == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plan.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        plan.ripe = true;
        plan.quantity += quantity;
        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plantIndex = this.plants.findIndex(p => p.plantName == plantName);
        if (plantIndex == -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        let plan = this.plants[plantIndex];
        if (!plan.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants.splice(plantIndex, 1);
        this.storage.push({
            plantName,
            quantity: plan.quantity
        });
        this.spaceAvailable += plan.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
       const plantAsString=this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));
       const plantRow = `Plants in the garden: ${plantAsString.join(", ")}`;
       let storageRow = "Plants in storage: The storage is empty.";
       if (this.storage.length > 0) {
           let storageAsString = this.storage.map(p => `${p.plantName} (${p.quantity})`);
           storageRow = `Plants in storage: ${storageAsString.join(", ")}`;
       }
       return [
           `The garden has ${this.spaceAvailable} free space left.`,
           plantRow,
           storageRow,
       ].join('\n');

      // let orderedPlants = this.plants.sort((a, b) => a.plantName - b.plantName).map(p => p.plantName);
      //  let output = [`The garden has ${this.spaceAvailable} free space left.`];
      //  output.push(`Plants in the garden: ${orderedPlants.join(', ')}`);
      //  
      //  if (this.storage.length == 0) {
      //      output.push(`Plants in storage: The storage is empty.`);
      //  } else {
      //      let formatedStorage = this.storage.map(p => `${p.plantName} (${p.quantity})`);
      //      output.push(`Plants in storage: ${formatedStorage.join(', ')}`);
      //  }
      //  return output.join('\n');
    }
}

