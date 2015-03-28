

//   // MODEL // Locations


// // var locations = [
// //   ["Dollop", 41.877124, -87.629006, 4],
// //   ["Magnificent Mile", 41.894809, -87.624214, 5],
// //   ["Willis Towers", 41.878876, -87.635915, 3],
// //   ["Millennium Park", 41.882702, -87.619394, 2],
// //   ["Art Institute of Chicago", 41.879584, -87.623713, 1]
// // ];

// // Define a "Person" class that tracks its own name and children, and has a method to add a new child
// var Person = function(name, children) {
//     this.name = name;
//     this.children = ko.observableArray(children);

//     this.addChild = function() {
//         this.children.push("New child");
//     }.bind(this);
// }

// // The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
// var viewModel = {
//     people: [
//         new Person("Annabelle", ["Arnie", "Anders", "Apple"]),
//         new Person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
//         new Person("Charles", ["Cayenne", "Cleopatra"])
//         ],
//     showRenderTimes: ko.observable(false)
// };

// ko.applyBindings(viewModel);



// // var Locations = function(name, lat, lng) {
// // 	this.name = name;
// // 	this.lat = lat;
// // 	this.lng = lng;
// // }

// // //VIEW-MODEL
// // $(document).ready(function(){

// //   function viewModel() {
// //   	locations: [
// //   		new Location("Dollop", 41.877124, -87.629006),
// //   		new Location("Magnificent Mile", 41.894809, -87.624214 ),
// //   		new Location("Willis Towers", 41.878876, -87.635915 ),
// //   		new Location("Millennium Park", 41.882702, -87.619394)
// //   	];

// //   ko.applyBindings(new viewModel());
// // };
// // });



// //VIEW-MODEL

// // $(document).ready(function(){

// //   function viewModel() {
// //   	var self = this;
// //   	self.locations = ko.observableArray([
// //   		{name: "Dollop",lat: 41.877124, lng: -87.629006 },
// //   		{name: "Magnificent Mile",lat: 41.894809, lng: -87.624214 },
// //   		{name: "Willis Towers",lat: 41.878876, lng: -87.635915 },
// //   		{name: "Millennium Park",lat: 41.882702, lng: -87.619394 }



// //   		])



// //   };

// //   ko.applyBindings(new viewModel());

// // });



// //google maps
