require(['../lib/knockout-3.2.0', 'viewModel', '../lib/domReady!'], function(ko, viewModel) {
  ko.applyBindings(new viewModel());
});
