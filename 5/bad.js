function getPersonFromServer() {
  // Lame fake-o server.
  return {
    firstName: 'John',
    lastName: 'Stewart'
  }
}

function viewModel() {
  var person = getPersonFromServer();

  this.person = {};
  this.person.firstName = ko.observable(person.firstName);
  this.person.lastName = ko.observable(person.lastName);
}

ko.applyBindings(new viewModel());
