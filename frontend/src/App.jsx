import { Route, BrowserRouter, Routes } from "react-router-dom"; // *여기를 수정해야 함
import MainPage from "./MainPage/MainPage";
import PostPage from "./PostPage/PostPage";
import CreatePage from "./CreatePage/CreatePage";
import EditPage from "./EditPage/EditPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post/:postId" element={<PostPage />} />
					<Route path="/create" element={<CreatePage />} />
					<Route path="/edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;