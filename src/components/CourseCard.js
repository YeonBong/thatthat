import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Grid,
  Segment,
  Rating,
} from 'semantic-ui-react'
import { RecentReview, LikeButton } from 'components'
import * as color from '../constants/color'

const OrganizationName = styled.h4`
  color: ${color.GRAY6};
  font-size: 13px;
  margin-bottom: 8px;
  `

const CourseName = styled.h3`
  color: ${color.GRAY9};
  font-size: 20px;
`

const LikeCount = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 12px;
  color: ${color.GRAY5};
`

const ReviewCount = styled.div`
  display: inline-block;
  color: ${color.MAIN_COLOR};
  font-weight: bold;
  font-size: 12px;
  padding-right: 10px;
`

const StyledRating = styled(Rating)`
  &.active::before {
    color: #f8ba00;
  }
`

const ImageGrid = styled(Grid.Column)`
  padding-right: 0 !important;
  padding-bottom: 0 !important;
`

const CourseImageBox = styled.div`
  position: relative;
  width: 100%;
  min-width: 85px;
  padding-top: 100%;
`

const CourseImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CourseCard = ({ course }) => {
  const {
    courseKey,
    organization,
    courseName,
    likeCount,
    reviewCount,
    ratingAvg,
    downloadURL,
  } = course
  return (
    <Segment.Group as="li">
      <Segment>
        <Grid as={Link} to={`/course/${courseKey}/info`}>
          <ImageGrid width={4}>
            <CourseImageBox>
              <CourseImage src={downloadURL} alt={courseName} />
            </CourseImageBox>
          </ImageGrid>
          <Grid.Column width={12} verticalAlign="middle">
            <div >
              <OrganizationName>{organization}</OrganizationName>
              <CourseName>{courseName}</CourseName>
              <LikeCount>{likeCount} <LikeButton /></LikeCount>
              <ReviewCount>리뷰 {reviewCount}</ReviewCount>
              <StyledRating defaultRating={ratingAvg} maxRating={5} disabled />
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <RecentReview />
      </Segment>
    </Segment.Group>
  )
}

export default CourseCard
