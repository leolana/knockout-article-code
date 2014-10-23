function viewModel() {
  var self = this;

  self.firstName = ko.observable("Mike");
  self.lastName = ko.observable("Mellenthin");
  self.fullName = ko.computed(function() {
    return self.firstName() + ' ' + self.lastName();
  });
};

ko.applyBindings(new viewModel());
