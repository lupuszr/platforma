import React            from 'react';
import CustomizePanel   from './customizePanel/Panel'
import PreferencesPanel from './preferencesPanel/Panel'
import StockPanel       from './stockPanel/Panel'

const PanelSwitch = ({$$shopStore,...actions}) => {
  const $$management = $$shopStore.get('management')
  switch($$management.get('activePanel')){
    case "CUSTOMIZE_PANEL":{
      return(
        <CustomizePanel {...{$$shopStore,...actions}}></CustomizePanel>
      )
    }
    case "PREFERENCES_PANEL":{
      return(
        <PreferencesPanel {...{$$shopStore,...actions}}></PreferencesPanel>
      ) 
    }
    case "STOCK_PANEL":{
      return(
        <StockPanel {...{$$shopStore,...actions}}></StockPanel>        
      ) 
    }
    case "PAYMENT_PANEL":{
      return(
        <StockPanel {...{$$shopStore,...actions}} ></StockPanel>        
        
      ) 
    }
    case "BILLING_PANEL":{
      return(
        <StockPanel {...{$$shopStore,...actions}}></StockPanel>  
      ) 
    }
    default: {
      return(
        <CustomizePanel {...{$$shopStore,...actions}}></CustomizePanel>
      )
    }

  }
}

export default PanelSwitch;