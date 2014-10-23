function viewModel() {
  var arr = [];
  for (var i = 0; i < 1000; i++) {
    arr.push(i);
  }

  this.numbers = ko.observableArray();

  for (var i = 0; i < arr.length; i++) {
    this.numbers.push(arr[i]);
  }
}

ko.applyBindings(new viewModel());
