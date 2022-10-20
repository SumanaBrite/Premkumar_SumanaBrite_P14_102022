import React, { useMemo } from 'react';
import { Link } from 'react-router-dom'
import employeesData from '../../Data/employees';

import {
	useSortBy,
	useTable,
	useGlobalFilter,
	usePagination,
} from 'react-table';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GlobalFilter from '../GlobalFilter/GlobalFilter';
import { COLUMNS } from '../../Data/columns';
import useGlobalState from '../../State/State';

import './Table.css'

const SearchContainer = styled.div`
	width: 100%;
	margin:auto;
	display: flex;
	justify-content: space-between;
	input,
	select {
		margin-bottom: 7px;
		border: 1px solid grey;
		border-radius: 3px;
		padding: 3px;
	}
`;

const StyledTable = styled.table`
	width: 100%;
	border-spacing: 0;
	tr {
		:last-child {
			td {
				border-bottom: 0;
			}
		}
	}
	th,
	td {
		margin: 0;
		padding: 1rem 1.2rem;
		border-bottom: 1px solid black;
		:last-child {
			border-right: 0;
		}
	}
	th {
		user-select: none;
		text-align: initial;
	}
`;

const Pagination = styled.div`
	margin-bottom: 10px;
`;

const Table = (e) => {

	const columns = useMemo(() => COLUMNS, []);
	const [employees] = useGlobalState('employee')

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		state,
		setGlobalFilter,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		setPageSize,
	} = useTable(
		{ columns, data: employees },
		useGlobalFilter,
		useSortBy,
		usePagination
	);




	return (
		<div className='table-bg'>
			<div className='table-section'>
				<div className='table-content'>
					<SearchContainer>
						<label>
							Show{' '}
							<select
								name='pageSize'
								value={state.pageSize}
								onChange={(e) => setPageSize(Number(e.target.value))}
							>
								{[10, 25, 50, 100].map((size) => (
									<option key={size} value={size}>
										{size}
									</option>
								))}
							</select>{' '}
							entries
						</label>
						<GlobalFilter
							filter={state.globalFilter}
							setFilter={setGlobalFilter}
						/>
					</SearchContainer>
					<StyledTable {...getTableProps()}>
						<thead>
							{headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th
											{...column.getHeaderProps(
												column.getSortByToggleProps()
											)}
										>
											{column.render('Header')}
											{column.isSorted
												? column.isSortedDesc
													? ' ▼'
													: ' ▲'
												: ''}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody {...getTableBodyProps()}>
							{page.map((row) => {
								prepareRow(row);
								return (
									<tr {...row.getRowProps()}>
										{row.cells.map((cell) => {
											return (
												<td {...cell.getCellProps()}>
													{cell.render('Cell')}
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</StyledTable>
					<Pagination>
						<button
							onClick={() => previousPage()}
							disabled={!canPreviousPage}
						>
							Previous
						</button>
						<span>
							{' '}
							Page {state.pageIndex + 1} of {pageOptions.length}{' '}
						</span>
						<button onClick={() => nextPage()} disabled={!canNextPage}>
							Next
						</button>
					</Pagination>
					<Link className="homeBtn" to="/">
						Home
					</Link>
				</div>
			</div>
		</div>
	);
};


export default Table;
