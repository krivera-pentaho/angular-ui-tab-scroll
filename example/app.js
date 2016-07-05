var app = angular.module('TabScrollDemo', ['ui.bootstrap', 'ui.tab.scroll']);

/*app.run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/tabs/tabset.html",
    "<div>\n" +
    "  <ul class=\"nav nav-{{tabset.type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "  <div class=\"tab-content\">\n" +
    "    hello!!!<div class=\"tab-pane\"\n" +
    "         ng-repeat=\"tab in tabset.tabs\"\n" +
    "         ng-class=\"{active: tabset.active === tab.index}\"\n" +
    "         uib-tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);*/

app.config(function(scrollableTabsetConfigProvider){
  scrollableTabsetConfigProvider.setShowTooltips (true);
  scrollableTabsetConfigProvider.setTooltipLeftPlacement('bottom');
  scrollableTabsetConfigProvider.setTooltipRightPlacement('left');
});

app.controller('MainCtrl', function() {
  var vm = this;
  vm.tabs = [];
  vm.scrlTabsApi = {};

  vm.reCalcScroll = function() {
    if(vm.scrlTabsApi.doRecalculate) {
      vm.scrlTabsApi.doRecalculate();
    }
  };

  vm.scrollIntoView = function(arg) {
    if(vm.scrlTabsApi.scrollTabIntoView) {
      vm.scrlTabsApi.scrollTabIntoView(arg);
    };
  };

  vm.addTab = function(){
    vm.tabs.push({
      heading: 'New Tab ' + vm.tabs.length,
      content: 'This is the content for a NEW tab ' + vm.tabs.length
    });
  };

  vm.removeTab = function(){
    vm.tabs.splice(vm.tabs.length - 1, 1);
  };

  for(var i=0; i<15; i++) {
    vm.tabs.push({
      heading: 'Tab ' + i,
      content: 'This is the content for tab ' + i
    });
  }

});
