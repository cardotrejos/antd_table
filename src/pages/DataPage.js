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
    
    function onChange(sorter) {
    }

    return(
      <div>
        <Button style={{margin:"20px"}} type="primary" onClick={fetchData}>Actualizar</Button>
        <Table
          rowKey="date"
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={data}
          columns={columns}
          onChange={onChange}
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