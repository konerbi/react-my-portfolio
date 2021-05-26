import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LanguageToggle from './LanguageToggle';
import {useTranslation} from "react-i18next";
import {EnterAnimationService} from '../services/enter-animation.service';

const Navbar = () => {
	const location = useLocation();
	const [t, i18n] = useTranslation('common');
	// const [isSticky, setIsSticky] = useState(false);
	const [isInverted, setIsInverted] = useState(false);
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [animateOnEnter, setAnimateOnEnter] = useState(false);

	const menuItems = [
		{
			title: 'navbar.aboutMe',
			path: '/about-me',
		},
		{
			title: 'navbar.portfolio',
			path: '/portfolio',
		},
		{
			title: 'navbar.contact',
			path: '/contact',
		}
	];

	useEffect(() => {
		// window.addEventListener("scroll", handleScroll, { passive: true });
		EnterAnimationService.startAnimationOnEnter(setAnimateOnEnter);

		return () => {
			EnterAnimationService.clearAnim();
			// window.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);

	function toggleMobileMenu() {
		setIsMobileMenuOpened(!isMobileMenuOpened);
		document.body.style.overflow = !isMobileMenuOpened ? 'hidden' : 'auto';
	}

	function handleMenuItemClick() {
		if (isMobileMenuOpened) {
			toggleMobileMenu();
		}
	}

	return (
		<div className={`navigation ${isInverted ? "inverted" : ""} ${isMobileMenuOpened ? "opened" : ""} ${animateOnEnter ? "open" : ""}`} id="navbar">
			<div className="navbar">
				<Link to="/" className="logo" title="KONER Software Solutions" onClick={() => handleMenuItemClick()}>
					<img src={'src/assets/images/logo.svg'}/>
				</Link>

				<div id="main-menu" className={`main-menu ${isMobileMenuOpened ? "opened" : ""}`}>
					<ul className="menu ">
						{menuItems.map(((value, index) => {
							return <li key={'menu-item-' + index} className="item">
									<NavLink
										to={value.path}
										activeClassName="navbar-element-active"
										title={t(value.title)}
										className="link"
										onClick={() => handleMenuItemClick()}
									>
										{t(value.title)}
									</NavLink>
								</li>
						}))}
						<li className="item">
							<LanguageToggle />
						</li>
					</ul>
					<div id="btn-menu-toggle" className={`btn-menu-toggle ${isMobileMenuOpened ? "opened" : ""}`}
					     onClick={() => toggleMobileMenu()}>
						<span/>
					</div>
				</div>
			</div>
			<div id="overlay" className={`overlay ${isMobileMenuOpened ? "show" : ""}`}/>
		</div>
	);
};

export default Navbar;
