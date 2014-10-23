function viewModel() {
  var self = this;

  self.cat = ko.observable("cat");
  self.pants = ko.observable("pants");
  self.catpants = ko.computed(function() {
    return self.cat() + self.pants();
  });
}
