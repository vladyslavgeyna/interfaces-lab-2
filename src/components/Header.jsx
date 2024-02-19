import React from 'react'

const Header = () => {
	return (
		<header className='absolute z-50 top-0 left-0 w-full'>
			<div className='my-container'>
				<div className='flex py-[50px] justify-between gap-3 items-start'>
					<div>
						<a href='/'>
							<img src='/logo.png' alt='logo' />
						</a>
					</div>
					<nav className='flex text-xl text-[#c3c3c3] font-extralight items-center gap-[50px]'>
						<p className='hover:underline'>
							<a href='https://learn.ztu.edu.ua/' target='_blank'>
								Solutions
							</a>
						</p>
						<p className='hover:underline'>
							<a
								href='https://stackoverflow.com/'
								target='_blank'>
								Products
							</a>
						</p>
						<p className='hover:underline'>
							<a href='https://www.youtube.com/' target='_blank'>
								Portfolio
							</a>
						</p>
						<p className='hover:underline'>
							<a
								href='https://rozklad.ztu.edu.ua/'
								target='_blank'>
								Contact
							</a>
						</p>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
