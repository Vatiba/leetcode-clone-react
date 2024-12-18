import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDebounceValue } from "shared/hooks";

type DiscussSearchProps = {
	onChange: (value: string) => void
}

function DiscussSearch(props: DiscussSearchProps) {
	const {
		onChange
	} = props;
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const debounceValue = useDebounceValue(value, 800);
	useEffect(() => {
		onChange(debounceValue);
	}, [debounceValue]);

	return (
		<label className="input input-xs input-bordered flex items-center gap-2 mr-2">
			<input
				type="text"
				value={value}
				onChange={({ target: { value } }) => setValue(value)}
				placeholder={t('search')}
				className="grow bg-transparent outline-none"
			/>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
		</label>
	)
}

export default DiscussSearch