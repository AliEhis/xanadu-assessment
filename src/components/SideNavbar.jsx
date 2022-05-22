import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNavigations } from "../redux/apiCalls";
import SidebarItem from "./SidebarItem";

const SideNavbar = () => {
	const dispatch = useDispatch();
	const { navigations } = useSelector((state) => state.navigations);
	
	let depth = 0;

	useEffect(() => {
		const retrieveNavigation = async () => {
			try {
				getNavigations(dispatch);
			} catch (err) {
				console.log(err);
			}
		};
		navigations.length === 0 && retrieveNavigation();
	}, [dispatch, navigations]);

	return (
		<div className="sidenavbar container">
			<div className="wrapper">
				<ul className="list-group">
					{navigations && navigations.length > 0 &&
						navigations.map((navigation) => (
							<SidebarItem key={navigation.id} depth={depth} navigation={navigation} />
						))
					}
				</ul>
			</div>
		</div>
	);
};

export default SideNavbar;
