import React            from 'react';
import ArticlesPanel from './Articles/Panel'
import AboutPanel from './About/Panel'
import ReviewPanel from './Review/Panel'
import ContactPanel from './Contact/Panel'


const TabSwitch = ({$$shopStore,...actions}) => {
  const $$management = $$shopStore.get('management')
  switch($$management.get('activeTab')){
    case "ARTICLES_TAB":{
      return(
        <ArticlesPanel {...{$$shopStore,...actions}}></ArticlesPanel> 
      )
    }
    case "REVIEW_TAB":{
      return(
        <ReviewPanel {...{$$shopStore,...actions}}></ReviewPanel> 
      )
    }
    case "CONTACT_TAB":{
      return(
        <ContactPanel {...{$$shopStore,...actions}}></ContactPanel> 
      )
    }
    case "ABOUT_TAB":{
      return(
        <AboutPanel {...{$$shopStore,...actions}}></AboutPanel> 
      )
    }
    default: {
      return(
        <List {...{$$shopStore,...actions}}></List>
      )
    }

  }
}

export default TabSwitch;