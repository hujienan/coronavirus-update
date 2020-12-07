import useSWR from 'swr'
import moment from 'moment'

function Content () {
	const fetcher = url => fetch(url).then(r => r.json())
	const { data, error } = useSWR(
    "https://corona-api.com/countries",
    fetcher
  );
	if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
	// render data
	let records = data.data;
  return (
		<table className="border-collapse border border-green-800">
			<thead>
				<tr>
					<th className="border border-green-600">Country</th>
					<th className="border border-green-600">Population</th>
					<th className="border border-green-600">New Cases</th>
					<th className="border border-green-600">New Deaths</th>
					<th className="border border-green-600">Total Cases</th>
					<th className="border border-green-600">Total Deaths</th>
					<th className="border border-green-600">Total recovered</th>
					<th className="border border-green-600">Critical</th>
					<th className="border border-green-600">Updated At</th>
				</tr>
			</thead>
			<tbody>
				{records.map((item) => (
					<tr key={item.code}>
						<td className="border border-green-600">{item.name}</td>
						<td className="border border-green-600">{item.population}</td>
						<td className="border border-green-600">{item.today.confirmed}</td>
						<td className="border border-green-600">{item.today.deaths}</td>
						<td className="border border-green-600">{item.latest_data.confirmed}</td>
						<td className="border border-green-600">{item.latest_data.deaths}</td>
						<td className="border border-green-600">{item.latest_data.recovered}</td>

						<td className="border border-green-600">{item.latest_data.critical}</td>



						<td className="border border-green-600">{moment(item.updated_at).format("H:mm:ss, MMM Do")}</td>

					</tr>
				))}
			</tbody>
		</table>
	)

}

export default Content

