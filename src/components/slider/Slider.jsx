import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './Slider.css'

const Slider = () => {
	const handleArrowClick = () => {
		const absolute = document.getElementById('absolute')
		absolute.style.zIndex = '100'
		setTimeout(() => {
			absolute.style.zIndex = '0'
		}, 200)
	}

	return (
		<Swiper
			className='h-full overflow-visible relative w-full pt-[250px]'
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			centeredSlides={true}
			slidesPerView={1}
			loop={true}
			navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}>
			<SwiperSlide>
				<div className='my-container flex justify-center'>
					<div className=' text-white translate-x-2/4	'>
						<div className='text-5xl text-white'>
							<span className='font-semibold mb-3 inline-block'>
								Introducing
							</span>
							<br />
							<span className='font-extralight'>
								Something hot......
							</span>
						</div>
						<a
							target='_blank'
							href='https://ztu.edu.ua/'
							className='hover:bg-[#00684b85] inline-block transition-all try-demo cursor-pointer mt-9 py-2 px-4 bg-[#00684b]'>
							Try Demo
						</a>
					</div>
				</div>{' '}
			</SwiperSlide>
			<SwiperSlide>
				<div className='my-container flex justify-center'>
					<div className=' text-white translate-x-2/4	'>
						<div className='text-5xl text-white'>
							<span className='font-semibold mb-3 inline-block'>
								Ipsum
							</span>
							<br />
							<span className='font-extralight'>
								Eius culpa?......
							</span>
						</div>
						<a
							target='_blank'
							href='https://ztu.edu.ua/'
							className='hover:bg-[#00684b85] inline-block transition-all cursor-pointer try-demo mt-9 py-2 px-4 bg-[#00684b]'>
							Try Demo
						</a>
					</div>
				</div>{' '}
			</SwiperSlide>
			<SwiperSlide>
				<div className='my-container flex justify-center'>
					<div className=' text-white translate-x-2/4	'>
						<div className='text-5xl text-white'>
							<span className='font-semibold  mb-3 inline-block'>
								Lorem
							</span>
							<br />
							<span className='font-extralight'>
								Limi quia accusamus......
							</span>
						</div>
						<a
							target='_blank'
							href='https://ztu.edu.ua/'
							className='hover:bg-[#00684b85] inline-block transition-all cursor-pointer try-demo py-2 mt-9  px-4 bg-[#00684b]'>
							Try Demo
						</a>
					</div>
				</div>{' '}
			</SwiperSlide>

			<div className='slider-controller'>
				<div
					onClick={handleArrowClick}
					className='swiper-button-prev  z-50 slider-arrow'>
					<img src='/left-arrow.png' alt='back' />
				</div>
				<div
					onClick={handleArrowClick}
					className='swiper-button-next z-50 slider-arrow'>
					<img src='/right-arrow.png' alt='forward' />
				</div>
				<div className='swiper-pagination'></div>
			</div>
			<div
				id='absolute'
				className='absolute flex justify-center w-full -bottom-[60px] -left-16'>
				<img className='-translate-x-2/4' src='/coffee.png' alt='' />
			</div>
		</Swiper>
	)
}

export default Slider
