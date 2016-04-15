var AllSkills = React.createClass({
  handleDelete(){
    this.props.handleDelete();
  },
  onUpdate(skill){
    this.props.handleUpdate(skill);
  },
  render(){
      var skills = this.props.skills.map((skill) => {
        return (
          <div key={skill.id}>
          <Skill  skill={skill}
                  handleDelete={this.handleDelete.bind(this, skill.id)}
                  handleUpdate={this.onUpdate} />

          </div>
        )
      });
    return(
      <div>
        {skills.reverse()}
      </div>
    )
  }
});
