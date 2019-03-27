import React, { Component } from 'reactn';
import { Segment } from 'semantic-ui-react'
import OrgSettings from './OrgSettings';
import TeamSettings from '../teams/TeamSettings';
import UserSettings from '../teams/UserSettings';

class Organization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organization: true, 
            teams: false, 
            users: false
        }
    }

    renderInnerPage = () => {
        const {organization, teams, users} = this.state;
        if(organization) {
            return (
                <OrgSettings />
            )
        } else if(teams) {
            return (
                <TeamSettings />
            )
        } else if(users) {
            return (
                <UserSettings />
            )
        }
    }
  
    render() {
      return (
        <div>
            <div className='graphite-sidebar'>
                <h3>Settings</h3>
                <Segment onClick={() => this.setState({organization: true, teams: false, users: false})} vertical className="pointer">Organization</Segment>
                <Segment onClick={() => this.setState({organization: false, teams: true, users: false})} vertical className="pointer">Teams</Segment>
                <Segment onClick={() => this.setState({organization: false, teams: false, users: true})} vertical className="pointer">Users</Segment>
                <Segment vertical></Segment>
            </div>
            <div className="right-side-content">
                {this.renderInnerPage()}
            </div>
        </div>
      )
    }
}

export default Organization;
