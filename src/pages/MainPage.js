import React from 'react'
import { Route } from 'react-router-dom'
import {
  CategoryListContainer,
  CourseListContainer,
} from 'containers'
import { MainMenu } from 'components'

const MainPage = () => (
  <React.Fragment>
    <MainMenu />
    <CategoryListContainer />
    <Route exact path="/" component={CourseListContainer} />
    <Route path="/courses/:category" component={CourseListContainer} />
  </React.Fragment>
)

export default MainPage
