import React, { useEffect } from 'react'
import './Tabs.css'

const Tabs = () => {
	useEffect(() => {
		document.querySelector('.tabs__item.active').click()

		const tabItems = document.querySelectorAll('.tabs__item')
		const tabContents = document.querySelectorAll('.tabs__block')

		const handleTabClick = clickedTabId => {
			tabItems.forEach(tab => tab.classList.remove('active'))
			tabContents.forEach(content => content.classList.remove('active'))

			const clickedTab = document.querySelector(
				`.tabs__item[href='${clickedTabId}']`,
			)
			const correspondingContent = document.querySelector(clickedTabId)

			if (clickedTab && correspondingContent) {
				clickedTab.classList.add('active')
				correspondingContent.classList.add('active')
			}
		}

		tabItems.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()
				const clickedTabId = e.target
					.closest('.tabs__item')
					.getAttribute('href')
				handleTabClick(clickedTabId)
			})
		})
	}, [])
	return (
		<div className='tabs'>
			<nav className='tabs__items'>
				<a href='#tab_01' className='tabs__item active'>
					<img src='/tab1.png' alt='' />
					Responsive
					<br />
					Websites
				</a>
				<a href='#tab_02' className='tabs__item'>
					<img src='/tab2.png' alt='' />
					e Commerce
					<br />
					Websites
				</a>
				<a href='#tab_03' className='tabs__item'>
					<img src='/tab3.png' alt='' />
					Daily blog
					<br />
					Websites
				</a>
				<a href='#tab_04' className='tabs__item'>
					<img src='/tab4.png' alt='' />
					Search based
					<br />
					Websites
				</a>
			</nav>
			<div className='tabs__body'>
				<div id='tab_01' className='tabs__block active'>
					<div className='w-full flex justify-center'>
						<img src='/ipad.png' alt='' />
					</div>
					<h3 className='text-3xl'>Lorem, ipsum dolor sit amet</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Repellendus, repellat. Tempore praesentium modi
						cupiditate, ex, veritatis eveniet maxime consequatur
						natus quam temporibus officiis consequuntur pariatur
						facilis quibusdam ipsam id adipisci?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aspernatur quae, dolore excepturi delectus quo
						praesentium voluptates ad quas dicta sequi esse officia
						soluta tempora eum fugit distinctio sint perferendis
						minima? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Aspernatur quae, dolore excepturi
						delectus quo praesentium voluptates ad quas dicta sequi
						esse officia soluta tempora eum fugit distinctio sint
						perferendis minima?
					</p>
				</div>
				<div id='tab_02' className='tabs__block'>
					<div className='w-full flex justify-center'>
						<img className='rotate-180' src='/ipad.png' alt='' />
					</div>
					<h3 className='text-3xl'>Repellendus, repellat. Tempore</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Repellendus, repellat. Tempore praesentium modi
						cupiditate, ex, veritatis eveniet maxime consequatur
						natus quam temporibus officiis consequuntur pariatur
						facilis quibusdam ipsam id adipisci?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ea deleniti quasi repellat magni amet optio aliquam est
						ipsa tempore eaque? Dolor harum quasi dolore, recusandae
						facilis veniam voluptatibus sit quaerat! Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Ea deleniti
						quasi repellat magni amet optio aliquam est ipsa tempore
						eaque? Dolor harum quasi dolore, recusandae facilis
						veniam voluptatibus sit quaerat!
					</p>
				</div>
				<div id='tab_03' className='tabs__block'>
					<div className='w-full flex justify-center'>
						<img src='/ipad.png' alt='' />
					</div>
					<h3 className='text-3xl'>Officiis consequuntur</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Repellendus, repellat. Tempore praesentium modi
						cupiditate, ex, veritatis eveniet maxime consequatur
						natus quam temporibus officiis consequuntur pariatur
						facilis quibusdam ipsam id adipisci?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aspernatur quae, dolore excepturi delectus quo
						praesentium voluptates ad quas dicta sequi esse officia
						soluta tempora eum fugit distinctio sint perferendis
						minima? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Aspernatur quae, dolore excepturi
						delectus quo praesentium voluptates ad quas dicta sequi
						esse officia soluta tempora eum fugit distinctio sint
						perferendis minima?
					</p>
				</div>
				<div id='tab_04' className='tabs__block'>
					<div className='w-full flex justify-center'>
						<img className='rotate-180' src='/ipad.png' alt='' />
					</div>
					<h3 className='text-3xl'>Aspernatur quae, dolore</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Repellendus, repellat. Tempore praesentium modi
						cupiditate, ex, veritatis eveniet maxime consequatur
						natus quam temporibus officiis consequuntur pariatur
						facilis quibusdam ipsam id adipisci?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aspernatur quae, dolore excepturi delectus quo
						praesentium voluptates ad quas dicta sequi esse officia
						soluta tempora eum fugit distinctio sint perferendis
						minima? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Aspernatur quae, dolore excepturi
						delectus quo praesentium voluptates ad quas dicta sequi
						esse officia soluta tempora eum fugit distinctio sint
						perferendis minima?
					</p>
				</div>
			</div>
		</div>
	)
}

export default Tabs
