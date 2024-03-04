import React from 'react';

import LogoImg from 'shared/assets/img/logo.png';
import { FaPlay } from "react-icons/fa";
import { MdOutlineCloudUpload } from "react-icons/md";
import { AuthStatus } from 'entities/auth';
import { Link } from 'react-router-dom';
import { ThemeBtn } from 'features/ui';


function Head() {
	return (
		<div className='flex items-center justify-between h-[6%]'>
			<Link to="/">
				<img src={LogoImg} alt="Logo" width={30} height={30} />
			</Link>
			<div className='flex'>
				<button className='flex bg-gray-200 hover:bg-gray-300 p-1 px-4 items-center rounded-l-md font-bold'>
					<FaPlay className='mr-2 text-sm' />
					Run
				</button>
				<button className='flex bg-gray-200 hover:bg-gray-300 p-1 px-4 items-center rounded-r-md font-bold text-green-500'>
					<MdOutlineCloudUpload className='mr-2' />
					Submit
				</button>
			</div>
			<div className='flex items-center'>
				<div className='ml-3 flex items-center scale-75'>
					<ThemeBtn />
				</div>
				<AuthStatus />
			</div>
		</div>
	)
}

export default Head