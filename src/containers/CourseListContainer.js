import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseList } from 'components'
import { loadCourseList } from 'ducks/modules/category'

class CourseListContainer extends Component {
  static defaultProps = {
    courses: [],
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  componentWillReceiveProps(nextProps) {
    const { url: currentUrl } = this.props.match
    const { url: nextUrl } = nextProps.match
    if (currentUrl !== nextUrl) {
      this.props.onMount()
    }
  }

  render() {
    const { courses } = this.props
    return (
      <React.Fragment>
        <CourseList courses={courses} />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    courses: state.category.courses,
  }),
  (dispatch, ownProps) => {
    const { category } = ownProps.match.params || ''
    return {
      onMount: () => dispatch(loadCourseList(category)),
    }
  },
)(CourseListContainer)
