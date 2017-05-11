import React from "react";
import Contacts from "../components/Contacts";
import {Provider} from "react-redux";
import {createStore} from "redux";
import ReactTestUtils from "react-addons-test-utils";

const reducer = (state = {}, action) => {
    return {contacts: [], count: 0};
};

const store = createStore(reducer);

const renderer = ReactTestUtils.createRenderer();

it('renders without crashing', () => {
    const div = document.createElement('div');
    renderer.render(
        <Provider store={store}>
            <Contacts />
        </Provider>,
        div
    );
});
