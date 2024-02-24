import React, { createContext, useState, useEffect } from "react";
// FIXME: needs to be fixed import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { SignOutUser, userStateListener } from "../firebase";

export const AuthContext = createContext({
	currentUser: null,
	setCurrentUser: () => {},
	signOut: () => {},
});

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	// const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = userStateListener((user) => {
			if (user) {
				setCurrentUser(user);
			}
		});
		return unsubscribe;
	}, [setCurrentUser]);

	// As soon as setting the current user to null,
	// the user will be redirected to the home page.
	const signOut = () => {
		SignOutUser();
		setCurrentUser(null);
		// navigate("/");
	};

	const value = React.useMemo(
		() => ({
			currentUser,
			setCurrentUser,
			signOut,
		}),
		[currentUser, setCurrentUser, signOut]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
