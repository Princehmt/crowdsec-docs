import React, { useState, useEffect, useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';


const TableRender = ({ columns, url }) => {

    const [jsonContent, setJsonContent] = useState()

    const currentTheme = localStorage.getItem('theme')
    const isLight = currentTheme === 'light'

    const tableTheme =
        createTheme({
            palette: {
                mode: currentTheme,
                background: {
                    default:
                        isLight
                            ? 'rgb(255,255,255)'
                            : '#000',
                },
            },
        },
        )

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                var newData = [];
                var names = [];
                Object.keys(data).map((key, i) => {
                    // filter duplicate names
                    var name = data[key]["name"];
                    if (names.includes(name)) {
                        return
                    }
                    names.push(name)
                    newData.push(data[key]);
                })
                setJsonContent(newData)
            })
    })

    if (!columns || !jsonContent) {
        return <></>
    }

    return (
        <ThemeProvider theme={tableTheme}>
            <MaterialReactTable
                data={jsonContent}
                columns={columns}
                enableColumnResizing={true}
                initialState={{ pagination: { pageSize: 25 } }}
                enableGlobalFilter={true}
                muiTablePaginationProps={{
                    rowsPerPageOptions: [10, 15, 25, 50, 100],
                }}
            />
        </ThemeProvider>
    );

}

export default TableRender;


