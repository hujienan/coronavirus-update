import { useEffect, useState } from 'react';
import useSWR from 'swr'
import CountryCard from './country-card'

function Content () {
  
	const fetcher = url => fetch(url).then(r => r.json())
	const { data, error } = useSWR(
    "https://corona-api.com/countries",
    fetcher,
    {
      onSuccess: (data) => {
        setRecords([...sortRecords(data.data, sortWay)])
      }
    }
  );
  
  const sortWayOptions = [
    {
      key: 'name',
      label: 'Country Name'
    },
    {
      key: 'confirmed',
      label: "Confirmed"
    },
    {
      key: 'population',
      label: "Population"
    }
  ]

  const [sortWay, setSortWay] = useState(sortWayOptions[0]['key'])

  const [records, setRecords] = useState(null)

  useEffect(() => {
    if (data) {
      setRecords([...sortRecords(data.data, sortWay)])
    }
  }, [data, sortWay])


  const sortRecords = (records, sortWay) => {
    if (sortWay === 'name') {
      records.sort((a, b) => {
        return a[sortWay].toLowerCase().localeCompare(b[sortWay].toLowerCase())
      })
    }
    if (sortWay === 'confirmed') {
      records.sort((a, b) => b['latest_data'][sortWay] - a['latest_data'][sortWay])
    }
    if (sortWay === 'population') {
      records.sort((a, b) => b[sortWay] - a[sortWay])
    }
    return records
  }

	if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>  

  return (
    <div className="px-4">
      <p className="text-right sticky top-1 my-4">Sort By {' '} 
        <select value={sortWay} onChange={(e) => setSortWay(e.target.value)}>
          {sortWayOptions.map((option) => (
            <option key={`sort-by-${option.key}`} value={option.key}>{option.label}</option>
          ))}
        </select>
      </p>
      <table className="border-collapse border-2 border-green-800 w-full hidden md:table 2xl:text-5xl 2xl:text-red-600">
        <thead>
          <tr>
            <th className="border border-green-600">Country</th>
            <th className="border border-green-600">Population</th>
            <th className="border border-green-600">Total Cases</th>
            <th className="border border-green-600">New Cases</th>
            <th className="border border-green-600">New Deaths</th>
            <th className="border border-green-600">Total Deaths</th>
            <th className="border border-green-600">Total recovered</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item) => (
            <tr key={item.code} className="text-green-800 text-center hover:text-white hover:bg-green-800 cursor-pointer 2xl:text-red-600">
              <td className="border border-green-600">{item.name}</td>
              <td className="border border-green-600">{item.population}</td>
              <td className="border border-green-600">{item.latest_data.confirmed}</td>
              <td className="border border-green-600 font-bold">{item.today.confirmed}</td>
              <td className="border border-green-600 font-bold">{item.today.deaths}</td>
              <td className="border border-green-600 font-bold">{item.latest_data.deaths}</td>
              <td className="border border-green-600 font-bold">{item.latest_data.recovered}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="md:hidden">
        {records.map((record) => (
          <CountryCard data={record} key={record.code}/>
        ))}
      </div>
    </div>
	)

}

export default Content

