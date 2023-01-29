import ItemForm from '../Components/ItemForm';
import ItemTable from '../Components/ItemTable';

function ItemPage({
  users,
  categories,
  items,
  handleSubmit,
  itemId,
  itemName,
  itemDescription,
  itemPrice,
  itemImgUrl,
  itemCategoryId,
  handleItemNameChange,
  handleItemDescriptionChange,
  handleItemPriceChange,
  handleItemImgUrlChange,
  handleItemCategoryId,
  handleItemId,
  editItem,
  deleteItem,
}) {
  return (
    <>
      <ItemForm
        categories={categories}
        handleSubmit={handleSubmit}
        itemId={itemId}
        itemName={itemName}
        itemDescription={itemDescription}
        itemPrice={itemPrice}
        itemImgUrl={itemImgUrl}
        itemCategoryId={itemCategoryId}
        handleItemNameChange={handleItemNameChange}
        handleItemDescriptionChange={handleItemDescriptionChange}
        handleItemPriceChange={handleItemPriceChange}
        handleItemImgUrlChange={handleItemImgUrlChange}
        handleItemCategoryId={handleItemCategoryId}
        handleItemId={handleItemId}
      />
      <ItemTable
        users={users}
        categories={categories}
        items={items}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default ItemPage;
