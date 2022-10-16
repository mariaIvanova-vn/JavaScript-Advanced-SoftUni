class SortedList {
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }
    add(el) {
        this.array.push(el);
        this.array = this.array.sort((a, b) => a - b);
        this.size = this.array.length;
    }
    remove(index) {
        if (index >= 0 && index < this.array.length) {
            this.array.splice(index, 1);
            this.size--;
        }else{
            throw new Error('Invalid index!');
        }
    }
    get(index){
        if (index >= 0 && index < this.array.length) {
            return this.array[index];
        }else{
            throw new Error('Invalid index!');
        }        
    }
}