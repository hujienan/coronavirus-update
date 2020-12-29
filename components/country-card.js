import PropTypes from 'prop-types'
import moment from 'moment'

function CountryCard ({ data }) {
    let duration = Math.round(moment.duration(moment().diff(moment(data.updated_at))).asMinutes())
    return (
        <div className="my-4 py-8 px-8 max-w-sm mx-auto rounded-xl shadow-md space-y-4">
            <h1 className="text-center">{data.name} <small>({data.code})</small> </h1>
            <p className="text-right"><span className="text-green-600">{data.population}</span> <small>(population)</small></p>
            <p><span className="text-red-600">{data.today.confirmed}</span> New Cases and <span className="text-red-600">{data.today.deaths}</span> New Deaths</p>
            <p><span className="text-red-600">{data.latest_data.confirmed}</span> Total Cases, <span className="text-red-600">{data.latest_data.deaths}</span> Total Deaths and <span className="text-red-600">{data.latest_data.recovered}</span> Total Recovered</p>
            <p className="text-right text-xs">Last updated: {duration} minutes ago</p>
        </div>
    )
}

CountryCard.propTypes = {
    data: PropTypes.object
}

export default CountryCard