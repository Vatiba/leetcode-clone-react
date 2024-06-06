import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa";
// code editor
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { LanguageSupport, StreamLanguage } from "@codemirror/language";
import { pascal } from "@codemirror/legacy-modes/mode/pascal";
import CodeMirror from '@uiw/react-codemirror';
import { useDebounceValue } from 'shared/hooks';

type CodeProps = {
	onCodeChange: Function
	onLangChange: Function
}

function Code(props: CodeProps) {
	const {
		onCodeChange,
		onLangChange
	} = props;
	const { t } = useTranslation();
	const codeBlockRef = useRef<HTMLDivElement>(null);

	const [value, setValue] = useState("console.log('hello world!');");
	const [language, setLanguage] = useState<StreamLanguage<unknown> | LanguageSupport | undefined>(javascript({ typescript: true }));
	const onChange = React.useCallback((val: string) => {
		setValue(val);
	}, []);

	useEffect(() => {
		codeBlockRef.current?.addEventListener('', () => {
			console.log('size changed');
		});
	}, [])

	const debounceValue = useDebounceValue(value, 800);

	useEffect(() => {
		onCodeChange(debounceValue);
	}, [debounceValue]);


	const onLanguageChange = (value: string) => {
		switch (value) {
			case '63':
				setLanguage(javascript({ typescript: true }));
				onLangChange(63)
				break;
			case '71':
				setLanguage(python());
				onLangChange(71)
				break;
			case '54':
				setLanguage(cpp());
				onLangChange(54)
				break;
			case '50':
				setLanguage(cpp());
				onLangChange(50)
				break;
			case '62':
				setLanguage(java());
				onLangChange(62)
				break;
			case '67':
				setLanguage(StreamLanguage.define(pascal));
				onLangChange(67)
				break;
			case '60':
				setLanguage(undefined)
				onLangChange(60)
				break;
			case '73':
				setLanguage(undefined)
				onLangChange(73)
				break;
			case '72':
				setLanguage(undefined)
				onLangChange(72)
				break;
			default:
				setLanguage(undefined)
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
					<option value="63" defaultChecked>Node js (12.14)</option>
					<option value="71">Python (3.8)</option>
					<option value="54">C++ (GCC 9.2)</option>
					<option value="50">C (GCC 9.2)</option>
					<option value="62">Java (OpenJDK 13)</option>
					<option value="67">Pascal (FPC 3)</option>
					<option value="60">Go (1.13)</option>
					<option value="73">Rust (1.40)</option>
					<option value="72">Ruby (2.7)</option>
				</select>
			</div>
			<div className='h-[94%] overflow-hidden' ref={codeBlockRef}>
				<CodeMirror
					value={value}
					height={codeBlockRef.current?.clientHeight ? `${codeBlockRef.current.clientHeight}px` : '10000px'}
					extensions={language ? [
						language
					] : undefined}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

export default Code