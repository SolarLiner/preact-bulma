// tslint:disable-next-line:interface-name
interface Array<T> {
  includes(element: T): boolean;
}

Array.prototype.includes = function(element) {
  return this.indexOf(element) !== -1;
};
