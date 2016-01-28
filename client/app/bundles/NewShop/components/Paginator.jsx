import React      from 'react';

const Paginator = ({$$shopStore,...actions}) => {
  const $$management = $$shopStore.get('management')
  const $$activePanel = $$management.get('activePanel')
  let activeTab= (panel) => {
    if (panel === $$activePanel){
      return "active"
    }
  }
  let setTab = (panel) => {
     actions.setActivePanel(panel)
  }
  let nextTab = () => {
    switch($$activePanel){
      case 'CUSTOMIZE_PANEL':{
        actions.setActivePanel('PREFERENCES_PANEL')
        break;
      }
      case 'PREFERENCES_PANEL':{
        actions.setActivePanel('STOCK_PANEL')
        break;
      }
      case 'STOCK_PANEL':{
        actions.setActivePanel('PAYMENT_PANEL')
        break;
      }
      case 'PAYMENT_PANEL':{
        actions.setActivePanel('BILLING_PANEL')
        break;
      }
      case 'BILLING_PANEL':{
        break;
      }
    }
  }

  let backTab = () => {
    switch($$activePanel){
      case 'CUSTOMIZE_PANEL':{
        break;
      }
      case 'PREFERENCES_PANEL':{
        actions.setActivePanel('CUSTOMIZE_PANEL')
        break;
      }
      case 'STOCK_PANEL':{
        actions.setActivePanel('PREFERENCES_PANEL')
        break;
      }
      case 'PAYMENT_PANEL':{
        actions.setActivePanel('STOCK_PANEL')
        break;
      }
      case 'BILLING_PANEL':{
        actions.setActivePanel('PAYMENT_PANEL')
        break;
      }
    }
  }

  return (
    <nav className="center">
      <ul className="pagination">
        <li onClick={ e => { backTab()}}>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className={activeTab("CUSTOMIZE_PANEL")}><a href="#" onClick={e => {setTab("CUSTOMIZE_PANEL")}}>Name and Customize your Shop</a></li>
        <li className={activeTab("PREFERENCES_PANEL")}><a href="#" onClick={e => {setTab("PREFERENCES_PANEL")}}>Shop Preferences</a></li>
        <li className={activeTab("STOCK_PANEL")}><a href="#" onClick={e => {setTab("STOCK_PANEL")}}>Add your Stocks</a></li>
        <li className={activeTab("PAYMENT_PANEL")}><a href="#" onClick={e => {setTab("PAYMENT_PANEL")}}>Payment</a></li>
        <li className={activeTab("BILLING_PANEL")}><a href="#" onClick={e => {setTab("BILLING_PANEL")}}>Billing</a></li>
        <li onClick={ e => { nextTab()}}>
          <a  aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Paginator;
