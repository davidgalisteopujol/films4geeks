import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Home } from "./views/home";
import { Details } from "./views/details";
import { Search } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Profile } from "./views/Profile";
import {Starring} from "./views/starring";

//create your first component


const Layout = () => {
	const [darkMode, setDarkMode] = useState(false)
	const darkTheme = createTheme({
		palette: {
		  mode: darkMode ? 'dark' : 'light'
		},
	  });

	  
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar check={darkMode} change={()=>setDarkMode(!darkMode)}/>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/details/:id" element={<Details />} />
							<Route path="/starring" element={<Starring />} />
							<Route path="/search" element={<Search />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
		</ThemeProvider>
	);
};

export default injectContext(Layout);
