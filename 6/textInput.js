function viewModel() {
  this.myValue = ko.observable();
};

ko.applyBindings(new viewModel());
