function viewModel() {
  this.cat = ko.observable("cat");
  this.pants = ko.observable("pants");
  this.catpants = ko.computed(function() {
    return this.cat() + this.pants();
  }, this);
}
