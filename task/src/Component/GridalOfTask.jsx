import React, { useState } from 'react';

import "./DrageOfTask.css"
const initialRows = [
  { id: 1,
    customer: 'Anish',
    lastSeen: '03/15/2022',
    orders: 3,
    totalSpent: '5000 INR',
    latestPurchase: '03/15/2022 10:45 AM',
    news: '✓',
    segments: '', 
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMcIFMkn0ZwtnHz7m0d19pbX_28R8canshnib0BdW0VQ&s' 
        },
  { id: 2, 
    customer: 'Amit', 
    lastSeen: '03/14/2022', 
    orders: 2, 
    totalSpent: '3000 INR', 
    latestPurchase: '03/14/2022 01:05 AM', 
    news: '✗', 
    segments: 'Premium', 
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPDfmtAPKxQ2W04DKIHmgNv6IViKbGQ8a7tL594ooMw&s' 
},
 { id: 3,
    customer: 'Arun', 
    lastSeen: '03/15/2022', 
    orders: 3, 
    totalSpent: '5000 INR', 
    latestPurchase: '03/15/2022 03:15 PM', 
    news: '✗', 
    segments: '',
    picture:"https://t4.ftcdn.net/jpg/02/92/76/21/360_F_292762118_dmWqwlN9lDmhqCHKmUYmZW6F7LaUWc80.jpg"
 },
  { id: 4,
    customer: 'Ritik', 
    lastSeen: '03/14/2022', 
    orders: 2, 
    totalSpent: '3000 INR', 
    latestPurchase: '03/14/2022  08:62 PM ', 
    news:'✗', 
    segments: 'Premium' ,
     picture:"https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg"
},
  { id: 5, 
    customer: 'Ryan', 
    lastSeen: '03/13/2022', 
    orders: 1, 
    totalSpent: '1000 INR', 
    latestPurchase: '03/13/2022 02:00AM', 
    news: '✓', 
    segments: 'Premium',
     picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXXIhNe1ICoMR3L7yWuPy4bO0nywhkaulwBYX0QuNvlecWr-X6QuXl7G9_8BbtF7t2IUI&usqp=CAU"

 },
  { id: 6, 
    customer: 'Rajan', 
    lastSeen: '03/12/2022', 
    orders: 4, 
    totalSpent: '7000 INR', 
    latestPurchase: '03/12/2022 8:15 AM', 
    news: '✗', 
    segments: 'Regular',
     picture:"https://im.rediff.com/getahead/2013/mar/07giridhar-murthy-1.jpg"
     },
  { id: 7, 
    customer: 'Lila', 
    lastSeen: '03/11/2022', 
    orders: 2, totalSpent: '3000 INR', 
    latestPurchase: '03/11/2022 7:15 PM', 
    news: '✗', 
    segments: 'Premium',
     picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kCmejfcHJu7sugB3neF5UfA13aDXgL5tS59qPeaJDf9jINIM-PT-H1wFSWUa8gaLnes&usqp=CAU"
     },
  { id: 8, 
    customer: 'Manshi', 
    lastSeen: '03/10/2022', 
    orders: 5, totalSpent: '8000 INR', 
    latestPurchase: '03/10/2022  11:45 PM', 
    news: '✓', 
    segments: 'Regular' ,
     picture:"https://assets.teenvogue.com/photos/5c87d3d5588d5b1531ac43bb/16:9/w_2560%2Cc_limit/DSC_3519.jpg"
    },
  { id: 9, 
    customer: 'Nita', 
    lastSeen: '03/09/2022', 
    orders: 1, totalSpent: '1000 INR', 
    latestPurchase: '03/09/2022 9:37 AM',  
    news: '✓' ,
    segments: 'Regular' ,

    picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhjNcMCh1FcEj4ZRtXN0ktPo_vwxkgYVvjA&usqp=CAU"
},
  { id: 10, 
    customer: 'Anukriti', 
    lastSeen: '03/08/2022', 
    orders: 3, 
    totalSpent: '5000 INR', 
    latestPurchase: '03/08/2022 11:25 PAM', 
    news: '✗', 
    segments: 'Regular',
     picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8xDIx3GUTMGLiuhnvS0kNmeA0jR-ydo1-Q&usqp=CAU"
     },

];

const columns = [
  { field: 'picture', headerName: 'Picture',  renderCell: (params) => <img src={params.value}  className="customer-image" /> },
  { field: 'customer', headerName: 'Customer', },
  { field: 'lastSeen', headerName: 'Last seen',},
  { field: 'orders', headerName: 'Orders',},
  { field: 'totalSpent', headerName: 'Total spent',  },
  { field: 'latestPurchase', headerName: 'Latest purchase',},
  { field: 'news', headerName: 'News', },
  { field: 'segments', headerName: 'Segments',  },
];


const GridalOfTask = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortField, setSortField] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedRows = initialRows.slice().sort((a, b) => {
    if (sortField === 'lastSeen') {
      const dateA = new Date(a.lastSeen);
      const dateB = new Date(b.lastSeen);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    } else {
      const valueA = String(a[sortField]).toUpperCase();
      const valueB = String(b[sortField]).toUpperCase();
      return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
  }).filter((row) => {
    const searchFields = ['customer', 'lastSeen', 'orders', 'totalSpent', 'latestPurchase', 'news', 'segments'];
    return searchFields.some((field) => String(row[field]).toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const toggleSortOrder = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOrder('asc');
      setSortField(field);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='container-box'>
      <div>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearchChange}
          className='SearchInput'
        />
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.field}>
                  {column.headerName}
                  {['customer', 'lastSeen', 'orders', 'totalSpent', 'latestPurchase', 'news', 'segments'].includes(column.field) && (
                    <button className='SortOrder' onClick={() => toggleSortOrder(column.field)}>
                      {sortField === column.field ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                    </button>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row) => (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td key={`${row.id}-${column.field}`}>
                    {column.renderCell ? column.renderCell({ value: row[column.field] }) : row[column.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GridalOfTask;
