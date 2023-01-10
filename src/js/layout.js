import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./views/home";
import { Details } from "./views/details";
import { ComingSoon } from "./views/detailsComingSoon";
import { SearchInfo } from "./views/detailsSearchmovies";
import { Search } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Profile  from "./views/Profile";
import {Starring} from "./views/starring";
import { Paper } from "@mui/material";


//create your first component




const Layout = () => {
	const [darkMode, setDarkMode] = useState(true)
	const darkTheme = createTheme({
		palette: {
		  mode: darkMode ? 'dark' : 'light'
		},
	});
	 

		  // Add your custom colors if any

	const basename = process.env.BASENAME || "";

	return (
	//	<ThemeProvider theme={darkTheme}>
	//		<CssBaseline />
	//		<Paper>
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/details/:index" element={<Details />} />
							<Route path="/coming_soon/:index" element={<ComingSoon />} />
							<Route path="/search_info/:index" element={<SearchInfo />} />
							<Route path="/starring" element={<Starring />} />
							<Route path="/search" element={<Search />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	//	</Paper>
	//	</ThemeProvider>
	);
};

export default injectContext(Layout);
