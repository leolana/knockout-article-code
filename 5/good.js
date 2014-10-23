function getPersonFromServer() {
  // Server? What server?
  return {
    firstName: 'John',
    lastName: 'Stewart'
  }
}

function viewModel() {
  var person = getPersonFromServer();
  this.person = ko.mapping.fromJS(person);
}

ko.applyBindings(new viewModel());
