function viewModel() {
  this.myValue = ko.observable();
  this.inputValue = ko.observable();
  this.keyUpValue = ko.observable();
  this.keyPressValue = ko.observable();
  this.afterKeyDownValue = ko.observable();
};

ko.applyBindings(new viewModel());
