import { useTranslation } from "react-i18next";

const Comments = () => {
	const { t } = useTranslation();

	return (
		<section className='mt-5 flex flex-col'>
			<h3 className='font-bold text-2xl'>
				{t('comments')}
			</h3>
			<div className='flex flex-wrap lg:-mx-2 -mx-1'>
				<div className="lg:w-1/4 md:w-1/3 w-1/2 lg:p-2 p-1">
					<a className="card card-side bg-base-100 border rounded-lg" href="#">
						<img className="h-24" src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
						<div className="card-body px-4 py-2">
							<h3 className="card-title text-[16px] line-clamp-1">New movie is released!</h3>
							<p className="text-sm line-clamp-2 max-w-[200px]">Click the button to watch on Jetflix app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat? Consequatur neque quasi architecto maxime animi aliquam adipisci eius. Vel commodi itaque laboriosam laborum adipisci officia deleniti quia sunt unde.</p>
						</div>
					</a>
				</div>
				<div className="lg:w-1/4 md:w-1/3 w-1/2 lg:p-2 p-1">
					<a className="card card-side bg-base-100 border rounded-lg" href="#">
						<img className="h-24" src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
						<div className="card-body px-4 py-2">
							<h3 className="card-title text-[16px] line-clamp-1">New movie is released!</h3>
							<p className="text-sm line-clamp-2 max-w-[200px]">Click the button to watch on Jetflix app.</p>
						</div>
					</a>
				</div>
				<div className="lg:w-1/4 md:w-1/3 w-1/2 lg:p-2 p-1">
					<a className="card card-side bg-base-100 border rounded-lg" href="#">
						<img className="h-24" src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
						<div className="card-body px-4 py-2">
							<h3 className="card-title text-[16px] line-clamp-1">New movie is released!</h3>
							<p className="text-sm line-clamp-2 max-w-[200px]">Click the button to watch on Jetflix app.</p>
						</div>
					</a>
				</div>
				<div className="lg:w-1/4 md:w-1/3 w-1/2 lg:p-2 p-1">
					<a className="card card-side bg-base-100 border rounded-lg" href="#">
						<img className="h-24" src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
						<div className="card-body px-4 py-2">
							<h3 className="card-title text-[16px] line-clamp-1">New movie is released!</h3>
							<p className="text-sm line-clamp-2 max-w-[200px]">Click the button to watch on Jetflix app.</p>
						</div>
					</a>
				</div>
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

export default Comments;