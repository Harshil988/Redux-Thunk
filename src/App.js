import PostList from './postList';
import PostData from './postData';
// import ImportData from './ImportData';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route>
          <Route exact path="/" element={<PostList />} />
          <Route path="/postdata/:id" element={<PostData />} />
          <Route path="*" element={<PostList/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
