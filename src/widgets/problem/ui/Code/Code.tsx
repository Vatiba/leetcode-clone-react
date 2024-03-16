import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa";
// code editor
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { LanguageSupport, StreamLanguage } from "@codemirror/language"
import { pascal } from "@codemirror/legacy-modes/mode/pascal"

function Code() {
	const { t } = useTranslation();
	const codeBlockRef = useRef<HTMLDivElement>(null);

	const [value, setValue] = useState("console.log('hello world!');");
	const [language, setLanguage] = useState<StreamLanguage<unknown> | LanguageSupport>(javascript({ typescript: true }));
	const onChange = React.useCallback((val: string) => {
		setValue(val);
	}, []);

	useEffect(() => {
		codeBlockRef.current?.addEventListener('', () => {
			console.log('size changed');
		});
	}, [])

	const onLanguageChange = (value: string) => {
		switch (value) {
			case 'javascript':
				setLanguage(javascript({ typescript: true }));
				break;
			case 'python':
				setLanguage(python());
				break;
			case 'cpp':
				setLanguage(cpp());
				break;
			case 'c':
				setLanguage(cpp());
				break;
			case 'java':
				setLanguage(java());
				break;
			case 'pascal':
				setLanguage(StreamLanguage.define(pascal));
				break;
			default:
				break;
		}
	}

	return (
		<div className='rounded-lg border bg-white h-full'>
			<div className='flex h-[8%] max-h-8 bg-gray-100 rounded-t-lg p-1 justify-between'>
				<span
					className='flex items-center p-2 rounded-md bg-gray-100'
				>
					<FaCode className='text-green-500' />
					<span className='ml-2'>
						Code
					</span>
				</span>
				<select className='mr-1' onChange={({ target: { value } }) => onLanguageChange(value)}>
					<option value="javascript" defaultChecked>Node js</option>
					<option value="python">Python</option>
					<option value="cpp">C++</option>
					<option value="c">C</option>
					<option value="java">Java</option>
					<option value="pascal">Pascal</option>
				</select>
			</div>
			<div className='h-[94%] overflow-hidden' ref={codeBlockRef}>
				<CodeMirror
					value={value}
					height={codeBlockRef.current?.clientHeight ? `${codeBlockRef.current.clientHeight}px` : '10000px'}
					extensions={[
						language
					]}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

export default Code