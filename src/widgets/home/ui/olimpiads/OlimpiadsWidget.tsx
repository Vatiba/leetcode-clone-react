import { useTranslation } from "react-i18next";
// trash
import img1 from 'shared/assets/trash/1.jpg';
import img2 from 'shared/assets/trash/2.jpg';
import img3 from 'shared/assets/trash/3.jpg';

const OlimpiadsWidget = () => {
	const { t } = useTranslation();

	return (
		<section className='flex flex-col'>
			<h3 className='font-bold text-2xl'>
				{t('olimpiads')}
			</h3>
			<div className='flex flex-wrap lg:-mx-2 -mx-1'>
				<a className="relative lg:w-1/4 md:w-1/3 w-1/2 lg:p-2 p-1" href="#">
					<img className="rounded-lg w-full object-cover" src={img1} alt="img" />
				</a>
				<a className="relative lg:w-1/4 md:w-1/3 w-1/2 lg:p-2 p-1" href="#">
					<img className="rounded-lg w-full object-cover" src={img2} alt="img" />
				</a>
				<a className="relative lg:w-1/4 md:w-1/3 w-1/2 lg:p-2 p-1" href="#">
					<img className="rounded-lg w-full object-cover" src={img3} alt="img" />
				</a>
				<a className="relative lg:w-1/4 md:w-1/3 w-1/2 lg:p-2 p-1" href="#">
					<img className="rounded-lg w-full object-cover" src={img1} alt="img" />
				</a>
				{/* <div className="skeleton w-full h-40" />
			<div className="skeleton w-full h-40" />
			<div className="skeleton w-full h-40" />
			<div className="skeleton w-full h-40" /> */}
				{/* <div className='relative'>
				<p>Taze olimpiads</p>
				<div className=''>

				</div>
			</div> */}
			</div>
		</section>
	)
}

export default OlimpiadsWidget;