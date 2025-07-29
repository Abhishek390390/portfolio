import ResumeImg from '../asset/DOC-20250321-WA0003._page-0001.png';

export default function Resume() {
	const config = {
		link: 'https://drive.google.com/file/d/1G7bbEtU5PYGWX52tm4N6Pxr7MOZ4YmhA/view?usp=drive_link'
	}

	return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
		<div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
			<img className='w-[300px]' src={ResumeImg} />
		</div>
		<div className='md:w-1/2 flex justify-center'>
			<div className='flex flex-col justify-center text-white'>
				<h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
				<p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
			</div>
		</div>
	</section>
}