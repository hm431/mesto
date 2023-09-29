export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    console.log(items);
    console.log(this._renderedItems);
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    console.log(this._renderedItems);
    console.log("dfdsfsdf");
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}