// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  state = {coindata: [], isloading: true}

  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responsedata = await response.json()
    console.log(responsedata)
    this.setState({
      coindata: responsedata,
      isloading: false,
    })
  }

  loadview = () => {
    const {coindata} = this.state
    return (
      <div className="cardMain">
        <h1 className="crypthead">Cryptocurrency Tracker</h1>
        <div className="imgCont">
          <img
            className="bitcoinimg"
            alt="cryptocurrency"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          />
        </div>
        <div className="innerCard">
          <div className="main-table-head">
            <h1 className="cointypehead">Coin Type</h1>
            <div className="usdAndEuroCont">
              <h1 className="usd">USD</h1>
              <h1 className="euro">EURO</h1>
            </div>
          </div>
          <ul className="ullcont">
            {coindata.map(each => (
              <CryptocurrencyItem key={each.id} list={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isloading} = this.state
    return (
      <div>
        {isloading ? (
          <div data-testid="loader" className="spinCont">
            <Loader type="TailSpin" color="red" width={50} height={50} />
          </div>
        ) : (
          this.loadview()
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
