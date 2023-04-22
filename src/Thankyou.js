import bnr from './img/bnr.jpg';
import logo from './img/logo.png';
import './App.css';


function Thankyou() {
	return (
		<div>
			<header>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-12 text-center">
							<img src={logo} className="App-logo" alt="logo" />
						</div>
					</div>
				</div>
			</header>

			<section className="bnrsection">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12 p-0">
							<img src={bnr} alt="" />
						</div>
					</div>
				</div>

				<div className="container">
					<div class="row">
						<div class="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
							<h2>Thankyou...</h2>
							<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
							<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Thankyou;