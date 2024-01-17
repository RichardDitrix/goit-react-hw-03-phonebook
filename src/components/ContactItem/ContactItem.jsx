import PropTypes from 'prop-types';

import { Info, Item } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => (
  <Item>
    <Info>
      {name}: {number}
    </Info>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </Item>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
