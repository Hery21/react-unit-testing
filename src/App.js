import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NotFound from './Pages/NotFound';
import CustomNavbar from './Components/CustomNavbar';
import ItemPage from './Pages/ItemPage';
import CategoriesPage from './Pages/CategoriesPage';

function App() {
  const [users, setUsers] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImgUrl, setItemImgUrl] = useState('');
  const [itemCategoryId, setItemCategoryId] = useState(1);

  const URL = 'http://localhost:5000';

  useEffect(() => {
    const fetchCategories = fetch(`${URL}/categories`);

    const fetchItems = fetch(`${URL}/items`);

    const fetchUsers = fetch(`${URL}/users`);

    Promise.all([fetchCategories, fetchItems, fetchUsers])
      .then(([categoriesRes, itemsRes, usersRes]) => Promise.all([
        categoriesRes.json(), itemsRes.json(), usersRes.json(),
      ]))
      .then(([categoriesRes, itemsRes, usersRes]) => {
        setCategories(categoriesRes);
        setItems(itemsRes);
        setUsers(usersRes);
      });
  }, []);

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = {
      id: categories.length === 0 ? 1 : categories.sort((a, b) => b.id - a.id)[0].id + 1,
      name: categoryName,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    toast.success('Category successfully created!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setCategories([category, ...categories]);
    setCategoryName('');
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    const currentItem = items.find((item) => item.id === itemId);

    if (currentItem) {
      setItems(items.map((item) => {
        if (item.id === currentItem.id) {
          return {
            ...currentItem,
            name: itemName,
            description: itemDescription,
            price: itemPrice,
            imgUrl: itemImgUrl,
            categoryId: itemCategoryId,
          };
        }

        return item;
      }));
    } else {
      setItems([...items, {
        id: items.length === 0 ? 1 : items[items.length - 1].id + 1,
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        imgUrl: itemImgUrl,
        authorId: 1,
        categoryId: itemCategoryId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }]);
    }

    setItemId('');
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setItemImgUrl('');
    setItemCategoryId(1);
  };

  const editItem = (id) => {
    const currentItem = items.find((item) => item.id === id);
    setItemId(currentItem.id);
    setItemName(currentItem.name);
    setItemDescription(currentItem.description);
    setItemPrice(currentItem.price);
    setItemImgUrl(currentItem.imgUrl);
    setItemCategoryId(currentItem.categoryId);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    toast.success('Item successfully deleted!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleItemId = (e) => {
    setItemId(e.target.value);
  };

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleItemDescriptionChange = (e) => {
    setItemDescription(e.target.value);
  };

  const handleItemPriceChange = (e) => {
    setItemPrice(e.target.value);
  };

  const handleItemImgUrlChange = (e) => {
    setItemImgUrl(e.target.value);
  };

  const handleItemCategoryId = (e) => {
    setItemCategoryId(Number(e.target.value));
  };

  return (
    <Routes>
      <Route path="/" element={<CustomNavbar />}>
        <Route
          path="/"
          element={(
            <ItemPage
              users={users}
              categories={categories}
              items={items}
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
              handleSubmit={handleItemSubmit}
              editItem={editItem}
              deleteItem={deleteItem}
            />
)}
        />
        <Route
          path="/categories"
          element={(
            <CategoriesPage
              categoryName={categoryName}
              categories={categories}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              deleteCategory={deleteCategory}
            />
)}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
