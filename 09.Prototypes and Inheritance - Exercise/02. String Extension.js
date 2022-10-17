(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? `${this}` : str + this;
    };
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? `${this}` : this + str;
    };
    String.prototype.isEmpty = function () {
        return this.length == 0 ? true : false;
    };
    String.prototype.truncate = function(x) {
        if (this.length <= x) {
            return this.toString();
        }
        if (x < 4) {
            return '.'.repeat(x);
        }
        let words = this.split(' ');
        while ((words.join(' ') + '...').length > x) {
            if (words.length > 1) {
                words.pop();
            } else {
                words[0] = words[0].slice(0, x - 3)
            }
        }
        return words.join(' ').trim() + '...';
    };
    String.format = function (str, ...params) {
        params.forEach((w, i) => str = str.replace(`{${i}}`.toString(), w));
        return str;
    };
})()

let str = 'my    string   my       string';
str = str.ensureStart('hello    ');
console.log(str);