function viewModel() {
  this.firstName = ko.observable("Mike");
  this.lastName = ko.observable("Mellenthin");
};

ko.applyBindings(new viewModel());
