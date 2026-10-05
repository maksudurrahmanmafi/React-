

 const api =fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

const DataFromApi = ({api}) => {
    return (
        <div>
            <h2>Posts:</h2>
        </div>
    );
};

export default DataFromApi;