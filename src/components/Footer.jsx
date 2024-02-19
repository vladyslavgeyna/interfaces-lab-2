import React, { useEffect } from 'react'

const Footer = () => {
	let currentIndex = 0
	useEffect(() => {
		const prev = document.getElementById('prev')
		const next = document.getElementById('next')
		const texts = document.querySelectorAll('.text p')
		prev.addEventListener('click', () => {
			currentIndex = currentIndex > 0 ? currentIndex - 1 : 0

			texts.forEach(text => {
				text.classList.remove('active')
			})
			texts[currentIndex].classList.add('active')
		})
		next.addEventListener('click', () => {
			currentIndex = currentIndex < 2 ? currentIndex + 1 : 2

			texts.forEach(text => {
				text.classList.remove('active')
			})
			texts[currentIndex].classList.add('active')
		})
	}, [])
	return (
		<div className='mt-8 py-8 text-white bg-[#303030]'>
			<div className='my-container'>
				<div className='flex  gap-16'>
					<div className='footer-item'>
						<h3>About us</h3>
						<div className='flex flex-col gap-3'>
							<a href='/'>About us</a>
							<a href='/'>Why us</a>
							<a href='/'>Customer Stories</a>
							<a href='/'>Press Resources</a>
							<a href='/'>Press Releases</a>
							<a href='/'>Contact us</a>
						</div>
					</div>
					<div className='footer-item'>
						<h3>About us</h3>
						<div className='flex flex-col gap-3'>
							<a href='/'>About us</a>
							<a href='/'>Why us</a>
							<a href='/'>Customer Stories</a>
							<a href='/'>Press Resources</a>
							<a href='/'>Press Releases</a>
							<a href='/'>Contact us</a>
						</div>
					</div>
					<div className='footer-item'>
						<div className='flex items-center gap-16'>
							<h3>Testimoanials</h3>
							<div className='flex items-center gap-2'>
								<img id='prev' src='/fal.png' alt='' />
								<img id='next' src='/far.png' alt='' />
							</div>
						</div>
						<div className='max-w-[400px] text'>
							<p className='active'>
								1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum
								has been the industr standard dummy text ever
								since the 1500s, when an unknown printer took a
							</p>
							<p>
								2Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Minus omnis quidem at error
								facere quaerat nihil, quia, possimus enim saepe
								aspernatur nam rerum.
							</p>
							<p>
								3Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ea consequatur, cumque
								commodi, natus veniam blanditiis quae dolorem
								magnam temporibus omnis reiciendis ullam.
								Pariatur!
							</p>
						</div>
						<div className='text-next'>
							Lorem Ipsum is simply
							<br />
							Owner, Lorem Ipsum
						</div>
					</div>
					<div className='footer-logo'>
						<a href='/'>
							<img src='/logo.png' alt='' />
						</a>
						<p>
							© <a href='/'>cssauthor.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
