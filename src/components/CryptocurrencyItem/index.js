// Write your JS code here
import {Component} from 'react'
import './index.css'

const lists = {
  currency_logo: 'https://www.cryptocompare.com/media/19969/xmr.png',
  currency_name: 'XMR',
  euro_value: '129.04',
  id: 'ce630dfc-5ce9-4117-87e1-77b56c81b7a2',
  usd_value: '140.56',
}

class CryptocurrencyItem extends Component {
  render() {
    const {list} = this.props
    return (
      <li className="mainrow">
        <div className="logoAndNameCont">
          <img
            src={list.currency_logo}
            alt={list.currency_name}
            className="listlogo"
          />
          <p className="curencyname">{list.currency_name}</p>
        </div>
        <div className="usdvalueAndEurovalueContainer">
          <p className="curencyname">{list.usd_value}</p>
          <p className="curencyname">{list.euro_value}</p>
        </div>
      </li>
    )
  }
}
export default CryptocurrencyItem
