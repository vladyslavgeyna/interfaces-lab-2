import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Slider from './components/slider/Slider.jsx'
import Tabs from './components/tabs/Tabs.jsx'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<div className='h-[490px] min-w-full'>
					<div className='h-full bg-cover w-full bg-no-repeat bg-center bg-[url("/background.png")]'>
						<Slider />
					</div>
				</div>
				<div className='my-container'>
					<div className='mt-[100px]'>
						<Tabs />
					</div>
				</div>
				<div className='my-container'>
					<div className='flex mt-8 items-center gap-5 justify-between'>
						<div>
							<img src='/why.png' alt='' />
						</div>
						<div>
							<h3 className='text-3xl font-light opacity-[0.8] mb-5'>
								Why choose us ?
							</h3>
							<div className='flex why flex-col gap-4'>
								<div className='flex items-center gap-3'>
									<img src='/mark.png' alt='' />
									<p>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting
									</p>
								</div>
								<div className='flex items-center gap-3'>
									<img src='/mark.png' alt='' />
									<p>
										Lorem Ipsum has been the industry's
										standard dummy text ever
									</p>
								</div>
								<div className='flex items-center gap-3'>
									<img src='/mark.png' alt='' />
									<p>
										When an unknown printer took a galley of
										type and scrambled
									</p>
								</div>
								<div className='flex items-center gap-3'>
									<img src='/mark.png' alt='' />
									<p>
										It has survived not only five centuries,
										but also the leap into electronic
									</p>
								</div>
								<div className='flex items-center gap-3'>
									<img src='/mark.png' alt='' />
									<p>
										It was popularised in the 1960s with the
										release of Letraset sheets containing
									</p>
								</div>
								<div className='flex items-center gap-3'>
									<img src='/mark.png' alt='' />
									<p>
										More recently with desktop publishing
										software like Aldus PageMaker
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='my-container'>
					<div className='flex mt-16 items-center justify-between gap-16'>
						<div className='bg-[#f3723a] rounded-md px-4 py-4 flex-[0_1_50%]'>
							<h3 className='text-white text-3xl font-light'>
								Member login
							</h3>
							<form
								className='mt-6 flex items-center gap-3'
								action='#'>
								<input
									className='bg-[#e7e7e7] text-black h-7 px-2 py-1'
									type='text'
									placeholder='User name'
								/>
								<input
									className='bg-[#e7e7e7] text-black h-7 px-2 py-1'
									type='password'
									placeholder='Password'
								/>
								<button
									className='bg-[#464646] text-white h-7 px-2 py-1 '
									type='submit'>
									Log me in.
								</button>
							</form>
						</div>
						<div className='bg-[#00d5ef] rounded-md px-4 py-4 flex-[0_1_50%]'>
							<h3 className='text-white text-3xl font-light'>
								Subscribe to our weekly newsletter
							</h3>
							<form
								className='mt-6 flex items-center gap-10'
								action='#'>
								<input
									className='bg-[#e7e7e7] text-black h-7 px-2 flex-auto py-1'
									type='text'
									placeholder='email address'
								/>
								<button
									className='bg-[#009bad] text-white h-7 px-4 py-1 '
									type='submit'>
									Subscribe.
								</button>
							</form>
						</div>{' '}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default App
