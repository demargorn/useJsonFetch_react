import useJsonFetch from '../hooks/useJsonFetch';
import './App.css';

const dataURL = 'http://localhost:7070/data';
const errorURL = 'http://localhost:7070/error';
const loadingURL = 'http://localhost:7070/loading';

const App = () => {
   const [data] = useJsonFetch(dataURL, {});
   const [loading] = useJsonFetch(loadingURL, {});
   const [error] = useJsonFetch(errorURL, {});


   console.log(data);
   console.log(loading);
   console.log(error);
   return (
      <main className='container container-md'>
         
      </main>
   );
};

export default App;
