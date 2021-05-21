import React, {useState} from 'react';
import {useTranslation, withTranslation, WithTranslation} from 'react-i18next';

const LanguageToggle = () => {
	const [t, i18n] = useTranslation('common');
	const [currentLanguage, setCurrentLanguage] = useState('pl');
	const [alternateLanguage, setAlternateLanguage] = useState('en');
	const [showList, setShowList] = useState(false);

	const languages = [
		{
			lang: 'pl'
		},
		{
			lang: 'en'
		}
	]

	function handleToggle(value = true) {
		setShowList(value);
	}

	function handleLanguage(value: string) {
		i18n.changeLanguage(value);
		setAlternateLanguage(currentLanguage);
		setCurrentLanguage(value);
		setShowList(false);
	}

	return (
		<div className="language">
			<a title="" className="link link-language"
			   onMouseEnter={() => handleToggle()}>
				{currentLanguage} <i className="speednet-icons-caret-down"></i>
			</a>
			<ul className={`languages-list ${showList ? 'show' : ''}`} onMouseLeave={() => handleToggle(false)}>
				{/*<li>*/}
				{/*	<a title="" className="active">*/}
				{/*		{currentLanguage} <i className="speednet-icons-caret-down"></i>*/}
				{/*	</a>*/}
				{/*</li>*/}
				<li onClick={() => handleLanguage(alternateLanguage)}>
					<a rel="alternate" title="">
						{alternateLanguage}
					</a>
				</li>
			</ul>
		</div>
	);
}

export default LanguageToggle;
