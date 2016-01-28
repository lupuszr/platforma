import React    from 'react';

export const Main = ({$$shopStore, ...actions}) => {
  const $$mainCategories = $$shopStore.get('mainCategories')
  
  return (
    <div className="col-lg-3">
      <select className="form-control article__category__select" id="categories" onChange={ node => { actions.fetchCategories(node.target.value); actions.articleSetMainCategory(node.target.value)}}>
        <option selected disabled>Choose Main Category</option>
        {
          $$mainCategories.map( category => {
            return (
              <option value={ category.get('id') } key={category.get('id')}>{category.get('name')}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export const Top = ({$$shopStore, ...actions}) => {
  const $$categories = $$shopStore.get('categories')
  if (!$$categories.isEmpty()){
    return (
      <div className="col-lg-3">
        <select className="form-control article__category__select" onChange={ node => { actions.fetchSubCategories(node.target.value); console.log(node.target.value); actions.articleSetCategory(node.target.value)}}>
          <option selected disabled>Choose Category</option>
          {
            $$categories.map( category => {
              return (
                <option value={category.get('id')} key={category.get('id')}>{category.get('name')}</option>
              )
            })
          }
        </select>
      </div>
    )
  }else {
    return (<spam></spam>);
  }
}

export const Sub = ({$$shopStore, ...actions}) => {
  const $$subCategories = $$shopStore.get('subCategories')
  if(!$$subCategories.isEmpty()) {
    return(
      <div className="col-lg-3">
        <select className="form-control article__category__select" onChange={ node => { actions.articleSetSubCategory(node.target.value);}}>
          <option selected disabled>Choose Sub Category</option>
          { 
            $$subCategories.map( category => {
              return (
                <option value={category.get('id')} key={category.get('id')}>{category.get('name')}</option>
              )
            })
          }
        </select>
      </div>
    )
  }else{
    return (<spam></spam>);
  }
}