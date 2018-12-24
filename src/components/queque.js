class Queque extends Array {
  constructor(){
    super();
  }
  push(...items) {
    super.push(...items);
    console.log('push', this);
    setTimeout(() => {
      this.shift();
    }, 2000);
  }
  shift(...items){
    super.shift(...items);
    console.log('shift', this);
  }
}

export { Queque };