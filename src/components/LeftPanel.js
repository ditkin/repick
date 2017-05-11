import React, {Component} from 'react';
import { Link } from 'react-router'

class LeftPanel extends Component {
    render() {
        return (
            <ul className="Nav" data-qe-id="Nav-ID">
                <li className="Nav-item--icon-tag is-selected"><Link href="contacts">Contacts</Link></li>
                <li><a href="contacts" data-qe-id="Nav-ID-ITEM3">Unsubscribed</a></li>
                <li><a href="contacts" data-qe-id="Nav-ID-ITEM4">Not on a List</a></li>
                <li className="Nav-footer"><a href="contacts" data-qe-id="Nav-ID-ITEM6">Without Email Address</a></li>
                <hr className="Divider--horizontal "></hr>
                <li className="Nav-item--icon-list"><Link href="lists">Lists</Link></li>
                <hr className="Divider--horizontal "></hr>
                <li className="Nav-item--icon-tag"><a href="about">Tags</a></li>
                <hr className="Divider--horizontal "></hr>
                <li className="Nav-item--icon-group"><a href="about">Sign-Up Tools</a></li>
                <hr className="Divider--horizontal "></hr>
                <li className="Nav-item--icon-half"><a href="about">Activity</a></li>
                <hr className="Divider--horizontal "></hr>
            </ul>
        );
    }
}

export default LeftPanel;
