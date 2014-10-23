function viewModel() {
  var self = this;

  self.people = [
    {
			name: "Mike"
	  },
		{
		  name: "Sara"
		},
		{
		  name: "Sam"
		}
	];
			
  self.selectedPerson = ko.observable();
  self.selectPerson = function() {
    // this = the object in people corresponding to the name we clicked on
    self.selectedPerson(this);
  };
}

ko.applyBindings(new viewModel());
