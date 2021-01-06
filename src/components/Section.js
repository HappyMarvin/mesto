export default class Section {
  constructor(data, containerSelector) {
    this._container =document.querySelector(containerSelector);
    this.renderer = data.renderer;
  }

  renderItems(items = this._items) {
    items.reverse().forEach(item => {
      this.renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }

}