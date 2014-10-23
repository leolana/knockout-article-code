function viewModel() {
  var arr = [];
  for (var i = 0; i < 1000; i++) {
    arr.push(i);
  }
  this.numbers = ko.observableArray(arr);
}

ko.applyBindings(new viewModel());
