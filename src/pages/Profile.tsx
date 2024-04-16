import { useGetLocations } from "entities/locations";
import { useTranslation } from "react-i18next";
import { BiChat } from "react-icons/bi";
import { FaFire, FaPhone } from "react-icons/fa";
import { Container } from "shared";
// trash
import AvatarPlaceholder from 'shared/assets/img/default_avatar.jpg';
import { EditProfileWidget } from "widgets/profile";

function Profile() {
	const { t } = useTranslation();

	return (
		<Container className="my-3">
			<div
				className="flex flex-wrap sm:flex-nowrap gap-3"
			>
				<div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white py-3 px-3 rounded-md">
					<div className="flex gap-3">
						<img src={AvatarPlaceholder} className="w-16 h-16 rounded-md" />
						<div className="flex flex-col">
							<span className="font-bold">
								Bezirgen Yaylymow
							</span>
							<span className="">
								Student
							</span>
						</div>
					</div>
					<div className="border-b w-full pb-3 my-3">
						<span className="font-medium">
							{t('languages')}
						</span>
						<div className="flex flex-col mt-3">
							<div className="flex justify-between hover:bg-gray-100 select-none py-2 px-3 rounded-md ">
								<span className="font-bold">Python</span>
								<span className="">solved: 2</span>
							</div>
						</div>
					</div>
					<div className="border-b w-full pb-3">
						<span className="font-medium">
							{t('skills')}
						</span>
						<div className="flex flex-col mt-3">
							<div className="flex items-center">
								<span className="h-2 w-2 bg-red-500 rounded-full mr-2" />
								<span className="text-sm">Advanced</span>
							</div>
							<div className="flex flex-wrap my-2 gap-1">
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Array x2</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Hash table</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Stack</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Queue x10</span>
							</div>
							<div className="flex items-center">
								<span className="h-2 w-2 bg-yellow-400 rounded-full mr-2" />
								<span className="text-sm">Intermediate</span>
							</div>
							<div className="flex flex-wrap my-2 gap-1">
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Array x2</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Hash table</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Stack</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Queue x10</span>
							</div>
							<div className="flex items-center">
								<span className="h-2 w-2 bg-green-500 rounded-full mr-2" />
								<span className="text-sm">Fundamental</span>
							</div>
							<div className="flex flex-wrap my-2 gap-1">
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Array x2</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Hash table</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Stack</span>
								<span className="flex justify-center items-center px-2 rounded-full text-sm bg-gray-100">Queue x10</span>
							</div>
						</div>
					</div>

				</div>
				<div className="flex flex-col w-full sm:w-1/2 md:w-2/3 lg:w-3/4 gap-2">
					<div className="flex flex-wrap md:flex-nowrap gap-2">
						<div className="bg-white w-full md:w-1/2 py-2 px-3 rounded-md">
							chart
						</div>
						<div className="bg-white w-full md:w-1/2 py-2 px-3 rounded-md">
							<span className="font-medium">
								{t('communityStats')}
							</span>
							<div className="flex items-center mt-3">
								<BiChat size='25px' className="mr-3" />
								<span className="font-medium mr-2">
									{t('discuss')}
								</span>
								<span className="font-bold">
									0
								</span>
							</div>
							<div className="flex items-center mt-3">
								<FaFire size='25px' className="mr-3" />
								<span className="font-medium mr-2">
									Score
								</span>
								<span className="font-bold">
									0
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col bg-white w-full py-4 px-3 rounded-md">
						<EditProfileWidget />
						<div className="flex justify-end mt-4">
							<button
								className="flex justify-center py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded-md text-white font-bold"
							>
								{t('editProfile')}
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Profile