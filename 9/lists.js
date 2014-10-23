function Item(text) {
  this.text = text;
}

ko.components.register('list-builder', {
  viewModel: function(params) {
    var self = this;

    self.list = ko.observableArray([]);

    if (params && params.list) {
      self.list(ko.utils.arrayMap(params.list, function(item) {
        return new Item(item);
      }));
    }

    self.newText = ko.observable();
    self.add = function() {
      self.list.push(new Item(self.newText()));
      self.newText('');
    };
  },
  template:
    '<ul data-bind="foreach: list">' +
      '<li data-bind="text: text"></li>' +
    '</ul>' +
    '<input type="text" data-bind="textInput: newText" />' +
    '<button data-bind="click: add">Add</button>'
});

ko.applyBindings();
