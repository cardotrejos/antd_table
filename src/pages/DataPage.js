import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchData, dataSelector } from '../slices/data'

import { Table, Button } from 'antd';
import 'antd/dist/antd.css';

const DataPage = () => {
  const dispatch = useDispatch()
  const { data, loading, hasErrors } = useSelector(dataSelector)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const renderData = () => {
    if (loading) return <p>Cargando datos...</p>
    if (hasErrors) return <p>No se pueden mostrar los datos.</p>
    
    const maxmin = data.reduce((state, current) => {
      if (!state.max || state.max < current.generate) {
        state.max = current.generate;
      }
    
      if (!state.min || state.min > current.generate) {
        state.min = current.generate;
      }
    
      return state;
    }, { min: null, max: null });
  
  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'date',
      width: '30%',
    },
    {
      title: 'Generación',
      dataIndex: 'generate',
      defaultSortOrder: ['ascend'],
      sorter: (a, b) => a.generate - b.generate
    },
    {
      title: 'Unidades',
      dataIndex: 'unit',
    }];
    console.log(maxmin)
    const getRowClassNames = (row, index) => {
      const classes = [];
      
      if (row.generate === maxmin.min) {
        classes.push('min');
      }
      
      if (row.generate === maxmin.max) {
        classes.push('max');
      }

      return classes.join(' ');
    }
    
    return(
      <div>
        <Button style={{margin:"20px"}} type="primary" onClick={() => dispatch(fetchData())}>Actualizar</Button>
        <Table
          rowKey="date"
          rowClassName={getRowClassNames}
          bordered
          dataSource={data}
          columns={columns}
        />
      </div>  
    )
  }

  return (
    <section>
      <h1>Datos</h1>
      {renderData()}
    </section>
  )
}

export default DataPage