var DashboardView = React.createClass({

	getInitialState: function() {
		return {
			filter: {},
			color: "pink",
		};
	},

	setField: function(key, val) {
		var filter = this.state.filter;
		filter[key] = val;
		this.setState({
			filter: filter,
		});
	},

	handleChange: function(e) {
		this.setField(e.target.name, e.target.value);
	},

	renderFilters: function() {
		return (
			<span>
				<input name="name" type="text" value={this.state.filter.name} onChange={this.handleChange} placeholder="name" />

				<select style={{marginLeft: 15}} name="type" value={this.state.filter.type} onChange={this.handleChange}>
					<option value="">By everyone</option>
					<option value="Danny">By Danny</option>
					<option value="Nathan">By Nathan</option>
				</select>
			</span>
		);
	},

	filterLogic: function(array) {
		var nameFilter = this.state.filter.name;
		var filteredArray = [];
		var secondFilteredArray = [];
		if (nameFilter) {
			for (var i = 0; i < array.length; i++) {
				var object = array[i];
				if (object.header !== nameFilter) {
					filteredArray.push(object);
				}
			}
		}
		else {
			filteredArray = array;
		}
		if (this.state.filter.type) {
			for (var i = 0; i < filteredArray.length; i++) {
				var object = filteredArray[i];
				if (object.type === this.state.filter.type) {
					secondFilteredArray.push(object);
				}
			}
		}
		else {
			secondFilteredArray = filteredArray;
		}
		return secondFilteredArray;
	},


	handleColorChange: function(e) {
		var newColor = e.target.value;
		this.setState({
			color: newColor,
		});
	},

	render: function() {
		var stringArray = [
			"One", "Two", "Three"
		];
		var booleanArray = [
			true, false 
		];
		var integerArray = [
			5, 0 
		];
		var doubleArray = [ 
			4.0
		];	
		var charArray = [
			'$'
		];
		console.log (stringArray);
		var linkAndText = [
		{
				src: "http://moziru.com/images/drawn-narwhal-rainbow-12.jpg",
				caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				header: "Cat Woof", 
				type: 'Nathan'
			},
			{
				src: 	"http://www.static.kent.ac.uk/nexus/ems/50.jpg", 
				caption: "Computer science micro-chip",
				header: "CS",
				type: 'Danny',
			},
			{
				src: "http://www.centives.net/S/wp-content/uploads/2012/08/081512_0506_TheOlympics1.jpg",
				caption: "Usain Bolt at his finest...the crown jewel of Jamaica",
				header: "Olympics",
				type: 'Danny',
			}
		];

		linkAndText = this.filterLogic(linkAndText);

		return (
			<div>
			{stringArray} 
			{charArray}	
			{integerArray}
			{doubleArray}
			<div> 
					<input type="text" name="color" onChange={this.handleColorChange} />
					<div style={{border: "1px solid #ccc", width: 40, height: 40, backgroundColor: this.state.color, display: "inline-block", marginLeft: 25, verticalAlign: "middle"}}>
						&nbsp;
					</div>
				</div>

			
			
			
			
			
				{this.renderFilters()}
				{_.map(linkAndText, function(object) {
					return (
						<div>
							<div style={{textAlign: "center"}}>
								<h1 style={{marginLeft: 15}}>{object.header}</h1>
							</div>

							<div style={{textAlign: "center"}}>
								<img
									src={object.src}
									width={400}
									height={400}
									style={{border: '1px solid #ccc'}}
									alt="Sorry, this picture is corrupted"
								/>
							</div>

							<div style={{textAlign: "center", margin: "0 auto", width: 400}}>
								<p>{object.caption}</p>
							</div>
					</div>
	);
				})}
			</div>
		);
	}
});

module.exports = DashboardView;
