import React, { useEffect, useRef } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa";

function Code() {
	const { t } = useTranslation();
	const codeBlockRef = useRef<HTMLDivElement>(null);

	const [value, setValue] = React.useState("console.log('hello world!');");
	const onChange = React.useCallback((val: string) => {
		setValue(val);
	}, []);

	useEffect(() => {
		codeBlockRef.current?.addEventListener('', () => {
			console.log('size changed')
		});
	}, [])

	return (
		<div className='rounded-lg border bg-white h-full'>
			<div className='flex h-[8%] max-h-8 bg-gray-100 rounded-t-lg p-1'>
				<span
					className='flex items-center p-2 rounded-md bg-gray-100'
				>
					<FaCode className='text-green-500' />
					<span className='ml-2'>
						Code
					</span>
				</span>
			</div>
			<div className='h-[94%] overflow-hidden' ref={codeBlockRef}>
				<CodeMirror
					value={value}
					height={codeBlockRef.current?.clientHeight ? `${codeBlockRef.current.clientHeight}px` : '10000px'}
					//   extensions={[javascript({ jsx: true })]}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

export default Code