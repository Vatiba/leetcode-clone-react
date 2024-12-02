import { useAuth } from "entities/auth";
import { useGetProfile } from "entities/profile";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BiChat } from "react-icons/bi";
import { FaFire, FaGithub, FaGitlab, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Container } from "shared";
// trash
import AvatarPlaceholder from 'shared/assets/img/default_avatar.jpg';
import { concatUserName, getLocationString, getProfileProgrammingLang } from "shared/libs/helpers";
import { DiscussesTableWidget } from "widgets/discuss";
import { ChartWidget } from "widgets/profile";

function Profile() {
	const params = useParams();
	const { t } = useTranslation();
	const { data: authData } = useAuth();

	const {
		data: profile,
		isLoading: profileLoading,
		isError: profileError
	} = useGetProfile(params['userId'] as string)

	const programmingLanguages = useMemo(() => {
		if (profile)
			return getProfileProgrammingLang(profile.langs);
		return []
	}, [profileLoading, profileError])

	return (
		<Container className="my-3">
			<div
				className="flex flex-wrap items-start md:flex-nowrap gap-3"
			>
				<div className="flex flex-col w-full md:w-1/3 lg:w-1/4 bg-white py-3 px-3 rounded-md">
					<div className="flex gap-3">
						{
							!profileLoading && !profileError ?
								<img src={profile?.avatar || AvatarPlaceholder} className="w-16 h-16 rounded-md object-cover" />
								:
								<div className="w-16 h-16 rounded-md bg-gray-200 animate-pulse" />
						}
						<div className="flex flex-col">
							{
								!profileLoading && !profileError ?
									<span className="font-bold">
										{concatUserName(profile?.first_name, profile?.last_name)}
									</span>
									:
									<div className="rounded-md bg-gray-200 animate-pulse h-5 w-full" />
							}
							<span className="">
								Rank
							</span>
						</div>
					</div>
					{
						authData?.user?.id === profile?.id ?
							<div className="border-b w-full pb-3 my-2">
								<Link
									to={`/profile/me/edit`}
									className="flex justify-center bg-gray-200 w-full py-2 rounded-md font-medium hover:bg-gray-300"
								>
									{t('editProfile')}
								</Link>
							</div>
							: null
					}
					<div className="border-b w-full pb-3 my-2">
						<h2 className="font-medium">
							{t('info')}
						</h2>
						<div className="flex flex-col">
							{
								!profileLoading && !profileError ?
									<>
										{
											profile?.location &&
											<>
												<h4 className="mt-2 font-medium">{t('location')}</h4>
												<p>
													{getLocationString(profile.location, '')}
												</p>
											</>
										}
										{
											profile?.company_name &&
											<>
												<h4 className="mt-2 font-medium">{t('companyName')}</h4>
												<p>
													{profile?.company_name}
												</p>
											</>
										}
										{
											profile?.university &&
											<>
												<h4 className="mt-2 font-medium">{t('university')}</h4>
												<p>
													{profile?.university.name}
												</p>
											</>
										}
										{
											profile?.school_number &&
											<>
												<h4 className="mt-2 font-medium">{t('school')}</h4>
												<p>
													{profile?.school_number}
												</p>
											</>
										}
										{
											profile?.special_school &&
											<>
												<h4 className="mt-2 font-medium">{t('school')}</h4>
												<p>
													{profile?.special_school.name}
												</p>
											</>
										}
									</>
									:
									<>
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-5 w-full" />
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-5 w-1/2" />
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-5 w-2/3" />
									</>
							}
						</div>
					</div>
					<div className="border-b w-full pb-3 my-2">
						<span className="font-medium">
							{t('links')}
						</span>
						<div className="flex flex-col mt-2">
							{
								!profileLoading && !profileError ?
									<>
										{
											profile?.link_github &&
											<a href={profile.link_github} className="flex items-center border rounded-md p-2">
												<FaGithub color='gray' />
												<span className="ml-3">
													{profile?.link_github}
												</span>
											</a>
										}
										{
											profile?.link_gitlab &&
											<a href={profile.link_gitlab} className="flex items-center border rounded-md p-2">
												<FaGitlab color='gray' />
												<span className="ml-3">
													{profile?.link_gitlab}
												</span>
											</a>
										}
										{
											profile?.link_stackoverflow &&
											<a href={profile.link_stackoverflow} className="flex items-center border rounded-md p-2">
												<FaStackOverflow color='gray' />
												<span className="ml-3">
													{profile?.link_stackoverflow}
												</span>
											</a>
										}
										{
											profile?.link_linkedin &&
											<a href={profile.link_linkedin} className="flex items-center border rounded-md p-2">
												<FaLinkedin color='gray' />
												<span className="ml-3">
													{profile?.link_linkedin}
												</span>
											</a>
										}
									</>
									:
									<>
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-5 w-full" />
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-5 w-full" />
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-5 w-full" />
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-5 w-full" />
									</>
							}
							{/* {
								!profileLoading && !profileError && !profile?.links.length &&
								t('notEnoughData')
							} */}
						</div>
					</div>
					<div className="border-b w-full pb-3 my-3">
						<span className="font-medium">
							{t('languages')}
						</span>
						<div className="flex flex-col mt-2">
							{
								!profileLoading && !profileError && profile?.langs ?
									programmingLanguages.map(item => {
										if (item.count)
											return (
												<div className="flex justify-between hover:bg-gray-100 select-none py-2 px-3 rounded-md ">
													<span className="font-bold">{item.name}</span>
													<span className="">{t('solved').toLowerCase()}: {item.count}</span>
												</div>
											)
										return null
									})
									:
									<>
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-9 w-full" />
										<div className="mb-1 rounded-md bg-gray-200 animate-pulse h-9 w-full" />
									</>
							}
							{
								!profileLoading && !profileError && programmingLanguages.some(item => !item.count) &&
								t('notEnoughData')
							}
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
								<span className="h-2 w-2 bg-blue-500 rounded-full mr-2" />
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
				<div className="flex flex-col w-full md:w-2/3 lg:w-3/4 gap-2">
					<div className="flex flex-wrap lg:flex-nowrap gap-2">
						<div className="bg-white w-full lg:w-1/2 py-2 px-3 rounded-md">
							<ChartWidget
								problemsCount={profile?.problems_count}
								solvedProblemsCount={profile?.solved_problems_count}
								loading={profileLoading || profileError}
							/>
						</div>
						<div className="bg-white w-full lg:w-1/2 py-2 px-3 rounded-md">
							<span className="font-medium">
								{t('communityStats')}
							</span>
							<div className="flex items-center mt-3">
								<BiChat size='25px' className="mr-3" />
								<span className="font-medium mr-2">
									{t('discuss')}
								</span>
								<span className="font-bold">
									{profile?.comment_count ? profile.comment_count : 0}
								</span>
							</div>
							<div className="flex items-center mt-3">
								<FaFire size='25px' className="mr-3" />
								<span className="font-medium mr-2">
									{t('score')}
								</span>
								<span className="font-bold">
									{profile?.score ? profile.score : 0}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col bg-white w-full py-4 px-3 rounded-md">
						<h3 className="font-bold mb-3">
							{t('discusses')}
						</h3>

						<DiscussesTableWidget
							isMinimized
							userId={authData?.user?.id}
							limit={6}
						/>
					</div>

				</div>
			</div>
		</Container>
	)
}

export default Profile
// polaroid