import Axios from "axios";
import React, {useEffect, useState, useMemo} from "react";
import {Link, Redirect, useHistory} from 'react-router-dom';
import { useTable, useRowSelect } from 'react-table'
import { useForm } from "react-hook-form";
import Cookies from 'universal-cookie';

import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import '../css/table.scss'
import { Checkbox } from './Checkbox'

const cookies = new Cookies();


const Table=(props)=>{
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />
        },
        ...columns
      ])
    }
  )

  const firstPageRows = rows.slice(0, 10)

  return (
    <div className="table-responsive">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>      
          {console.log(JSON.stringify({selectedFlatRows: selectedFlatRows.map(row => row.original)},null,2))}        
    </div>
  )
}

export default Table;