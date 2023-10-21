import React, { useEffect } from 'react'
import { useState } from 'react'
import Nav from './component/Nav'
import Card from './component/card';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import { apiUrl } from './component/helpers';
import CountryDetail from './component/CountryDetail';
import About from './component/About';

const App = () => {
  const [apiData, setApiData] = useState([])
  const [fillteredData, setFillteredData] = useState([])
  const [searchVal, setSearchVal] = useState("");


  const fetchData = async () => {
    const { data } = await axios.get(apiUrl)
    setApiData(data)
    setFillteredData(data)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const filterData = () => {
    const data = apiData.filter((item) => {
      return item.name.common.toLowerCase().includes(searchVal.toLowerCase());
    })
    setFillteredData(data)
  }
  useEffect(() => {
    filterData()
  }, [searchVal])
  return (
    <>
      <Nav setSearchVal={setSearchVal} searchVal={searchVal} />
      <Routes>
        <Route path='/' element={
          <div className="cardContainer">
            {
              fillteredData.length ?

                fillteredData.map((item) => <Card data={item} key={item.name.common} />)
                :
                <h1>No Data is here To show</h1>
            }

          </div>
        } />
        <Route path="/country/:name" element={<CountryDetail data={apiData} />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<div><h1>404 Page Not Found</h1></div>} />

      </Routes>
    </>
  )
}

export default App
