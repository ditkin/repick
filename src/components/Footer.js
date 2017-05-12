import React from 'react';

const Footer = ({lists, recipients}) => {
  const lists_string = lists === 1 ? 'List' : 'Lists';
  const recipients_string = recipients === 1 ? ' Recipient' : 'Recipients';

  return (
    <div className="footer u-zeta u-borderTop u-paddingSidesHalf u-relative">
      <div> {lists} {lists_string} Selected </div>
      <div className="u-weightSemiBold"> {recipients} {recipients_string} Selected </div>
    </div>
  );
}

export default Footer;
