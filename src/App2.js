import React from 'react';
import { useState } from 'react';
import styles from './App2.module.css';

let result = false;

export const App2 = () => {
	const buttonsArr = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		'+',
		'-',
		'C',
		'=',
	];
	const [inputNumber, setInputNumber] = useState();

	const onClick = (clickBtn) => {
		if (clickBtn === '=') {
			try {
				setInputNumber(eval(`${inputNumber}`));
			} catch {
				setInputNumber('ошибка ввода');
				setTimeout(() => setInputNumber(''), 1500);
			}
			result = true;
		} else if (clickBtn === 'C') {
			setInputNumber('');
		} else if (clickBtn) {
			setInputNumber(inputNumber + clickBtn);
			result = false;
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.output}>
				<input
					type="text"
					className={result ? styles.isResult : styles.viewArea}
					defaultValue={inputNumber}
				/>
			</div>
			<div className={styles.buttonsArea}>
				{buttonsArr.map((item) => (
					<button key={item} onClick={() => onClick(item)}>
						{item}
					</button>
				))}
			</div>
		</div>
	);
};
