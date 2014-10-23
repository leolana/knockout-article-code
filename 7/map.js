function Number(number) {
  this.number = number;
}
                
function viewModel() {
  var arr = [];
  for (var i = 0; i < 1000; i++) {
    arr.push(i);
  }
                                  
  // creates an array of Number objects
  this.numbers = ko.observableArray(ko.utils.arrayMap(arr, function(number) {
    return new Number(number)
  }));
}

ko.applyBindings(new viewModel());
