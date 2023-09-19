export const SearchFilter = () => {
  const handleSubmit = () => {
    // evt.preventDefault();
    // console.log(`Signed up as: ${this.state.login}`);
    console.log('Press search');

    // Проп, який передається формі для виклику під час сабміту
    // this.props.onSubmit({ ...this.state });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Car brand
        <input
          type="text"
          placeholder="Enter the text"
          // value={login}
          //  onChange={this.handleChange}
        />
      </label>
      <label>
        Price/1 hour
        <input
          type="text"
          placeholder="To $"
          // value={login}
          //  onChange={this.handleChange}
        />
      </label>
      <label>
        Car mileage / km
        <input
          type="text"
          placeholder="From"
          // value={login}
          //  onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="To"
          // value={login}
          //  onChange={this.handleChange}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
