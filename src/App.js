import React, { useState } from 'react';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import background from './background.jpg';

const DummyText = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad iusto id excepturi, consectetur enim. Aspernatur quisquam facere nesciunt commodi culpa voluptate mollitia animi labore aut, excepturi dolorum sapiente odio.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ullam odit! Corporis et reiciendis facere commodi aliquid perferendis? Aperiam, illo quisquam fugiat fugit accusamus quas possimus impedit asperiores ea. In.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore veniam, cumque expedita doloremque ad iste laboriosam quae maxime! Incidunt eveniet alias inventore dicta, delectus soluta qui amet atque quibusdam laboriosam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi ducimus velit veritatis magnam, nesciunt voluptate aliquam eum! Aperiam nisi voluptatum fuga mollitia iure non pariatur qui soluta, beatae quibusdam?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque animi corporis ea quia commodi dicta, laborum nobis, amet voluptate, sequi nesciunt! Quasi ea, reprehenderit blanditiis porro quaerat eligendi illum fuga?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad iusto id excepturi, consectetur enim. Aspernatur quisquam facere nesciunt commodi culpa voluptate mollitia animi labore aut, excepturi dolorum sapiente odio.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ullam odit! Corporis et reiciendis facere commodi aliquid perferendis? Aperiam, illo quisquam fugiat fugit accusamus quas possimus impedit asperiores ea. In.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore veniam, cumque expedita doloremque ad iste laboriosam quae maxime! Incidunt eveniet alias inventore dicta, delectus soluta qui amet atque quibusdam laboriosam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi ducimus velit veritatis magnam, nesciunt voluptate aliquam eum! Aperiam nisi voluptatum fuga mollitia iure non pariatur qui soluta, beatae quibusdam?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque animi corporis ea quia commodi dicta, laborum nobis, amet voluptate, sequi nesciunt! Quasi ea, reprehenderit blanditiis porro quaerat eligendi illum fuga?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad iusto id excepturi, consectetur enim. Aspernatur quisquam facere nesciunt commodi culpa voluptate mollitia animi labore aut, excepturi dolorum sapiente odio.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ullam odit! Corporis et reiciendis facere commodi aliquid perferendis? Aperiam, illo quisquam fugiat fugit accusamus quas possimus impedit asperiores ea. In.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore veniam, cumque expedita doloremque ad iste laboriosam quae maxime! Incidunt eveniet alias inventore dicta, delectus soluta qui amet atque quibusdam laboriosam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi ducimus velit veritatis magnam, nesciunt voluptate aliquam eum! Aperiam nisi voluptatum fuga mollitia iure non pariatur qui soluta, beatae quibusdam?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque animi corporis ea quia commodi dicta, laborum nobis, amet voluptate, sequi nesciunt! Quasi ea, reprehenderit blanditiis porro quaerat eligendi illum fuga?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad iusto id excepturi, consectetur enim. Aspernatur quisquam facere nesciunt commodi culpa voluptate mollitia animi labore aut, excepturi dolorum sapiente odio.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ullam odit! Corporis et reiciendis facere commodi aliquid perferendis? Aperiam, illo quisquam fugiat fugit accusamus quas possimus impedit asperiores ea. In.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore veniam, cumque expedita doloremque ad iste laboriosam quae maxime! Incidunt eveniet alias inventore dicta, delectus soluta qui amet atque quibusdam laboriosam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi ducimus velit veritatis magnam, nesciunt voluptate aliquam eum! Aperiam nisi voluptatum fuga mollitia iure non pariatur qui soluta, beatae quibusdam?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque animi corporis ea quia commodi dicta, laborum nobis, amet voluptate, sequi nesciunt! Quasi ea, reprehenderit blanditiis porro quaerat eligendi illum fuga?</p>);
    </div>
  );
};

function App() {
  const [layoutScrollTop, setScrollTop] = useState();

  return (
    <AppLayout
      onLayoutScroll={setScrollTop}
    >
      <AppBar
        title="Prominent App Bar"
        background={background}
        layoutScrollTop={layoutScrollTop}
      />
      <DummyText />
    </AppLayout> 
  );
}

export default App;
