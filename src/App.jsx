import { data } from "./assets/data";
import Folder from "./Folder";
import Employee from "./Employee.jsx";
import { products } from "./assets/items.jsx"

function App() {
  return (
    <div>
      <Employee item={products} />
    </div>
  )
}

export default App;