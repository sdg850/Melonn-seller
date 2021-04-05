import React from 'react'

export default function Header() {
	return (
		<>
			<header className='Header_container'>
				<a href='/' className='brand-logo__container'>
					<img className='brand-logo__image' src='https://uploads-ssl.webflow.com/6006f58a9bc1bb84abf7f9b6/60410634f9cd0d8e16a5617e_00%20Logo.png' />					
				</a>
				<nav className='nav_container'>
					<ul>
						<li><a href=''>Sign out</a></li>
						<li><a href=''>Settings</a></li>

					</ul>
				</nav>


			</header>
		</>
	)
}
