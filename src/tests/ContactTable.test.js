import React from "react";
import ContactTable from "../components/ContactTable";
import renderer from 'react-test-renderer';
import contacts_data from './sample_contacts'

it('renders list of contacts', () => {
    const div = document.createElement('div');
    const component = renderer.create(
        <ContactTable contacts={contacts_data} />,
        div
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
