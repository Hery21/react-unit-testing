import CategoriesInput from '../Components/CategoriesInput';
import CategoriesTable from '../Components/CategoriesTable';

function CategoriesPage({
  categoryName, categories, handleChange, handleSubmit, deleteCategory,
}) {
  return (
    <>
      <CategoriesInput
        categoryName={categoryName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <CategoriesTable categories={categories} deleteCategory={deleteCategory} />
    </>
  );
}

export default CategoriesPage;
