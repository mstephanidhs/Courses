import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
import { RegularList } from './components/lists/Regular';
import { RegularList } from './components/lists/Numbered';
import { authors, books } from './data/authors';

function App() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={SmallAuthorListItem}
      />
      <NumberedList
        items={authors}
        sourceName={'author'}
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName={'book'}
        ItemComponent={SmallBookListItem}
      />
      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
