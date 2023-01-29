import Item from './Item';

function ItemTable({
  users, items, categories, editItem, deleteItem,
}) {
  return (
    <div className="container">
      {items.length === 0 ? 'There is no item' : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">PRICE</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">CREATED BY</th>
            </tr>
          </thead>
          <tbody>
            {
          items
            .map((item) => (
              <Item
                key={item.id}
                item={item}
                category={categories.length === 0 ? 'Category deleted' : categories.find((category) => category.id === item.categoryId).name}
                user={users.find((user) => user.id === item.authorId).username}
                editItem={editItem}
                deleteItem={deleteItem}
              />
            ))
        }
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ItemTable;
