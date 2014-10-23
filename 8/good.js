function viewModel() {
  var self = this;

  self.people = ko.observableArray([
    {
      name: ko.observable('Derek')
    },
    {
      name: ko.observable('Sara')
    },
    {
      name: ko.observable('Sam')
    },
  ]);

  self.makeDerekMike = function() {
    for (var i = 0; i < self.people().length; i++) {
      if (self.people()[i].name() === 'Derek') {
        self.people()[i].name('Mike');
      }
    }
  };
}

ko.applyBindings(new viewModel());
