import React, { useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { IoDocumentTextOutline } from "react-icons/io5";
import { ImLab } from "react-icons/im";
import { FaTag } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { CiViewTimeline } from "react-icons/ci";

function Description() {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useSearchParams('desc');
	const contentRef = useRef<HTMLDivElement>(null);
	const tagsRef = useRef<HTMLSpanElement>(null);

	return (
		<div className='rounded-lg border bg-white h-full'>
			<div className='flex h-[4%] min-h-10 max-h-10 bg-gray-100 rounded-t-lg p-1'>
				<button
					className={
						clsx('flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200', {
							'bg-gray-200': activeTab.get('desc') === 'desc' || !activeTab.get('desc')
						})
					}
					onClick={() => setActiveTab({ desc: 'desc' })}
				>
					<IoDocumentTextOutline />
					<span className='ml-2'>
						{t('desc')}
					</span>
				</button>
				<button
					className={
						clsx('flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200', {
							'bg-gray-200': activeTab.get('desc') === 'solution'
						})
					}
					onClick={() => setActiveTab({ desc: 'solution' })}
				>
					<ImLab />
					<span className='ml-2'>
						{t('solution')}
					</span>
				</button>
				<button
					className={
						clsx('flex items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200', {
							'bg-gray-200': activeTab.get('desc') === 'discussion'
						})
					}
					onClick={() => setActiveTab({ desc: 'discussion' })}
				>
					<GoCommentDiscussion />
					<span className='ml-2'>
						Discussion
					</span>
				</button>
			</div>
			<div className='h-[92%] overflow-y-auto px-3 pt-6 pb-4 overflow-x-hidden scroll-smooth' ref={contentRef}>
				<h1 className='text-xl font-bold mb-3'>
					292. Nim Game
				</h1>
				<div className="flex flex-wrap text-sm">
					<span className='bg-gray-100 rounded-full px-3 py-1 text-green-400 mr-1'>
						Easy
					</span>
					<button
						className='bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 flex items-center mr-1'
						onClick={() => contentRef.current?.scrollTo(0, tagsRef.current?.offsetTop || 0)}
					>
						<FaTag className='text-sm mr-1' />
						Tags
					</button>
					<button
						className='bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 flex items-center mr-1'
						onClick={() => contentRef.current?.scrollTo(0, tagsRef.current?.offsetTop || 0)}
					>
						<CiViewTimeline className='text-sm mr-1' />
						Requirements
					</button>
				</div>
				<div className='my-3'>
					<div data-track-load="description_content"><p>You are playing the following Nim Game with your friend:</p>

						<ul>
							<li>Initially, there is a heap of stones on the table.</li>
							<li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li>
							<li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li>
							<li>The one who removes the last stone is the winner.</li>
						</ul>

						<p>Given <code>n</code>, the number of stones in the heap, return <code>true</code><em> if you can win the game assuming both you and your friend play optimally, otherwise return </em><code>false</code>.</p>

						<p>&nbsp;</p>
						<p><strong >Example 1:</strong></p>

						<pre><strong>Input:</strong> n = 4
							<strong>Output:</strong> false
							<strong>Explanation:</strong> These are the possible outcomes:
							1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
							2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
							3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
							In all outcomes, your friend wins.
						</pre>

						<p><strong >Example 2:</strong></p>

						<pre><strong>Input:</strong> n = 1
							<strong>Output:</strong> true
						</pre>

						<p><strong >Example 3:</strong></p>

						<pre><strong>Input:</strong> n = 2
							<strong>Output:</strong> true
						</pre>

						<p>&nbsp;</p>
						<p><strong>Constraints:</strong></p>

						<ul>
							<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
						</ul>
						<ul>
							<li>Initially, there is a heap of stones on the table.</li>
							<li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li>
							<li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li>
							<li>The one who removes the last stone is the winner.</li>
						</ul>

						<p>Given <code>n</code>, the number of stones in the heap, return <code>true</code><em> if you can win the game assuming both you and your friend play optimally, otherwise return </em><code>false</code>.</p>

						<p>&nbsp;</p>
						<p><strong >Example 1:</strong></p>

						<pre><strong>Input:</strong> n = 4
							<strong>Output:</strong> false
							<strong>Explanation:</strong> These are the possible outcomes:
							1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
							2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
							3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
							In all outcomes, your friend wins.
						</pre>

						<p><strong >Example 2:</strong></p>

						<pre><strong>Input:</strong> n = 1
							<strong>Output:</strong> true
						</pre>

						<p><strong >Example 3:</strong></p>

						<pre><strong>Input:</strong> n = 2
							<strong>Output:</strong> true
						</pre>

						<p>&nbsp;</p>
						<p><strong>Constraints:</strong></p>

						<ul>
							<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
						</ul>
						<ul>
							<li>Initially, there is a heap of stones on the table.</li>
							<li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li>
							<li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li>
							<li>The one who removes the last stone is the winner.</li>
						</ul>

						<p>Given <code>n</code>, the number of stones in the heap, return <code>true</code><em> if you can win the game assuming both you and your friend play optimally, otherwise return </em><code>false</code>.</p>

						<p>&nbsp;</p>
						<p><strong >Example 1:</strong></p>

						<pre><strong>Input:</strong> n = 4
							<strong>Output:</strong> false
							<strong>Explanation:</strong> These are the possible outcomes:
							1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
							2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
							3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
							In all outcomes, your friend wins.
						</pre>

						<p><strong >Example 2:</strong></p>

						<pre><strong>Input:</strong> n = 1
							<strong>Output:</strong> true
						</pre>

						<p><strong >Example 3:</strong></p>

						<pre><strong>Input:</strong> n = 2
							<strong>Output:</strong> true
						</pre>

						<p>&nbsp;</p>
						<p><strong>Constraints:</strong></p>

						<ul>
							<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
						</ul>
					</div>
				</div>
				<div className='flex flex-wrap mt-6 text-sm border-b pb-3'>
					<span className='flex items-center border-r pr-4 h-4'>
						<span className=''>
							Accepted
						</span>
						<span className='font-bold ml-2'>
							12.5M
						</span>
					</span>
					<span className='flex items-center border-r px-4 h-4'>
						<span className=''>
							Submissions
						</span>
						<span className='font-bold ml-2'>
							24M
						</span>
					</span>
					<span className='flex items-center px-4 h-4'>
						<span className=''>
							Accepted Rate
						</span>
						<span className='font-bold ml-2'>
							52.0%
						</span>
					</span>
				</div>
				<div className='flex mt-3'>
					<span id='#tags' className='flex items-center mr-1' ref={tagsRef}>
						<FaTag className='text-sm mr-1' />
						Tags
					</span>
				</div>
				<div className='flex flex-wrap gap-1 mt-3'>
					<span className='flex justify-center items-center bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-500'>
						Tree
					</span>
					<span className='flex justify-center items-center bg-gray-200 rounded-full p-2 py-1 text-xs text-gray-500'>
						Depth-First Search
					</span>
					<span className='flex justify-center items-center bg-gray-200 rounded-full p-2 py-1 text-xs text-gray-500'>
						Binary Tree
					</span>
				</div>
				<div className='flex mt-3'>
					<span id='#tags' className='flex items-center mr-1' ref={tagsRef}>
						<CiViewTimeline className='text-sm mr-1' />
						Requirements
					</span>
				</div>
				<div className='flex flex-wrap gap-1 mt-3'>
					<span className='flex justify-center items-center bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-500'>
						Tree
					</span>
				</div>
			</div>
			<div className='h-[4%] flex items-center px-1'>
				<button className='bg-gray-200 hover:bg-gray-300 h-6 px-3 flex items-center rounded-lg'>
					<AiOutlineLike />
					<span className='ml-2 font-bold'>
					55.2K
					</span>
				</button>
			</div>
		</div>
	)
}

export default Description