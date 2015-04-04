



function AppViewModel() {
    var self = this;
 
    self.locations = ko.observableArray([	
	  {name: "Dollop",lat: 41.877124, lng: -87.629006 },
      {name: "Magnificent Mile",lat: 41.894809, lng: -87.624214 },
      {name: "Willis Towers",lat: 41.878876, lng: -87.635915 },
      {name: "Millennium Park",lat: 41.882702, lng: -87.619394 }
    ]);
 

        //   { name: 'Bert' },
        // { name: 'Charles' },
        // { name: 'Denise' }

    // self.addPerson = function() {
    //     self.locations.push({ name: "New at " + new Date() });
    // };
 
    // self.removePerson = function() {
    //     self.locations.remove(this);
    // }
}
 
ko.applyBindings(new AppViewModel());




