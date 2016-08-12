import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends Component {
    constructor(props, context){
      super(props,context);
      this.onTitleChange=this.onTitleChange.bind(this);
      this.onClickSave = this.onClickSave.bind(this);
      this.state = {
        course: {title: ""}
      };
    }
    onTitleChange(event){
      const course = this.state.course;
      course.title = event.target.value;
      this.setState({course: course});
    }
    onClickSave(){
      this.props.actions.createCourse(this.state.course);
    }
    courseRow(course,index){
      return <div key={index}>{course.title}</div>; 
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Courses</h2>
                <input type="text"
                onChange={this.onTitleChange}
                value={this.state.course.title} />

                <input
                  type="submit"
                  value="save"
                  onClick={this.onClickSave} />
            </div>
        );
    }
}
CoursePage.PropTypes = {
  courses: PropTypes.array.isRequired,
  action: PropTypes.object.isRequired
}


 function mapStateToProps(state, ownProps){
   return {
     courses: state.courses,

   };
 }
 function mapDispatchToProps(dispatch){
   return {
     actions: bindActionCreators(courseActions,dispatch)
   }
 }


export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
