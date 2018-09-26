interface Array<T> {
  includes(element: T): boolean;
}

Array.prototype.includes = function (element) {
  return this.indexOf(element) !== -1;
}
