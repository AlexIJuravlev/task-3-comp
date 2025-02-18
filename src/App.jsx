import { useState } from 'react';
import styles from './index.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false)

	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const output = operand1 + operator + operand2;

	return (
		<div className={styles.table}>
			<div className={`${isResult ? styles.result : styles.screen}`}>
				{output}
			</div>
			<div className={styles.buttons}>
				<div className={styles.left}>
					{NUMS.map((num) => (
						<button
							className={styles.btn}
							onClick={() => {
								if (operator === '') {
									if (operand1 === '0') {
										setOperand1(num);
									} else {
										setOperand1(operand1 + num);
										setIsResult(false);

									}
								} else {
									if (operand2 === '0') {
										setOperand2(num);
									} else {
										setOperand2(operand2 + num);

									}
								}
							}}
							key={num}
						>
							{num}
						</button>
					))}
				</div>
				<div className={styles.right}>
					<button
						className={styles.btn}
						onClick={() => {
							setOperand1('0');
							setOperand2('');
							setOperator('');
							setIsResult(false);

						}}
					>
						C
					</button>
					<button
						className={styles.btn}
						onClick={() => {
							setOperator('+');
							setIsResult(false);

						}}
					>
						+
					</button>
					<button
						className={styles.btn}
						onClick={() => {
							setOperator('-');
							setIsResult(false);

						}}
					>
						-
					</button>
					<button
						className={styles.btn}
						onClick={() => {
							if (operand2 === '') {
								setOperator('');
								setIsResult(true)
							} else {
								switch (operator) {
									case '+': {
										setOperand1(Number(operand1) + Number(operand2));
										break;
									}
									case '-': {
										setOperand1(Number(operand1) - Number(operand2));

										break;
									}

									default: //ничего
								}
								setIsResult(true);
								setOperator('');
								setOperand2('');
							}
						}}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
};
