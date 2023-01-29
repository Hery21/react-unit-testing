import Category from './Category';

function CategoriesTable({ categories, deleteCategory }) {
  return (
    <div data-testid="categories-table" className="container">
      {categories.length === 0
        ? 'There is no category'
        : (
          <table data-testid="table-category" className="table">
            <thead>
              <tr>
                <th scope="col">NAME</th>
                <th scope="col">CREATED AT</th>
                <th scope="col">UPDATED AT</th>
              </tr>
            </thead>
            <tbody>
              {
            categories
              .map((category) => (
                <Category
                  key={category.id}
                  category={category}
                  deleteCategory={deleteCategory}
                />
              ))
          }
            </tbody>
          </table>
        )}
    </div>
  );
}

export default CategoriesTable;
