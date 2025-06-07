class Vec{
   constructor(x, y){
    this.x = x;
    this.y = y;
   }

   add(vec2){
    return new Vec(this.x + vec2.x, this.y + vec2.y);
   }

    subtract(vec2){
     return new Vec(this.x - vec2.x, this.y - vec2.y);
    }

    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vec(1, 2).add(new Vec(2, 3)));
console.log(new Vec(1, 2).subtract(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

class Group {
    constructor() {
        this.members = [];
    }
    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }
    delete(value) {
        this.members = this.members.filter(member => member !== value);
    }
    static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
            group.add(value);
        }
        return group;
    }
    has(value) {
        return this.members.includes(value);
    }
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.members.length) {
                    return { value: this.members[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }

}

let group = Group.from(["a", "b", "c"]);
console.log(group.has("a")); // true
console.log(group.has("d")); // false

group.add("d");
console.log(group.has("d")); // true

group.delete("a");
console.log(group.has("a")); // false

for (let value of group) {
    console.log(value); // "b", "c", "d"
}
