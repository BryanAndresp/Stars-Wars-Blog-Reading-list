import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
						width="180"
						height="100"
						className="d-inline-block align-top"
						alt=""
					/>
				</span>
			</Link>
			<div className="nav-item dropdown">
				<button
					className="btn btn-dark btn-lg nav-link dropdown-toggle"
					type="button"
					color="primary"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<strong>Favorites</strong> <span className="btn btn-light">{store.favorites.length}</span>
				</button>
				<div className={store.favorites.length > 0 ? "dropdown-menu show" : "d-none"}>
					{store.favorites.map((value, index) => {
						return (
							<li key={index} className="dropdown-item">
								{value}
								<i className="fas fa-trash  float-right" onClick={() => actions.delFav(value)} />
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};