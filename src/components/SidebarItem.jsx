import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ navigation, depth = 0 }) => {
    let navigate = useNavigate();
    const hasChildren = navigation["meta-tags"] && navigation["meta-tags"].length > 0;
    const [subMenuOpen, setSubMenuOpen] = useState(depth === 0 && hasChildren);

    const changeRoute = (category, eventId) => {
		navigate(`/events/${category.toLowerCase()}/${eventId}`);
	};

	return (
		<>
            <li className="list-item" 
                onClick={hasChildren ? () => setSubMenuOpen(!subMenuOpen) : () => changeRoute(navigation.name, navigation.id)}>
                <div className="list-item-text">
                    {navigation && navigation.name}
                    {
                        hasChildren && (
                            <i className="fas fa-angle-down"></i>
                        )
                    }
                </div>
            </li>
            {
                Array.isArray(navigation["meta-tags"]) && navigation["meta-tags"].length > 0 && subMenuOpen ? 
                (
                    <ul className="sub-list-item">
                        {
                            navigation["meta-tags"].map((subItem) => (
                                <SidebarItem
                                    key={subItem.id}
                                    depth={depth + 1}
                                    navigation={subItem}
                                />
                            ))
                        }
                    </ul>
                ) : null
            }
        </>
	);
};

export default SidebarItem;
