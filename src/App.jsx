import MainHeader from "./components/MainHeader";
import PostLists from "./components/PostLists";
import { useState } from 'react';
function App() {
  const [isModalOpen, setModalClose] = useState(false)
  const changeModalCloseHandler = () => {
      setModalClose(false)
  }
  const changeModalOpenHandler = () => {
    setModalClose(true)
}
  return (
    <>
      <MainHeader onCreatePost={changeModalOpenHandler}/>
      <main>
        <PostLists isModalOpen={isModalOpen} onCloseModal={changeModalCloseHandler}/>
      </main>
      
    </>
  );
}

export default App;
