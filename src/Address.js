import bnr from './img/bnr.jpg';
import logo from './img/logo.png';
import './App.css';

import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Address() {

	const navigate = useNavigate();
	const location = useLocation();
	const [firstDiv, setFirstDiv] = useState(true);
	const [secondDiv, setSecondDiv] = useState(false);
	const [lineAddressOne, setLineAddressOne] = useState();
	const [lineAddressTwo, setLineAddressTwo] = useState();
	const [lineAddressThree, setLineAddressThree] = useState();
	const next = () => {
		setAddresses([...addresses, {
			id: addresses.length + 1, label: `Address ${addresses.length + 1}`, 'line_one': lineAddressOne
			, 'line_two': lineAddressTwo, 'line_three': lineAddressThree
		}]);
		setSecondDiv(!secondDiv);
		setFirstDiv(!firstDiv);
	}

	const [addresses, setAddresses] = useState([]);
	const [addrs, setAddrs] = useState([]);
	// let location = useLocation();
	// const addrs = [];
	const addAddress = () => {
		setAddresses([...addresses, {
			id: addresses.length + 1, label: `Address ${addresses.length + 1}`, 'line_one': lineAddressOne
			, 'line_two': lineAddressTwo, 'line_three': lineAddressThree
		}]);
		setAddrs([...addrs, {
			'line_one': lineAddressOne
			, 'line_two': lineAddressTwo, 'line_three': lineAddressThree
		}]);
	}

	const removeAddress = (id) => {
		setAddresses(addresses.filter(address => address.id !== id));
	}

	const cancel = () => {
		navigate(`/thank-you`);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setAddrs([...addrs, {
			'line_one': lineAddressOne
			, 'line_two': lineAddressTwo, 'line_three': lineAddressThree
		}]);
		// addrs = [...addrs, lineAddressOne];

		const personalDetail = fetch('http://127.0.0.1:8000/api/personal-details', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'first_name': location.state.first_name,
				'last_name': location.state.last_name,
				'day': location.state.day,
				'year': location.state.year,
				'email': location.state.email,
				'month': location.state.month,
				'phone': location.state.phone,
				'address': addrs
			})
		}).then(function (data) {
			navigate(`/thank-you`);
		});

		// event.preventDefault();
		// console.log("handleSubmit")
		// console.log(addrs);
		// navigate(`/thank-you`);
		return true;

	};

	console.log(location.state)
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
					<div className="row">
						<div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
							<h1>Hi <span>{location.state.first_name}</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
							<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
						</div>
						<div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
							<div className="formpart">
								{firstDiv &&
									<div id="slide03">
										<h3>Do you have a Previous Address?</h3>
										<div className="form-check">
											<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={next} />
											<label className="form-check-label next02" for="flexRadioDefault1">
												Yes
											</label>
										</div>
										<div className="form-check">
											<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={cancel} />
											<label className="form-check-label tothank" for="flexRadioDefault2">
												No
											</label>
										</div>
									</div>
								}
								<form onSubmit={handleSubmit}>
									{secondDiv &&
										<div id="slide04">
											{addresses.map((address, key) => (
												<div key={address.id}>
													<h3>Enter your Previous Address</h3>
													<div className="mb-3 text-start">
														<label className="form-label">Previous Address {address.id}</label>
														<input type="text" className="form-control mb-3" id="" name="address_line_1[]" placeholder="Address line 1" onChange={(event) => setLineAddressOne(event.target.value)} />
														<input type="text" className="form-control mb-3" id="" name="address_line_2[]" placeholder="Address line 2" onChange={(event) => setLineAddressTwo(event.target.value)} />
														<input type="text" className="form-control mb-3" id="" name="address_line_3[]" placeholder="Address line 3" onChange={(event) => setLineAddressThree(event.target.value)} />
													</div>

													<div class="mb-3 text-center" id="submitoradd02">
														{(addresses.length === key + 1) &&
															<>
																<button type="submit" class="btn btn-success tothank">Submit</button>
															</>
														}

														{(addresses.length === key + 1 && key < 2) &&
															<>
																<p><a id="showadrs3" onClick={() => addAddress(address.id)}>Add Another Address</a></p>
															</>
														}

														{(key > 0) &&
															<>
																<p><a id="remove3" onClick={() => removeAddress(address.id)}>Remove Address</a></p>
															</>
														}
													</div>
												</div>
											))}

										</div>
									}

								</form>

							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Address;