npm install mathjs

		<table>
			<tbody>
				<tr>
					<td colSpan={3}>
						<input type='text' className={styles.sum} value={value} />
					</td>
					<td>
						<input type='button' value={'C'} onClick={cNull} />
					</td>
				</tr>
				<tr>
					<td>
						<input type='button' value={'1'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'2'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'3'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'+'} onClick={clickPushValue} />
					</td>
				</tr>
				<tr>
					<td>
						<input type='button' value={'4'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'5'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'6'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'-'} onClick={clickPushValue} />
					</td>
				</tr>
				<tr>
					<td>
						<input type='button' value={'7'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'8'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'9'} onClick={clickPushValue} />
					</td>
					<td>
						<input type='button' value={'='} onClick={sumValue} />
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<input type='button' value={'0'} onClick={clickPushValue} />
					</td>
				</tr>
			</tbody>
		</table>
