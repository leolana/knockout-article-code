function viewModel() {
  var arr = [],
    more = [];
  for (var i = 0; i < 500; i++) {
    arr.push(i);
    more.push(500 + i);

  }
              
  this.numbers = ko.observableArray(arr);
  this.numbers.push.apply(this.numbers, more);
}

ko.applyBindings(new viewModel());
