var React = require('react');
var Header = require('./comp/Header.jsx');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var hashHistory = require('react-router').hashHistory
var DashboardView = require('./comp/DashboardView.jsx');
var NathanView = require('./comp/NathanView.jsx');
var UserView = require('./comp/UserView.jsx');
var AccountView = require('./comp/AccountView.jsx');
var ClockView = require('./comp/ClockView.jsx');
var PaletteView = require('./comp/PaletteView.jsx');
var App = React.createClass({
	render: function() {
		var style = {
			padding: 50
		};
		return (
			<div >
				<div className="row" style={{width: '100%'}}>
					<div>
						<div className="col-md-1">
							<Header />
						</div>
						<div className="col-md-1">
								<li style={{display: 'inline'}}>
									<Link to="/dashboard">
										<h3>
											<i className="fa fa-newspaper-o"></i>
										</h3>
									</Link>
								</li>
						</div>
						<div className="col-md-1">
							<li style={{display: 'inline'}}>
								<Link to="/nathan">
									<h3>
										<i className="fa fa-user-secret"></i>
									</h3>
								</Link>
							</li>
						</div>
					</div>
				</div>
				<div className="row" style={style}>
					{this.props.children}
				</div>
			</div>
		);
	}
});

ReactDOM.render(
<Router history={hashHistory}>
	<Route path="/" component={App}>
		<Route path="dashboard" component={DashboardView} />
		<Route path="nathan" component={NathanView} />
	</Route>
</Router>
,document.getElementById('app'));
