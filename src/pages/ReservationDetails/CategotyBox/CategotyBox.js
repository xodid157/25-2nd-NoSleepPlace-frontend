import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CategotyBox({ name }) {
  const handleMenuCategory = e => {
    if (e === '대기중') {
      return `status=PENDING`;
    } else if (e === '지난내역') {
      return 'status=COMPLETED';
    } else if (e === '진행중') {
      return 'status=CONFIRMED';
    } else if (e === '취소') {
      return 'status=CANCELLED';
    } else if (e === '전체') {
      return '';
    }
  };

  return (
    <Categoty>
      <Link to={`books?${handleMenuCategory(name)}`}>
        <CategotyContent>{name}</CategotyContent>
      </Link>
    </Categoty>
  );
}

export default CategotyBox;

const Categoty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: white;
    box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 10%);
  }

  p {
    color: #72787f;
    font-size: 15px;
  }
`;
const CategotyContent = styled.p`
  font-size: 15px;
`;
