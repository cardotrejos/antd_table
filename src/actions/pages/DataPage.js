import { fetchData } from '../actions/dataActions'
import { Data } from '../components/Data'

const DataPage = ({ dispatch, loading, data, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  // Show loading, error, or success state
  const renderData = () => {
    if (loading) return <p>Loading data...</p>
    if (hasErrors) return <p>Unable to display data.</p>
    return data.map(dat => <Data key={dat.id} dat={dat} />)
  }

  return (
    <section>
      <h1>Data</h1>
      {renderData()}
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.data.loading,
  data: state.data.data,
  hasErrors: state.data.hasErrors,
})

export default connect(mapStateToProps)(DataPage)