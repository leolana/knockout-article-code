define(['../lib/knockout-3.2.0'], function(ko) {
  return function viewModel() {
    this.message = ko.observable("This is good!");
  }
});
