import styled from 'styled-components';

interface IListModalProps {
  category: string[];
  setSelector: (value: React.SetStateAction<string>) => void;
  setModal: (value: React.SetStateAction<boolean>) => void;
}

const ListModal = ({ category, setSelector, setModal }: IListModalProps) => {
  return (
    <Modal>
      {category.map((categoryName) => (
        <CategoryTitle
          key={categoryName}
          onClick={() => {
            setSelector(categoryName);
            setModal(false);
          }}
        >
          {categoryName}
        </CategoryTitle>
      ))}
    </Modal>
  );
};

const Modal = styled.div`
  border: solid 1px;
  padding-left: 55px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const CategoryTitle = styled.div`
  justify-content: center;
  font-size: 30px;
  padding-top: 5px;
  cursor: pointer;
`;
export default ListModal;
