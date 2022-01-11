import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Character } from "../component/Character.js";
import { Planet } from "../component/Planet.js";
export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid mt-5">
			<div>
				<h1 className="title">Characters</h1>
				<div className="container-cards">
					{store.character.map((value, index) => {
						return (
							<Character key={index} character={value} addFav={actions.addFav} delFav={actions.delFav} />
						);
					})}
				</div>
			</div>
			<div>
				<h1 className="title">Planets</h1>
				<div className="container-cards">
					{store.planet.map((value, index) => {
						return <Planet key={index} planet={value} addFav={actions.addFav} delFav={actions.delFav} />;
					})}
				</div>
			</div>
		</div>
	);
};