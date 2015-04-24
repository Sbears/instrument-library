var Instrument = function(type, description, num) {
	this.type = type;
	this.description = description;
	this.num = num;

//this.render
}

Instrument.prototype.render = function() {
	if(!this.el) {
		this.el = $("#instrument-tpl")
			.clone()
			.attr("id", null);
	}

	this.el.find(".instrument-name").text(this.type);
	this.el.find(".instrument-description").text(this.description);
	this.el.find(".instrument-num").text(this.num);

	return this.el

	}

var InstrumentCollection = function(name) {
	this.name = name;
	this.instruments = [];
	}

InstrumentCollection.prototype.addInstrument =  function(instrument){
	this.instruments.push(instrument)
	}

InstrumentCollection.prototype.render = function() {
	if(!this.el) {
		this.el = $("#instrument-collection-tpl")
			.clone()
			.attr("id", null);
	}

	var instrumentElements = this.instruments.map(function(instrument) {
		return instrument.render(instrumentElements);
	});

	this.el.find(".collection-name").text(this.name);
	this.el.find(".instrument-list").append()
}


var oud = new Instrument("Oud", "Moody Lute", 1);
var scottsCollection = new InstrumentCollection("Scott's Instruments");

scottsCollection.addInstrument(oud);

$("body").append(scottsCollection.render());

console.log(oud.render());

$("body").append(oud.render());




