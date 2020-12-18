export default class Section {
  constructor(data, containerSelector) {
    this._container =document.querySelector(containerSelector);
    this.renderer = data.renderer;
    this._items = data.items;
  }

  renderItems(items = this._items) {
    items.reverse().forEach(item => {
      this.renderer(item.name, item.link);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }

}